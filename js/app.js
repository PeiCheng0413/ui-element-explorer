/* =========================================================
   元件圖鑑 — 互動邏輯
   探索模式：滑鼠移過去畫引線標註，點一下釘選並展開說明
   體驗模式：示範網站恢復正常操作
   ========================================================= */
(function () {
  'use strict';

  var ELEMENTS = window.ELEMENTS || [];
  var CATEGORIES = window.CATEGORIES || [];
  var byId = {};
  ELEMENTS.forEach(function (e) { byId[e.id] = e; });
  var catZh = {};
  CATEGORIES.forEach(function (c) { catZh[c.id] = c.zh; });

  /* 沒辦法單獨用滑鼠指到的元件，改指到最能代表它的節點 */
  var TARGETS = { placeholder: '#f-phone' };
  /* 平常藏起來的元件，被選到之前要先讓它出現 */
  var REVEALS = { modal: 'modal', overlay: 'modal', toast: 'toast', tooltip: 'tooltip' };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var demo = $('#demo');
  var stage = $('#stage-scroll');
  var insp = $('#insp');
  var box = $('#insp-box');
  var sizeTag = $('#insp-size');
  var label = $('#insp-label');
  var line = $('#insp-line');
  var dot = $('#insp-dot');
  var dock = $('#dock');
  var copied = $('#copied');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = { mode: 'inspect', hoverEl: null, pinnedEl: null, current: null };

  /* ---------- 主題 ---------- */
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('fg-theme'); } catch (err) {}
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme', 'dark');

  $('#theme-btn').addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('fg-theme', next); } catch (err) {}
    if (state.current) draw(state.current);
  });

  /* ---------- 模式 ---------- */
  function setMode(mode) {
    state.mode = mode;
    document.body.setAttribute('data-mode', mode);
    $('#mode-inspect').setAttribute('aria-pressed', String(mode === 'inspect'));
    $('#mode-use').setAttribute('aria-pressed', String(mode === 'use'));
    $('#stage-badge').textContent = mode === 'inspect' ? 'Inspect on' : 'Try it';
    if (mode === 'use') { unpin(); hideInsp(); }
    try { localStorage.setItem('fg-mode', mode); } catch (err) {}
  }
  $('#mode-inspect').addEventListener('click', function () { setMode('inspect'); });
  $('#mode-use').addEventListener('click', function () { setMode('use'); });
  try {
    var savedMode = localStorage.getItem('fg-mode');
    if (savedMode === 'use') setMode('use');
  } catch (err) {}

  /* ---------- 標註層 ---------- */
  function hideInsp() { insp.hidden = true; }

  function visibleRect(el) {
    var r = el.getBoundingClientRect();
    var s = stage.getBoundingClientRect();
    var top = Math.max(r.top, s.top), bottom = Math.min(r.bottom, s.bottom);
    var left = Math.max(r.left, s.left), right = Math.min(r.right, s.right);
    if (bottom - top < 6 || right - left < 4) return null;
    return { top: top, bottom: bottom, left: left, right: right, w: right - left, h: bottom - top, raw: r };
  }

  function draw(el) {
    var data = el.__data;
    var r = visibleRect(el);
    if (!r || !data) { hideInsp(); return; }
    insp.hidden = false;

    box.style.left = r.left + 'px';
    box.style.top = r.top + 'px';
    box.style.width = r.w + 'px';
    box.style.height = r.h + 'px';
    sizeTag.textContent = Math.round(r.raw.width) + ' × ' + Math.round(r.raw.height);
    sizeTag.style.top = (r.top - box.offsetTop < 20) ? '2px' : '-19px';

    label.querySelector('b').textContent = data.zh;
    label.querySelector('span').textContent = data.en;
    label.querySelector('code').textContent = state.pinnedEl === el ? data.tag : data.tag + '　·　點一下看更多';

    var vw = window.innerWidth, vh = window.innerHeight;
    var lw = label.offsetWidth, lh = label.offsetHeight, gap = 34, pad = 12;
    var lx, ly, side;

    if (r.right + gap + lw <= vw - pad) { side = 'right'; lx = r.right + gap; }
    else if (r.left - gap - lw >= pad) { side = 'left'; lx = r.left - gap - lw; }
    else if (r.bottom + gap + lh <= vh - pad) { side = 'below'; lx = Math.min(Math.max(r.left, pad), vw - lw - pad); }
    else { side = 'above'; lx = Math.min(Math.max(r.left, pad), vw - lw - pad); }

    if (side === 'right' || side === 'left') ly = Math.min(Math.max(r.top + r.h / 2 - lh / 2, pad), vh - lh - pad);
    else if (side === 'below') ly = r.bottom + gap;
    else ly = Math.max(r.top - gap - lh, pad);

    label.style.left = lx + 'px';
    label.style.top = ly + 'px';

    var px, py, ax, ay, sx, sy;
    if (side === 'right') { px = r.right; py = r.top + r.h / 2; ax = lx; ay = ly + lh / 2; sx = ax - 16; sy = ay; }
    else if (side === 'left') { px = r.left; py = r.top + r.h / 2; ax = lx + lw; ay = ly + lh / 2; sx = ax + 16; sy = ay; }
    else if (side === 'below') { px = r.left + Math.min(r.w / 2, 60); py = r.bottom; ax = lx + Math.min(lw / 2, 40); ay = ly; sx = ax; sy = ay - 14; }
    else { px = r.left + Math.min(r.w / 2, 60); py = r.top; ax = lx + Math.min(lw / 2, 40); ay = ly + lh; sx = ax; sy = ay + 14; }

    line.setAttribute('d', 'M' + px + ',' + py + ' L' + sx + ',' + sy + ' L' + ax + ',' + ay);
    dot.setAttribute('cx', px); dot.setAttribute('cy', py);
  }

  var ticking = false;
  function redraw() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      if (state.current && document.contains(state.current)) draw(state.current);
    });
  }
  window.addEventListener('scroll', redraw, { passive: true });
  window.addEventListener('resize', redraw);
  stage.addEventListener('scroll', redraw, { passive: true });

  /* ---------- 從節點找到資料 ---------- */
  function resolve(node) {
    var el = node && node.closest ? node.closest('[data-el]') : null;
    if (!el || !demo.contains(el)) return null;
    var data = byId[el.getAttribute('data-el')];
    if (!data) return null;
    el.__data = data;
    return el;
  }

  function show(el) {
    state.current = el;
    draw(el);
  }

  /* ---------- 滑鼠 ---------- */
  stage.addEventListener('pointermove', function (e) {
    if (state.mode !== 'inspect' || state.pinnedEl) return;
    var el = resolve(e.target);
    if (!el) { hideInsp(); state.current = null; state.hoverEl = null; return; }
    if (el === state.hoverEl) { draw(el); return; }
    state.hoverEl = el;
    clearIntro();
    show(el);
  });
  stage.addEventListener('pointerleave', function () {
    if (state.mode !== 'inspect' || state.pinnedEl) return;
    state.hoverEl = null; state.current = null; hideInsp();
  });

  /* 探索模式下攔截示範網站的操作，改成釘選 */
  demo.addEventListener('mousedown', function (e) {
    if (state.mode === 'inspect') e.preventDefault();
  }, true);
  demo.addEventListener('click', function (e) {
    if (state.mode !== 'inspect') return;
    e.preventDefault(); e.stopPropagation();
    var el = resolve(e.target);
    if (el) pin(el);
  }, true);

  /* ---------- 釘選與說明面板 ---------- */
  function pin(el) {
    state.pinnedEl = el;
    clearIntro();
    show(el);
    fillDock(el);
    dock.classList.add('is-open');
  }
  function unpin() {
    state.pinnedEl = null;
    dock.classList.remove('is-open');
    resetReveals();
  }
  $('#dk-close').addEventListener('click', function () { unpin(); hideInsp(); state.current = null; });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.pinnedEl) { unpin(); hideInsp(); state.current = null; }
    else closeModal();
  });

  function path(el) {
    var chain = [], node = el;
    while (node && node !== demo) {
      if (node.hasAttribute && node.hasAttribute('data-el')) {
        var d = byId[node.getAttribute('data-el')];
        if (d) chain.unshift(d);
      }
      node = node.parentElement;
    }
    return chain;
  }

  function fillDock(el) {
    var d = el.__data;
    $('#dk-zh').textContent = d.zh;
    $('#dk-en').textContent = d.en;
    $('#dk-tag').textContent = d.tag;
    $('#dk-cat').textContent = catZh[d.cat] || '';
    $('#dk-desc').textContent = d.desc;
    $('#dk-aka').textContent = '也有人叫它：' + d.aka;

    var chain = path(el);
    $('#dk-path').innerHTML = chain.map(function (c, i) {
      var t = c.zh + ' ' + c.en;
      return i === chain.length - 1 ? '<b>' + t + '</b>' : t;
    }).join(' › ') || '—';

    fillKw($('#dk-zhkw'), d.zh_kw, '');
    fillKw($('#dk-enkw'), d.en_kw, 'kw--en');
    $('#dk-prompt').textContent = d.prompt;
  }

  function fillKw(host, words, cls) {
    host.innerHTML = '';
    words.forEach(function (w) {
      var b = document.createElement('button');
      b.className = 'kw ' + cls;
      b.type = 'button';
      b.textContent = w;
      b.title = '點一下複製';
      b.addEventListener('click', function () { copy(w); });
      host.appendChild(b);
    });
  }

  $('#dk-copy').addEventListener('click', function () { copy($('#dk-prompt').textContent); });

  function copy(text) {
    var done = function () {
      copied.classList.add('is-on');
      clearTimeout(copy._t);
      copy._t = setTimeout(function () { copied.classList.remove('is-on'); }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (err) {}
      document.body.removeChild(ta);
    }
  }

  /* ---------- 讓藏起來的元件現身 ---------- */
  function resetReveals() {
    closeModal();
    $('#demo-toast').classList.remove('is-open');
    $$('.d-tip').forEach(function (t) { t.classList.remove('is-forced'); });
  }
  function openModal() { $('#demo-modal').classList.add('is-open'); }
  function closeModal() { $('#demo-modal').classList.remove('is-open'); }

  function reveal(kind) {
    if (kind === 'modal') openModal();
    else if (kind === 'toast') $('#demo-toast').classList.add('is-open');
    else if (kind === 'tooltip') $$('.d-tip').forEach(function (t) { t.classList.add('is-forced'); });
  }

  /* ---------- 目錄 ---------- */
  var filterState = 'all';
  var searchState = '';

  var filters = $('#cat-filters');
  [{ id: 'all', zh: '全部' }].concat(CATEGORIES).forEach(function (c) {
    var b = document.createElement('button');
    b.className = 'filter'; b.type = 'button';
    b.textContent = c.zh;
    b.setAttribute('aria-pressed', String(c.id === 'all'));
    b.addEventListener('click', function () {
      filterState = c.id;
      $$('.filter', filters).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      renderCards();
    });
    filters.appendChild(b);
  });

  var cards = $('#cat-cards');
  function renderCards() {
    var q = searchState.trim().toLowerCase();
    cards.innerHTML = '';
    var list = ELEMENTS.filter(function (d) {
      if (filterState !== 'all' && d.cat !== filterState) return false;
      if (!q) return true;
      var hay = [d.zh, d.en, d.tag, d.aka, d.id, d.desc].concat(d.zh_kw, d.en_kw).join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    list.forEach(function (d) {
      var b = document.createElement('button');
      b.className = 'ecard'; b.type = 'button';
      b.innerHTML = '<b></b><span></span><small></small>';
      b.querySelector('b').textContent = d.zh;
      b.querySelector('span').textContent = d.en;
      b.querySelector('small').textContent = d.aka;
      b.addEventListener('click', function () { select(d.id); });
      cards.appendChild(b);
    });
    $('#cat-empty').hidden = list.length > 0;
  }
  $('#cat-search').addEventListener('input', function (e) { searchState = e.target.value; renderCards(); });
  renderCards();

  /* ---------- 由目錄選取一個元件 ---------- */
  function select(id) {
    if (state.mode !== 'inspect') setMode('inspect');
    resetReveals();
    if (REVEALS[id]) reveal(REVEALS[id]);

    var node = TARGETS[id] ? $(TARGETS[id]) : $('[data-el="' + id + '"]', demo);
    if (!node) return;
    node.__data = byId[id];

    var frame = $('.stage__frame');
    var frameTop = frame.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: frameTop, behavior: reduceMotion ? 'auto' : 'smooth' });

    var r = node.getBoundingClientRect(), s = stage.getBoundingClientRect();
    var target = stage.scrollTop + (r.top - s.top) - stage.clientHeight / 2 + r.height / 2;
    stage.scrollTo({ top: Math.max(target, 0), behavior: reduceMotion ? 'auto' : 'smooth' });

    setTimeout(function () { pin(node); }, reduceMotion ? 0 : 420);
  }

  /* ---------- 體驗模式下的示範網站行為 ---------- */
  $$('.d-tab').forEach(function (t) {
    t.addEventListener('click', function () {
      $$('.d-tab').forEach(function (x) { x.setAttribute('aria-selected', String(x === t)); });
    });
  });
  $('.d-alert__x').addEventListener('click', function () { $('.d-alert').style.display = 'none'; });
  var sw = $('.d-switch');
  function flip() {
    var on = !sw.classList.contains('is-on');
    sw.classList.toggle('is-on', on);
    sw.setAttribute('aria-checked', String(on));
  }
  sw.addEventListener('click', flip);
  sw.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
  });
  $('#f-size').addEventListener('input', function (e) { $('#f-size-val').textContent = e.target.value + ' 人'; });
  $('#demo-cancel').addEventListener('click', openModal);
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-ok').addEventListener('click', closeModal);
  $('.d-modal__overlay').addEventListener('click', closeModal);
  $('#demo-submit').addEventListener('click', function () {
    var t = $('#demo-toast');
    t.classList.add('is-open');
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.classList.remove('is-open'); }, 3200);
  });
  $$('.d-nav a, .d-crumb a, .d-foot a, .d-dd__menu a').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  /* ---------- 開場示範 ---------- */
  var introTimer = null, introDone = false;
  function clearIntro() {
    if (introDone) return;
    introDone = true;
    clearTimeout(introTimer);
    if (!state.pinnedEl && state.current && state.current.__intro) { hideInsp(); state.current = null; }
  }
  introTimer = setTimeout(function () {
    if (introDone || state.pinnedEl) return;
    var el = $('[data-el="button-primary"]', demo);
    if (!el) return;
    el.__data = byId['button-primary'];
    el.__intro = true;
    show(el);
    setTimeout(function () {
      if (!introDone && !state.pinnedEl && state.current === el) { hideInsp(); state.current = null; introDone = true; }
    }, 4200);
  }, 1100);
  ['pointerdown', 'wheel', 'keydown', 'touchstart'].forEach(function (evt) {
    window.addEventListener(evt, clearIntro, { once: true, passive: true });
  });

  /* ---------- 資料與畫面的對照檢查（開發用） ---------- */
  var missing = ELEMENTS.filter(function (d) {
    return !(TARGETS[d.id] ? $(TARGETS[d.id]) : $('[data-el="' + d.id + '"]', demo));
  }).map(function (d) { return d.id; });
  var orphan = $$('[data-el]', demo).map(function (n) { return n.getAttribute('data-el'); })
    .filter(function (id, i, arr) { return arr.indexOf(id) === i && !byId[id]; });
  if (missing.length) console.warn('[圖鑑] 資料有、頁面上找不到：', missing);
  if (orphan.length) console.warn('[圖鑑] 頁面上有、資料裡沒有：', orphan);
})();
