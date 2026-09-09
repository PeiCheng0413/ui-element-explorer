/* 元件資料庫：每一筆對應示範網站裡一個 data-el 標記的元件 */
window.CATEGORIES = [
  { id: 'layout',   zh: '版面結構', en: 'Layout' },
  { id: 'nav',      zh: '導覽',     en: 'Navigation' },
  { id: 'form',     zh: '輸入控制', en: 'Form controls' },
  { id: 'feedback', zh: '回饋提示', en: 'Feedback' },
  { id: 'content',  zh: '內容呈現', en: 'Content' }
];

window.ELEMENTS = [
  {
    id: 'header', zh: '頁首', en: 'Header', tag: '<header>', cat: 'layout',
    desc: '網頁最上面那一整條，通常放標誌、導覽列和主要按鈕，捲動時常常會固定在上方。',
    aka: '上面那條、標題列、頂端',
    zh_kw: ['頁首', '頂部橫條', '網站標頭'],
    en_kw: ['header', 'site header', 'top bar', 'masthead'],
    prompt: '把頁首（header）改成捲動時固定在畫面最上方，並加上淡淡的陰影。'
  },
  {
    id: 'nav', zh: '導覽列', en: 'Navigation bar', tag: '<nav>', cat: 'nav',
    desc: '一排讓人跳到網站各個頁面的連結，通常住在頁首裡面。',
    aka: '選單列、目錄、menu',
    zh_kw: ['導覽列', '主選單', '導覽選單'],
    en_kw: ['nav', 'navbar', 'navigation menu', 'main menu'],
    prompt: '把頁首裡的導覽列（navbar）連結間距拉大一點，滑鼠移過去時加底線。'
  },
  {
    id: 'logo', zh: '網站標誌', en: 'Logo / Wordmark', tag: '—', cat: 'layout',
    desc: '網站的名字或圖示，放在頁首最左邊，點下去通常會回到首頁。',
    aka: '商標、招牌、LOGO',
    zh_kw: ['網站標誌', '品牌標誌', '文字標誌'],
    en_kw: ['logo', 'wordmark', 'brand mark'],
    prompt: '把頁首左邊的網站標誌（logo）換成圖片，並且點擊後回到首頁。'
  },
  {
    id: 'nav-link', zh: '導覽連結', en: 'Nav link', tag: '<a>', cat: 'nav',
    desc: '導覽列裡的單一個項目，點下去會前往另一個頁面；目前所在的頁面通常會標成不同顏色。',
    aka: '選單項目、分頁、tab',
    zh_kw: ['導覽連結', '選單項目', '目前頁面樣式'],
    en_kw: ['nav link', 'menu item', 'active state'],
    prompt: '把導覽列裡目前所在頁面的那個連結（active nav link）改成粗體並加上底線。'
  },
  {
    id: 'dropdown', zh: '下拉選單', en: 'Dropdown menu', tag: '—', cat: 'nav',
    desc: '點一下才展開的一疊選項，用來把次要的連結收起來，不佔版面。',
    aka: '子選單、展開選單、二層選單',
    zh_kw: ['下拉選單', '子選單', '展開選項'],
    en_kw: ['dropdown', 'dropdown menu', 'submenu', 'popover menu'],
    prompt: '在導覽列的「服務」加一個下拉選單（dropdown），滑鼠移上去就展開三個子項目。'
  },
  {
    id: 'hamburger', zh: '漢堡選單鈕', en: 'Hamburger button', tag: '<button>', cat: 'nav',
    desc: '三條橫線的按鈕，手機版用它把整個導覽列收起來，點下去才展開。',
    aka: '三條線、選單按鈕',
    zh_kw: ['漢堡選單', '三條線按鈕', '手機版選單'],
    en_kw: ['hamburger menu', 'menu button', 'mobile nav toggle'],
    prompt: '手機版時把導覽列收成漢堡選單鈕（hamburger button），點擊後從右邊滑出。'
  },
  {
    id: 'icon-button', zh: '圖示按鈕', en: 'Icon button', tag: '<button>', cat: 'form',
    desc: '只有一個小圖示、沒有文字的按鈕，通常是搜尋、關閉、設定這類動作。',
    aka: '小圖案按鈕、圓形按鈕',
    zh_kw: ['圖示按鈕', '純圖示按鈕', '無文字按鈕'],
    en_kw: ['icon button', 'icon-only button'],
    prompt: '把頁首右邊的圖示按鈕（icon button）改成圓形，並加上滑鼠移過去時的背景色。'
  },
  {
    id: 'button-primary', zh: '主要按鈕', en: 'Primary button', tag: '<button>', cat: 'form',
    desc: '顏色最重、最顯眼的那顆按鈕，代表這一區最希望你做的動作，一個畫面通常只放一顆。',
    aka: '主按鈕、實心按鈕、CTA',
    zh_kw: ['主要按鈕', '實心按鈕', '行動呼籲按鈕'],
    en_kw: ['primary button', 'CTA button', 'solid button'],
    prompt: '把主視覺區裡的主要按鈕（primary button）文字改成「立即預約」，圓角改大，並加上滑鼠移過去會變深的效果。'
  },
  {
    id: 'button-secondary', zh: '次要按鈕', en: 'Secondary button', tag: '<button>', cat: 'form',
    desc: '只有外框或淡底色的按鈕，放在主要按鈕旁邊當作次要選擇。',
    aka: '空心按鈕、外框按鈕、白色按鈕',
    zh_kw: ['次要按鈕', '外框按鈕', '幽靈按鈕'],
    en_kw: ['secondary button', 'outline button', 'ghost button'],
    prompt: '把主要按鈕旁邊的次要按鈕（secondary button）改成只有外框、沒有底色。'
  },
  {
    id: 'hero', zh: '主視覺區', en: 'Hero section', tag: '<section>', cat: 'layout',
    desc: '進站第一眼看到的那一大塊，通常有大標題、一句說明和一顆主要按鈕。',
    aka: '首屏、大圖區、banner',
    zh_kw: ['主視覺區', '首屏', '橫幅區塊'],
    en_kw: ['hero', 'hero section', 'above the fold'],
    prompt: '把主視覺區（hero section）的高度加高，背景換成漸層，文字置中。'
  },
  {
    id: 'eyebrow', zh: '眉標', en: 'Eyebrow / Kicker', tag: '—', cat: 'content',
    desc: '大標題上方那行很小的字，通常是全大寫或加寬字距，用來先說明這一區是什麼。',
    aka: '小標、上標、標題上面那行小字',
    zh_kw: ['眉標', '標題上方小字', '區塊標籤'],
    en_kw: ['eyebrow', 'kicker', 'overline'],
    prompt: '在大標題上方加一行眉標（eyebrow），內容是「線上預約」，字級小、字距加寬。'
  },
  {
    id: 'heading', zh: '標題', en: 'Heading', tag: '<h1>–<h6>', cat: 'content',
    desc: '一段內容的名字，字級由大到小分成 h1 到 h6，一頁通常只有一個 h1。',
    aka: '大標、標題文字、粗體大字',
    zh_kw: ['標題', '主標題', '區塊標題'],
    en_kw: ['heading', 'h1', 'section title'],
    prompt: '把主視覺區的主標題（h1 heading）字級改大一點，行高收緊。'
  },
  {
    id: 'paragraph', zh: '段落', en: 'Paragraph', tag: '<p>', cat: 'content',
    desc: '一般的內文文字，一整段為一個單位。',
    aka: '內文、說明文字、一段字',
    zh_kw: ['段落', '內文', '說明文字'],
    en_kw: ['paragraph', 'body text', 'copy'],
    prompt: '把說明段落（paragraph）的行高調成 1.8，最大寬度限制在 60 個字。'
  },
  {
    id: 'badge', zh: '狀態標記', en: 'Badge', tag: '—', cat: 'feedback',
    desc: '很小的一塊圓角色塊，用來標示狀態或數量，例如「新」「已完成」「3」。',
    aka: '小標籤、紅點、數字圈',
    zh_kw: ['狀態標記', '角標', '未讀數字'],
    en_kw: ['badge', 'pill', 'status badge', 'notification dot'],
    prompt: '在導覽列的「通知」右上角加一個紅色狀態標記（badge），顯示未讀數量。'
  },
  {
    id: 'breadcrumb', zh: '麵包屑', en: 'Breadcrumb', tag: '<nav>', cat: 'nav',
    desc: '用箭頭串起來的一行小連結，告訴你現在在網站的哪一層，例如「首頁 › 課程 › 攝影」。',
    aka: '路徑、階層列、上面那排小字連結',
    zh_kw: ['麵包屑', '階層路徑', '導覽路徑'],
    en_kw: ['breadcrumb', 'breadcrumb trail'],
    prompt: '在內容區最上方加一列麵包屑（breadcrumb），最後一層不要做成連結。'
  },
  {
    id: 'tabs', zh: '分頁標籤', en: 'Tabs', tag: '—', cat: 'nav',
    desc: '一排並列的標籤，點哪一個就在同一個位置換一組內容，頁面不會跳走。',
    aka: '切換頁籤、標籤頁、tab',
    zh_kw: ['分頁標籤', '頁籤', '切換標籤'],
    en_kw: ['tabs', 'tab bar', 'tab panel'],
    prompt: '把這三塊內容改成分頁標籤（tabs），預設顯示第一個，選中的標籤底部加一條粗線。'
  },
  {
    id: 'card', zh: '卡片', en: 'Card', tag: '—', cat: 'layout',
    desc: '把圖片、標題、說明包在一起的一個方塊，通常有底色、圓角或陰影，可以整塊點擊。',
    aka: '方塊、格子、區塊',
    zh_kw: ['卡片', '內容方塊', '卡片式版面'],
    en_kw: ['card', 'content card', 'tile'],
    prompt: '把課程卡片（card）的圓角改成 16px，滑鼠移上去時稍微浮起來一點。'
  },
  {
    id: 'grid', zh: '網格', en: 'Grid', tag: '—', cat: 'layout',
    desc: '把多個卡片排成整齊的幾欄幾列，電腦上三欄、手機上一欄就是靠它。',
    aka: '排版、幾欄、格線',
    zh_kw: ['網格', '欄數', '卡片排列'],
    en_kw: ['grid', 'grid layout', 'columns'],
    prompt: '把卡片網格（grid）改成電腦三欄、平板兩欄、手機一欄，間距 24px。'
  },
  {
    id: 'thumbnail', zh: '縮圖', en: 'Thumbnail', tag: '<img>', cat: 'content',
    desc: '卡片或清單裡的小張預覽圖片。',
    aka: '小圖、預覽圖、圖片',
    zh_kw: ['縮圖', '預覽圖', '卡片圖片'],
    en_kw: ['thumbnail', 'preview image', 'cover image'],
    prompt: '把卡片的縮圖（thumbnail）比例固定成 16:9，圖片裁切置中不變形。'
  },
  {
    id: 'tag', zh: '標籤片', en: 'Tag / Chip', tag: '—', cat: 'content',
    desc: '小小的圓角文字塊，用來標分類或關鍵字，可以有很多個並排。',
    aka: '小標籤、關鍵字、hashtag',
    zh_kw: ['標籤片', '分類標籤', '關鍵字標籤'],
    en_kw: ['tag', 'chip', 'label pill'],
    prompt: '在卡片標題下面加兩個標籤片（tag），底色淡、文字小。'
  },
  {
    id: 'stat', zh: '數據區塊', en: 'Stat / KPI', tag: '—', cat: 'content',
    desc: '一個大大的數字配一行小說明，用來強調成績或數量。',
    aka: '數字區、成績、統計',
    zh_kw: ['數據區塊', '數字亮點', '統計數字'],
    en_kw: ['stat', 'stat block', 'KPI', 'metric'],
    prompt: '在主視覺區下面加一排三個數據區塊（stat blocks），數字用大字、說明用灰字。'
  },
  {
    id: 'avatar', zh: '頭像', en: 'Avatar', tag: '—', cat: 'content',
    desc: '代表某個人的小圓形圖片，沒有照片時會顯示姓名縮寫。',
    aka: '大頭貼、人像、圓形照片',
    zh_kw: ['頭像', '大頭貼', '使用者圖示'],
    en_kw: ['avatar', 'profile picture', 'user avatar'],
    prompt: '把評論裡的頭像（avatar）改成 48px 的圓形，並加一圈淺色外框。'
  },
  {
    id: 'list', zh: '清單', en: 'List', tag: '<ul><li>', cat: 'content',
    desc: '一項一項條列的內容，前面通常有小圓點、打勾或數字。',
    aka: '條列、項目符號、列表',
    zh_kw: ['清單', '條列項目', '項目符號'],
    en_kw: ['list', 'bulleted list', 'list item'],
    prompt: '把方案內容改成清單（list），項目符號換成綠色打勾圖示。'
  },
  {
    id: 'table', zh: '表格', en: 'Table', tag: '<table>', cat: 'content',
    desc: '有欄有列的資料格子，最上面那列是欄位名稱。',
    aka: '表、格子、Excel 那種',
    zh_kw: ['表格', '資料表', '表頭'],
    en_kw: ['table', 'data table', 'table header'],
    prompt: '把預約紀錄表格（table）加上斑馬紋，表頭固定，手機上可以左右捲動。'
  },
  {
    id: 'pagination', zh: '分頁導覽', en: 'Pagination', tag: '—', cat: 'nav',
    desc: '清單下方那排「1 2 3 下一頁」，用來一頁一頁看更多資料。',
    aka: '換頁、頁碼、下一頁',
    zh_kw: ['分頁導覽', '頁碼', '換頁按鈕'],
    en_kw: ['pagination', 'pager', 'page numbers'],
    prompt: '把表格下方的分頁導覽（pagination）改成每頁 20 筆，目前頁碼用實心底色標示。'
  },
  {
    id: 'accordion', zh: '折疊面板', en: 'Accordion', tag: '<details>', cat: 'content',
    desc: '點一下標題才把答案展開的區塊，常見問題最常用它。',
    aka: '收合區塊、展開收起、FAQ',
    zh_kw: ['折疊面板', '收合區塊', '展開收起'],
    en_kw: ['accordion', 'collapsible', 'disclosure', 'expander'],
    prompt: '把常見問題改成折疊面板（accordion），一次只能展開一題，右邊的箭頭展開時要旋轉。'
  },
  {
    id: 'sidebar', zh: '側邊欄', en: 'Sidebar', tag: '<aside>', cat: 'layout',
    desc: '主要內容旁邊的窄長一欄，放篩選、次要資訊或次要導覽。',
    aka: '旁邊那欄、側欄、右邊區塊',
    zh_kw: ['側邊欄', '側欄', '右側區塊'],
    en_kw: ['sidebar', 'aside', 'side panel'],
    prompt: '把側邊欄（sidebar）寬度改成 280px，捲動時固定在畫面上，手機上移到內容下方。'
  },
  {
    id: 'form', zh: '表單', en: 'Form', tag: '<form>', cat: 'form',
    desc: '把所有欄位和送出按鈕包在一起的整塊，按下送出時會一起檢查和送出。',
    aka: '填寫區、報名表、輸入區',
    zh_kw: ['表單', '報名表單', '送出資料'],
    en_kw: ['form', 'form submission'],
    prompt: '把預約表單（form）改成兩欄排版，送出前檢查必填欄位。'
  },
  {
    id: 'label', zh: '欄位標籤', en: 'Label', tag: '<label>', cat: 'form',
    desc: '輸入框上方或旁邊那行說明「這格要填什麼」的文字，點它會自動跳到該欄位。',
    aka: '欄位名稱、輸入框上面那行字',
    zh_kw: ['欄位標籤', '欄位名稱', '必填星號'],
    en_kw: ['label', 'field label', 'required marker'],
    prompt: '把每個欄位標籤（label）改成粗體，必填的在後面加一個紅色星號。'
  },
  {
    id: 'text-input', zh: '單行輸入框', en: 'Text input', tag: '<input type="text">', cat: 'form',
    desc: '只能打一行字的長方形輸入格，用來填姓名、電話這種短資料。',
    aka: '打字的地方、輸入格、文字框、textbox',
    zh_kw: ['單行輸入框', '文字輸入框', '輸入欄位'],
    en_kw: ['text input', 'textbox', 'input field'],
    prompt: '把姓名的單行輸入框（text input）高度改成 48px，聚焦時外框變成主色。'
  },
  {
    id: 'placeholder', zh: '提示文字', en: 'Placeholder', tag: '—', cat: 'form',
    desc: '輸入框裡那行灰色的範例文字，開始打字就會消失，它不是真的內容。',
    aka: '灰色的字、範例文字、預設文字',
    zh_kw: ['提示文字', '輸入框灰字', '範例文字'],
    en_kw: ['placeholder', 'placeholder text'],
    prompt: '把電話欄位的提示文字（placeholder）改成「09xx-xxx-xxx」，顏色調淡一點。'
  },
  {
    id: 'textarea', zh: '多行輸入框', en: 'Textarea', tag: '<textarea>', cat: 'form',
    desc: '可以打好幾行字的大格子，用來填留言、備註這種長內容。',
    aka: '大格子、留言框、多行文字框',
    zh_kw: ['多行輸入框', '留言框', '備註欄'],
    en_kw: ['textarea', 'multiline input'],
    prompt: '把備註的多行輸入框（textarea）預設高度改成 5 行，右下角可以拖拉放大。'
  },
  {
    id: 'select', zh: '下拉式選單', en: 'Select', tag: '<select>', cat: 'form',
    desc: '點開才顯示選項清單的欄位，只能從既有選項裡挑一個。',
    aka: '選單、下拉、選擇欄位',
    zh_kw: ['下拉式選單', '選擇欄位', '選項清單'],
    en_kw: ['select', 'dropdown select', 'combobox'],
    prompt: '把服務項目改成下拉式選單（select），第一個選項是「請選擇」且不能真的送出。'
  },
  {
    id: 'checkbox', zh: '核取方塊', en: 'Checkbox', tag: '<input type="checkbox">', cat: 'form',
    desc: '可以打勾的小方格，同一組裡想勾幾個都可以。',
    aka: '打勾框、方框、勾選',
    zh_kw: ['核取方塊', '打勾方塊', '多選'],
    en_kw: ['checkbox', 'check box', 'multi-select'],
    prompt: '把加購項目改成一組核取方塊（checkboxes），勾選後底色變淡藍。'
  },
  {
    id: 'radio', zh: '單選鈕', en: 'Radio button', tag: '<input type="radio">', cat: 'form',
    desc: '一組小圓圈，同一組裡只能選一個，選了另一個前一個就會取消。',
    aka: '圓圈、單選、只能選一個那個',
    zh_kw: ['單選鈕', '圓形選項', '只能選一個'],
    en_kw: ['radio button', 'radio group'],
    prompt: '把付款方式改成單選鈕（radio group），預設選第一個。'
  },
  {
    id: 'toggle', zh: '開關', en: 'Toggle / Switch', tag: '—', cat: 'form',
    desc: '像電燈開關一樣左右滑的小控制，用來切換開或關，通常按下去立刻生效。',
    aka: '滑動開關、切換鈕、on off',
    zh_kw: ['開關', '切換開關', '開啟關閉'],
    en_kw: ['toggle', 'switch', 'toggle switch'],
    prompt: '把「接收通知」改成開關（toggle switch），打開時是綠色，關閉是灰色。'
  },
  {
    id: 'slider', zh: '滑桿', en: 'Slider', tag: '<input type="range">', cat: 'form',
    desc: '左右拖動來調整數值的橫桿，適合預算、音量這種連續的數字。',
    aka: '拉桿、拖拉條、調整條',
    zh_kw: ['滑桿', '拖拉條', '數值調整'],
    en_kw: ['slider', 'range slider'],
    prompt: '把預算改成滑桿（range slider），範圍 500 到 5000，拖動時即時顯示目前數字。'
  },
  {
    id: 'helper-text', zh: '說明文字', en: 'Helper text', tag: '—', cat: 'form',
    desc: '輸入框下面那行小灰字，先告訴你這格該怎麼填。',
    aka: '小字說明、備註、提示',
    zh_kw: ['說明文字', '欄位提示', '輸入說明'],
    en_kw: ['helper text', 'hint text', 'field description'],
    prompt: '在電話欄位下方加一行說明文字（helper text）：「我們只會用來確認預約」。'
  },
  {
    id: 'error-text', zh: '錯誤訊息', en: 'Error message', tag: '—', cat: 'feedback',
    desc: '填錯時出現在欄位下方的紅字，同時輸入框外框通常也會變紅。',
    aka: '紅字、警告、驗證訊息',
    zh_kw: ['錯誤訊息', '欄位驗證', '紅字提示'],
    en_kw: ['error message', 'validation message', 'inline error'],
    prompt: 'Email 格式不對時，在欄位下方顯示錯誤訊息（inline error），外框同時變紅色。'
  },
  {
    id: 'search', zh: '搜尋框', en: 'Search box', tag: '<input type="search">', cat: 'form',
    desc: '左邊帶放大鏡圖示的輸入框，打字後按 Enter 或按鈕開始搜尋。',
    aka: '搜尋列、放大鏡那格',
    zh_kw: ['搜尋框', '搜尋列', '關鍵字搜尋'],
    en_kw: ['search box', 'search bar', 'search input'],
    prompt: '把搜尋框（search bar）加寬，放大鏡圖示放在左邊，輸入時即時篩選下面的清單。'
  },
  {
    id: 'progress', zh: '進度條', en: 'Progress bar', tag: '<progress>', cat: 'feedback',
    desc: '一條會慢慢填滿的橫桿，用來表示完成到哪裡了。',
    aka: '讀取條、百分比、跑條',
    zh_kw: ['進度條', '完成度', '百分比條'],
    en_kw: ['progress bar', 'progress indicator'],
    prompt: '在表單上方加一條進度條（progress bar），顯示填寫完成的百分比。'
  },
  {
    id: 'alert', zh: '通知橫幅', en: 'Alert banner', tag: '—', cat: 'feedback',
    desc: '橫跨整區的一條提示訊息，用顏色分成提醒、成功、警告或錯誤。',
    aka: '橫幅、公告條、提示條',
    zh_kw: ['通知橫幅', '提示訊息條', '公告列'],
    en_kw: ['alert', 'alert banner', 'inline notification'],
    prompt: '在頁面最上方加一條通知橫幅（alert banner），黃底黑字，右邊有關閉按鈕。'
  },
  {
    id: 'tooltip', zh: '提示氣泡', en: 'Tooltip', tag: '—', cat: 'feedback',
    desc: '滑鼠停在某個東西上才浮出來的小黑框說明，移開就消失。',
    aka: '浮出說明、小黑框、hover 顯示的字',
    zh_kw: ['提示氣泡', '滑鼠提示', '浮動說明'],
    en_kw: ['tooltip', 'hover hint'],
    prompt: '在問號圖示加一個提示氣泡（tooltip），滑鼠移上去顯示「可免費改期一次」。'
  },
  {
    id: 'modal', zh: '彈出視窗', en: 'Modal dialog', tag: '<dialog>', cat: 'feedback',
    desc: '蓋在頁面正中央的視窗，出現時後面的內容不能操作，要先關掉或確認。',
    aka: '跳出來的視窗、對話框、pop up',
    zh_kw: ['彈出視窗', '對話框', '確認視窗'],
    en_kw: ['modal', 'dialog', 'popup'],
    prompt: '按下刪除時跳出彈出視窗（modal），有「取消」和「確定刪除」兩顆按鈕，按 Esc 可關閉。'
  },
  {
    id: 'overlay', zh: '遮罩', en: 'Overlay / Backdrop', tag: '—', cat: 'feedback',
    desc: '彈出視窗後面那層半透明的黑，用來壓暗背景並擋住點擊。',
    aka: '背景變暗、黑色半透明、蒙層',
    zh_kw: ['遮罩', '背景變暗層', '半透明黑'],
    en_kw: ['overlay', 'backdrop', 'scrim'],
    prompt: '把彈出視窗的遮罩（backdrop）改成 50% 黑並加上模糊，點遮罩可以關閉視窗。'
  },
  {
    id: 'toast', zh: '浮動通知', en: 'Toast', tag: '—', cat: 'feedback',
    desc: '動作完成後從角落冒出來的小訊息，幾秒後自己消失，不需要你關。',
    aka: '小提示、彈出訊息、跳出來的小框',
    zh_kw: ['浮動通知', '暫時提示', '操作成功訊息'],
    en_kw: ['toast', 'snackbar', 'transient notification'],
    prompt: '送出成功後在右下角顯示浮動通知（toast）：「已收到預約」，三秒後自動消失。'
  },
  {
    id: 'spinner', zh: '載入圖示', en: 'Spinner / Loader', tag: '—', cat: 'feedback',
    desc: '一直轉的小圈圈，表示正在處理，請稍等。',
    aka: '轉圈圈、讀取中、菊花',
    zh_kw: ['載入圖示', '轉圈動畫', '讀取中'],
    en_kw: ['spinner', 'loader', 'loading indicator'],
    prompt: '送出時把按鈕文字換成載入圖示（spinner）並停用按鈕，避免重複送出。'
  },
  {
    id: 'divider', zh: '分隔線', en: 'Divider', tag: '<hr>', cat: 'layout',
    desc: '一條細線，用來把上下兩段內容分開。',
    aka: '線、橫線、隔線',
    zh_kw: ['分隔線', '水平線', '區隔線'],
    en_kw: ['divider', 'separator', 'horizontal rule'],
    prompt: '在兩個區塊之間加一條分隔線（divider），顏色淡、上下留白 48px。'
  },
  {
    id: 'link', zh: '文字連結', en: 'Text link', tag: '<a>', cat: 'content',
    desc: '內文裡可以點的字，通常有顏色或底線，點下去會前往別的頁面。',
    aka: '藍色的字、可以點的字、超連結',
    zh_kw: ['文字連結', '超連結', '內文連結'],
    en_kw: ['link', 'text link', 'hyperlink', 'anchor'],
    prompt: '把內文裡的文字連結（text link）改成只有滑鼠移上去才出現底線。'
  },
  {
    id: 'icon', zh: '圖示', en: 'Icon', tag: '<svg>', cat: 'content',
    desc: '用來代表意思的小圖形，例如放大鏡代表搜尋、垃圾桶代表刪除。',
    aka: '小圖、圖案、icon',
    zh_kw: ['圖示', '小圖示', '線條圖示'],
    en_kw: ['icon', 'svg icon', 'line icon'],
    prompt: '把清單前面的圖示（icon）統一改成線條風格，大小 20px，顏色跟文字一致。'
  },
  {
    id: 'footer', zh: '頁尾', en: 'Footer', tag: '<footer>', cat: 'layout',
    desc: '網頁最下面那一整塊，通常放聯絡方式、次要連結和版權宣告。',
    aka: '最下面那塊、底部、版權那裡',
    zh_kw: ['頁尾', '底部區塊', '版權列'],
    en_kw: ['footer', 'site footer', 'copyright bar'],
    prompt: '把頁尾（footer）改成深色底、分成三欄，最下方放版權文字。'
  },
  {
    id: 'container', zh: '內容容器', en: 'Container', tag: '—', cat: 'layout',
    desc: '看不見的一層框，負責限制內容最大寬度並置中，決定左右留白多少。',
    aka: '內容寬度、左右留白、置中框',
    zh_kw: ['內容容器', '最大寬度', '左右留白'],
    en_kw: ['container', 'wrapper', 'max-width', 'content width'],
    prompt: '把內容容器（container）最大寬度改成 1120px 並置中，手機上左右各留 20px。'
  }
];
