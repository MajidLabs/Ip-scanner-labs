/* ==========================================================================
   IP Scanner Labs — Application logic
   ========================================================================== */

// ── i18n dictionary ──
const I18N = {
  fa: {
    dir: 'rtl',
    pageTitle: 'IP Scanner Labs',
    headerTagline: '// بدون نیاز به دسترسی روت — TCP و ICMP',
    usageNotice: 'این ابزار را فقط روی شبکه‌ها و سیستم‌هایی استفاده کنید که مالک آن‌ها هستید یا اجازه‌ی صریح برای آزمایش دارید. اسکن بدون اجازه ممکن است در حوزه‌ی قضایی شما غیرقانونی باشد.',
    settingsTitle: '// تنظیمات اسکن',
    targetLabel: 'آدرس‌های هدف (با کاما یا فاصله جدا کنید برای چند هدف)',
    targetPlaceholder: '109.85.76.1, 46.86.78.0/24, 192.168.1.1-254',
    rangeInfoEmpty: '—',
    rangeInfoSingle: 'یک آدرس IP منفرد',
    rangeInfoMultiple: n => `${n} هاست یکتا پیدا شد`,
    timeoutLabel: 'تایم‌اوت (میلی‌ثانیه)',
    methodLabel: 'روش اسکن',
    methodTCP: 'اتصال TCP',
    methodICMP: 'پینگ ICMP',
    methodBoth: 'هر دو روش',
    methodNoteTCP: 'اتصال TCP: تلاش برای وصل‌شدن به پورت‌های مشخص‌شده — نیازی به دسترسی روت ندارد و دقیق‌ترین روش برای شبکه‌های خارجیه.',
    methodNoteICMP: 'پینگ ICMP: توی مرورگر به‌صورت تقریبی شبیه‌سازی می‌شه. برای نتیجه‌ی دقیق از کد Python تولیدشده استفاده کن.',
    methodNoteBoth: 'ترکیب هر دو روش: اول ICMP، بعد TCP — بیشترین پوشش رو می‌ده.',
    portsLabel: 'پورت‌ها (چند مورد رو انتخاب کن یا دستی وارد کن)',
    portsPlaceholder: '80,443,22,8080,8443',
    concurrencyLabel: 'تعداد Thread موازی (Concurrency)',
    modeLabel: 'حالت اجرا',
    modeBrowser: 'مرورگر (شبیه‌سازی)',
    modePython: 'نمایش کد Python برای اجرای دقیق',
    btnStart: '▶ شروع اسکن',
    btnScanning: '⏳ در حال اسکن…',
    btnRescan: '▶ اسکن مجدد',
    btnStop: '■ توقف',
    btnStopping: '⏳ در حال توقف…',
    progressTitle: '// وضعیت اسکن',
    progressOf: (done, total) => `هاست ${done} از ${total}`,
    progressChecking: (done, total, ip) => `هاست ${done} از ${total} — در حال بررسی: ${ip}`,
    progressDone: total => `تموم شد — هاست ${total} از ${total}`,
    progressStopped: (done, total) => `متوقف شد — ${done} از ${total} هاست بررسی شد`,
    statTotal: 'کل هدف‌ها',
    statAlive: 'فعال',
    statDead: 'بدون پاسخ',
    statTime: 'زمان سپری‌شده',
    logTitle: '// گزارش زنده',
    btnClear: 'پاک کردن',
    logWaiting: 'در انتظار شروع اسکن…',
    logStart: (n, method) => `شروع اسکن — ${n} آدرس یکتا — روش: ${method}`,
    logPorts: ports => `پورت‌های هدف: ${ports}`,
    logAlive: (ip, latency, method) => `[+] ${ip} — فعال — ${latency}ms (${method})`,
    logDone: (alive, total, elapsed) => `اسکن تموم شد — ${alive} هاست فعال از ${total} — ${elapsed} ثانیه`,
    logStopped: (alive, checked, elapsed) => `اسکن توسط کاربر متوقف شد — ${alive} هاست فعال از ${checked} بررسی‌شده — ${elapsed} ثانیه`,
    resultsTitle: '// نتایج اسکن',
    exportLabel: 'خروجی',
    exportTXT: '⬇ TXT',
    exportCSV: '⬇ CSV',
    exportJSON: '⬇ JSON',
    exportClipboard: '📋 کپی به کلیپ‌بورد',
    exportClipboardOK: '✓ کپی شد',
    exportClipboardFail: '✗ خطا — مرورگر اجازه نداد',
    exportClipboardEmpty: 'چیزی برای کپی وجود نداره',
    filterLabel: 'فیلتر',
    filterAlive: 'فقط فعال‌ها',
    filterDead: 'فقط بدون پاسخ',
    filterAll: 'همه',
    sortLabel: 'مرتب‌سازی و نمایش',
    sortFastest: '⚡ سریع‌ترین اول',
    autoScroll: '⬇ اسکرول خودکار',
    showDetail: 'نمایش پورت و جزئیات',
    sepComma: 'جداکننده: کاما',
    sepNewline: 'جداکننده: خط جدید',
    copyHint: 'برای کپی هر آی‌پی، روش توی جدول کلیک کن',
    thNum: '#',
    thIP: 'آدرس IP',
    thPort: 'پورت',
    thMethod: 'روش',
    thLatency: 'پینگ',
    thStatus: 'وضعیت',
    statusAlive: '● فعال',
    statusDead: '● بدون پاسخ',
    noResults: 'با این فیلتر نتیجه‌ای نیست',
    pythonTitle: '// کد Python برای اجرای واقعی توی ترمینال',
    btnCopyCode: 'کپی کد',
    btnDownloadPy: 'دانلود .py',
    copyOK: 'کد کپی شد.',
    copyFail: 'کپی انجام نشد؛ مرورگر اجازه نداد. کد رو دستی انتخاب و کپی کن.',
    copyIPOK: 'کپی شد ✓',
    copyIPFail: 'خطا در کپی',
    alertNoTarget: 'لطفاً آدرس هدف رو وارد کن.',
    alertNoPort: 'لطفاً حداقل یک پورت انتخاب کن.',
    alertRangeTooLarge: 'محدوده‌ی واردشده خیلی بزرگه. حداکثر /22 (۱۰۲۴ هاست) پشتیبانی می‌شه.',
    footerRights: 'تمام حقوق محفوظ است',
    welcomeTitle: '// راهنمای سریع',
    welcomeStep1: 'آدرس‌های IP، رنج (مثلاً ۱۹۲.۱۶۸.۱.۱-۲۵۴)، یا CIDR (مثلاً ۱۹۲.۱۶۸.۱.۰/۲۴) رو وارد کن. می‌تونی چند هدف رو با کاما یا فاصله جدا کنی.',
    welcomeStep2: 'پورت‌های مورد نظر رو انتخاب کن یا دستی وارد کن. پیش‌فرض: ۸۰، ۴۴۳، ۲۲، ۸۰۸۰، ۸۴۴۳.',
    welcomeStep3: 'اگه می‌خوای IP های Cloudflare رو تست کنی، از دکمه‌ی "نمونه‌گیری" استفاده کن تا یه نمونه‌ی تصادفی از بلوک‌های رسمی Cloudflare لود بشه.',
    welcomeStep4: 'دکمه‌ی شروع اسکن رو بزن — یا توی فیلد Enter رو فشار بده. نتایج اینجا، زنده پر می‌شن.',
    presetCloudflareTitle: 'نمونه‌گیری از Cloudflare',
    presetCloudflareDesc: 'یه نمونه‌ی تصادفی از آی‌پی‌های رسمی Cloudflare لود می‌کنه — برای پیدا کردن سریع‌ترین نود از موقعیت تو.',
    presetCloudflareBtn: 'بارگذاری',
    presetPerBlock10: '۱۰ تا از هر بلوک',
    presetPerBlock20: '۲۰ تا از هر بلوک',
    presetPerBlock40: '۴۰ تا از هر بلوک',
    presetLoaded: (n, blocks) => `${n} آدرس از ${blocks} بلوک رسمی Cloudflare نمونه‌برداری شد (تصادفی).`,
  },
  en: {
    dir: 'ltr',
    pageTitle: 'IP Scanner Labs',
    headerTagline: '// No root access required — TCP & ICMP',
    usageNotice: 'Use this tool only on networks and systems you own or have explicit permission to test. Scanning without authorization may be illegal in your jurisdiction.',
    settingsTitle: '// Scan Settings',
    targetLabel: 'Target address(es) — separate multiple targets with a comma or space',
    targetPlaceholder: '109.85.76.1, 46.86.78.0/24, 192.168.1.1-254',
    rangeInfoEmpty: '—',
    rangeInfoSingle: 'Single IP address',
    rangeInfoMultiple: n => `${n} unique hosts found`,
    timeoutLabel: 'Timeout (milliseconds)',
    methodLabel: 'Scan method',
    methodTCP: 'TCP Connect',
    methodICMP: 'ICMP Ping',
    methodBoth: 'Both methods',
    methodNoteTCP: 'TCP Connect: attempts to reach the specified ports — no root required, and the most accurate method for external networks.',
    methodNoteICMP: 'ICMP Ping: approximated in the browser. For accurate results, use the generated Python script.',
    methodNoteBoth: 'Combines both methods: ICMP first, then TCP — provides the broadest coverage.',
    portsLabel: 'Ports — select presets or enter manually',
    portsPlaceholder: '80,443,22,8080,8443',
    concurrencyLabel: 'Concurrent threads',
    modeLabel: 'Execution mode',
    modeBrowser: 'Browser (simulated)',
    modePython: 'Show Python code for an accurate scan',
    btnStart: '▶ Start Scan',
    btnScanning: '⏳ Scanning…',
    btnRescan: '▶ Scan Again',
    btnStop: '■ Stop',
    btnStopping: '⏳ Stopping…',
    progressTitle: '// Scan Status',
    progressOf: (done, total) => `Host ${done} of ${total}`,
    progressChecking: (done, total, ip) => `Host ${done} of ${total} — checking: ${ip}`,
    progressDone: total => `Complete — host ${total} of ${total}`,
    progressStopped: (done, total) => `Stopped — ${done} of ${total} hosts checked`,
    statTotal: 'Total targets',
    statAlive: 'Alive',
    statDead: 'No response',
    statTime: 'Elapsed time',
    logTitle: '// Live Log',
    btnClear: 'Clear',
    logWaiting: 'Waiting for scan to start…',
    logStart: (n, method) => `Scan started — ${n} unique address(es) — method: ${method}`,
    logPorts: ports => `Target ports: ${ports}`,
    logAlive: (ip, latency, method) => `[+] ${ip} — alive — ${latency}ms (${method})`,
    logDone: (alive, total, elapsed) => `Scan complete — ${alive} of ${total} hosts alive — ${elapsed}s`,
    logStopped: (alive, checked, elapsed) => `Scan stopped by user — ${alive} alive out of ${checked} checked — ${elapsed}s`,
    resultsTitle: '// Scan Results',
    exportLabel: 'Export',
    exportTXT: '⬇ TXT',
    exportCSV: '⬇ CSV',
    exportJSON: '⬇ JSON',
    exportClipboard: '📋 Copy to clipboard',
    exportClipboardOK: '✓ Copied',
    exportClipboardFail: '✗ Failed — browser denied permission',
    exportClipboardEmpty: 'Nothing to copy',
    filterLabel: 'Filter',
    filterAlive: 'Alive only',
    filterDead: 'No response only',
    filterAll: 'All',
    sortLabel: 'Sort & display',
    sortFastest: '⚡ Fastest first',
    autoScroll: '⬇ Auto-scroll',
    showDetail: 'Show port & detail',
    sepComma: 'Separator: comma',
    sepNewline: 'Separator: newline',
    copyHint: 'Click any IP address in the table to copy it',
    thNum: '#',
    thIP: 'IP Address',
    thPort: 'Port',
    thMethod: 'Method',
    thLatency: 'Latency',
    thStatus: 'Status',
    statusAlive: '● Alive',
    statusDead: '● No response',
    noResults: 'No results match this filter',
    pythonTitle: '// Python code for an accurate, real scan',
    btnCopyCode: 'Copy code',
    btnDownloadPy: 'Download .py',
    copyOK: 'Code copied.',
    copyFail: 'Copy failed; the browser denied permission. Please select and copy the code manually.',
    copyIPOK: 'Copied ✓',
    copyIPFail: 'Copy failed',
    alertNoTarget: 'Please enter a target address.',
    alertNoPort: 'Please select at least one port.',
    alertRangeTooLarge: 'The specified range is too large. A maximum of /22 (1024 hosts) is supported.',
    footerRights: 'All rights reserved.',
    welcomeTitle: '// Quick guide',
    welcomeStep1: 'Enter an IP address, a range (e.g. 192.168.1.1-254), or CIDR notation (e.g. 192.168.1.0/24). Separate multiple targets with a comma or space.',
    welcomeStep2: 'Select the ports to probe, or type them manually. Default: 80, 443, 22, 8080, 8443.',
    welcomeStep3: 'To test Cloudflare IPs, use the "Load" preset to sample a random set from the official Cloudflare blocks.',
    welcomeStep4: 'Press Start Scan — or hit Enter from any input field. Results appear here as they come in.',
    presetCloudflareTitle: 'Sample from Cloudflare',
    presetCloudflareDesc: 'Loads a random sample of official Cloudflare IPs — useful for finding the fastest edge node from your location.',
    presetCloudflareBtn: 'Load',
    presetPerBlock10: '10 per block',
    presetPerBlock20: '20 per block',
    presetPerBlock40: '40 per block',
    presetLoaded: (n, blocks) => `Sampled ${n} address(es) from ${blocks} official Cloudflare blocks (randomized).`,
  }
};

let currentLang = 'fa';

function t(key, ...args) {
  const entry = I18N[currentLang][key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

// applies the current language to every [data-i18n] / [data-i18n-placeholder] element
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = I18N[currentLang].dir;
  document.title = t('pageTitle');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  document.getElementById('lang-fa').classList.toggle('active', currentLang === 'fa');
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');

  // re-render dynamic text that depends on current state
  updateMethodNote();
  updateRangeInfo();
  renderResults();
  if (!scanning) {
    document.getElementById('scan-btn').textContent =
      scanResults.length ? t('btnRescan') : t('btnStart');
  }
}

function setLanguage(lang) {
  currentLang = lang;
  applyLanguage();
  closeLangMenu();
}

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  const trigger = document.getElementById('lang-trigger');
  const isOpen = menu.classList.toggle('open');
  trigger.classList.toggle('open', isOpen);
}

function closeLangMenu() {
  document.getElementById('lang-menu').classList.remove('open');
  document.getElementById('lang-trigger').classList.remove('open');
}

// ── state ──
let scanResults = [];      // every probe result (alive + dead), raw
let scanning = false;
let stopRequested = false;
let startTime;
let timerInterval;
let currentMethod = 'tcp';
let selectedPorts = new Set(['80','443','22','8080','8443']);

let currentFilter = 'alive';   // 'alive' | 'dead' | 'all'
let sortFastest = true;
let autoScroll = true;
let showDetail = false;
let useCommas = false;

// ── method ──
function setMethod(m) {
  currentMethod = m;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-method="${m}"]`).classList.add('active');
  updateMethodNote();
  document.getElementById('port-section').style.display = (m === 'icmp') ? 'none' : 'block';
}

function updateMethodNote() {
  const notes = { tcp: 'methodNoteTCP', icmp: 'methodNoteICMP', both: 'methodNoteBoth' };
  document.getElementById('method-note').textContent = t(notes[currentMethod]);
}

// ── port toggle ──
function togglePort(el) {
  const p = el.dataset.port;
  if (selectedPorts.has(p)) { selectedPorts.delete(p); el.classList.remove('sel'); }
  else { selectedPorts.add(p); el.classList.add('sel'); }
  syncPortInput();
}
function syncPortInput() {
  document.getElementById('custom-ports').value = [...selectedPorts].join(',');
}

// ── IP parsing ──
// Top-level: split on commas and/or whitespace → each piece can be a single IP / range / CIDR
function parseTargets(raw) {
  raw = raw.trim();
  if (!raw) return [];
  const pieces = raw.split(/[,\s]+/).map(p => p.trim()).filter(Boolean);
  let all = [];
  for (const piece of pieces) {
    if (piece.includes('/')) all = all.concat(parseCIDR(piece));
    else if (piece.includes('-')) all = all.concat(parseRange(piece));
    else all.push(piece);
  }
  // dedupe while preserving order
  return [...new Set(all)];
}

function parseCIDR(cidr) {
  const [base, prefix] = cidr.split('/');
  const bits = parseInt(prefix);
  if (isNaN(bits) || bits < 0 || bits > 32) return [];
  const parts = base.split('.').map(Number);
  if (parts.length !== 4) return [];
  const baseInt = parts.reduce((acc, v, i) => acc | (v << (24 - i*8)), 0) >>> 0;
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  const net  = (baseInt & mask) >>> 0;
  const count = Math.pow(2, 32 - bits);
  if (count > 1024) { alert(t('alertRangeTooLarge')); return []; }
  const ips = [];
  for (let i = 1; i < count - 1; i++) {
    const ip = net + i;
    ips.push([(ip>>>24)&255,(ip>>>16)&255,(ip>>>8)&255,ip&255].join('.'));
  }
  return ips;
}

function parseRange(s) {
  // 192.168.1.1-254  or  192.168.1.1-192.168.1.254
  const dashIdx = s.lastIndexOf('-');
  const left  = s.substring(0, dashIdx);
  const right = s.substring(dashIdx + 1);
  const leftParts = left.split('.').map(Number);
  if (leftParts.length !== 4) return [];
  if (right.includes('.')) {
    const rightParts = right.split('.').map(Number);
    const start = leftParts[3], end = rightParts[3];
    const ips = [];
    for (let i = start; i <= end; i++)
      ips.push([leftParts[0],leftParts[1],leftParts[2],i].join('.'));
    return ips;
  } else {
    const start = leftParts[3], end = parseInt(right);
    const ips = [];
    for (let i = start; i <= end; i++)
      ips.push([leftParts[0],leftParts[1],leftParts[2],i].join('.'));
    return ips;
  }
}

function updateRangeInfo() {
  const targets = parseTargets(document.getElementById('target').value);
  const info = document.getElementById('range-info');
  if (targets.length > 1) info.textContent = t('rangeInfoMultiple', targets.length);
  else if (targets.length === 1) info.textContent = t('rangeInfoSingle');
  else info.textContent = t('rangeInfoEmpty');
}

// ── Cloudflare clean-IP preset ──
// Official IPv4 ranges published at https://www.cloudflare.com/ips-v4/
// (fetched manually; Cloudflare's ranges change infrequently, but verify
// against the official page if this list is more than a few months old)
const CLOUDFLARE_IPV4_BLOCKS = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
];

// Cloudflare's ranges are far too large to scan in full (over 1.5 million
// addresses combined), so this draws a random sample from each block rather
// than scanning sequentially. Sequential scanning would also concentrate
// load on the first few addresses of each block, which isn't representative.
function sampleCIDR(cidr, count) {
  const [base, prefix] = cidr.split('/');
  const bits = parseInt(prefix);
  const parts = base.split('.').map(Number);
  const baseInt = parts.reduce((acc, v, i) => acc | (v << (24 - i*8)), 0) >>> 0;
  const hostBits = 32 - bits;
  const blockSize = Math.pow(2, hostBits);
  const usable = Math.max(blockSize - 2, 1); // exclude network/broadcast where applicable

  const offsets = new Set();
  const want = Math.min(count, usable);
  while (offsets.size < want) {
    offsets.add(1 + Math.floor(Math.random() * usable));
  }

  return [...offsets].map(off => {
    const ip = (baseInt + off) >>> 0;
    return [(ip>>>24)&255, (ip>>>16)&255, (ip>>>8)&255, ip&255].join('.');
  });
}

function loadCloudflarePreset() {
  const perBlock = parseInt(document.getElementById('preset-sample-size').value) || 20;
  let sampled = [];
  for (const block of CLOUDFLARE_IPV4_BLOCKS) {
    sampled = sampled.concat(sampleCIDR(block, perBlock));
  }
  document.getElementById('target').value = sampled.join(', ');
  updateRangeInfo();
  document.getElementById('preset-info').textContent =
    t('presetLoaded', sampled.length, CLOUDFLARE_IPV4_BLOCKS.length);
}

// ── log ──
function log(msg, cls='log-info') {
  const term = document.getElementById('terminal');
  const now = new Date();
  const ts = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  const line = document.createElement('div');
  line.className = 'log-line';
  line.innerHTML = `<span class="log-time">[${ts}]</span><span class="${cls}"></span>`;
  line.querySelector(`.${cls}`).textContent = msg;
  term.appendChild(line);
  if (autoScroll) term.scrollTop = term.scrollHeight;
}
function clearLog() {
  document.getElementById('terminal').innerHTML = '';
}

// ── browser probe (simulated TCP via fetch) ──
async function probeHTTP(ip, port, timeout) {
  const t = parseInt(timeout) || 1000;
  const start = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), t);
  try {
    await fetch(`http://${ip}:${port}`, { mode: 'no-cors', signal: ctrl.signal });
    clearTimeout(timer);
    return { alive: true, latency: Date.now() - start };
  } catch (e) {
    clearTimeout(timer);
    const lat = Date.now() - start;
    if (e.name === 'AbortError') return { alive: false, latency: t };
    // NOTE: a no-cors fetch resolves as an opaque response on most failure
    // paths too, so this is a heuristic, not a guarantee the port is open.
    return { alive: true, latency: lat };
  }
}

// ── toolbar handlers ──
function setFilter(f) {
  currentFilter = f;
  ['alive','dead','all'].forEach(k => {
    document.getElementById('f-' + k).classList.toggle('active', k === f);
  });
  renderResults();
}
function toggleSortFastest() {
  sortFastest = !sortFastest;
  document.getElementById('s-fastest').classList.toggle('toggle-on', sortFastest);
  renderResults();
}
function toggleAutoScroll() {
  autoScroll = !autoScroll;
  document.getElementById('t-autoscroll').classList.toggle('toggle-on', autoScroll);
}
function toggleDetail() {
  showDetail = !showDetail;
  document.getElementById('t-detail').classList.toggle('toggle-on', showDetail);
  document.querySelectorAll('.detail-col').forEach(el => el.classList.toggle('show', showDetail));
  renderResults();
}
function toggleCommas() {
  useCommas = !useCommas;
  document.getElementById('t-commas').classList.toggle('toggle-on', useCommas);
  document.getElementById('t-commas').textContent = t(useCommas ? 'sepComma' : 'sepNewline');
}

// robust clipboard helper: tries the modern API, falls back to execCommand
// for contexts where navigator.clipboard is unavailable or blocked
// (insecure origin, old WebView, missing permission, etc.)
async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // fall through to legacy method
    }
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}

function copyIP(ip, btn) {
  copyToClipboard(ip).then(ok => {
    const original = btn.textContent;
    btn.textContent = ok ? t('copyIPOK') : t('copyIPFail');
    setTimeout(() => { btn.textContent = original; }, 900);
  });
}

// ── main scan ──
async function startScan() {
  const targetRaw = document.getElementById('target').value.trim();
  const timeout   = parseInt(document.getElementById('timeout').value) || 1000;
  const concurrency = parseInt(document.getElementById('concurrency').value) || 50;
  const mode = document.getElementById('mode').value;

  if (!targetRaw) { alert(t('alertNoTarget')); return; }

  const targets = parseTargets(targetRaw);
  if (!targets.length) return;

  if (mode === 'python') {
    showPythonCode(targetRaw, timeout, concurrency);
    return;
  }

  const ports = document.getElementById('custom-ports').value
    .split(',').map(v => v.trim()).filter(Boolean).map(Number).filter(n => n > 0);
  if (currentMethod !== 'icmp' && !ports.length) { alert(t('alertNoPort')); return; }

  // setup UI
  scanning = true;
  stopRequested = false;
  scanResults = [];
  document.getElementById('scan-btn').disabled = true;
  document.getElementById('scan-btn').textContent = t('btnScanning');
  document.getElementById('stop-btn').style.display = 'block';
  document.getElementById('stop-btn').disabled = false;
  document.getElementById('stop-btn').textContent = t('btnStop');
  document.getElementById('progress-card').style.display = 'block';
  document.getElementById('log-card').style.display = 'block';
  document.getElementById('results-card').style.display = 'block';
  document.getElementById('python-card').style.display = 'none';
  document.getElementById('welcome-card').style.display = 'none';
  document.getElementById('results-body').innerHTML = '';
  clearLog();

  log(t('logStart', targets.length, currentMethod), 'log-info');
  if (currentMethod !== 'icmp')
    log(t('logPorts', ports.join(', ')), 'log-info');

  // track per-IP completion for the "host X of Y" progress text
  let ipsDone = 0;
  const totalIPs = targets.length;
  const ipTaskCount = {};   // ip -> remaining tasks
  const ipCompletedSet = new Set();

  document.getElementById('s-total').textContent = totalIPs;
  document.getElementById('s-alive').textContent = 0;
  document.getElementById('s-dead').textContent  = 0;
  document.getElementById('progress-text').textContent = t('progressOf', 0, totalIPs);

  startTime = Date.now();
  timerInterval = setInterval(() => {
    document.getElementById('s-time').textContent = ((Date.now()-startTime)/1000).toFixed(1)+'s';
  }, 200);

  // build task list
  const tasks = [];
  for (const ip of targets) {
    let count = 0;
    if (currentMethod === 'icmp') {
      tasks.push({ ip, port: null, method: 'icmp' });
      count = 1;
    } else if (currentMethod === 'tcp') {
      for (const port of ports) tasks.push({ ip, port, method: 'tcp' });
      count = ports.length;
    } else {
      tasks.push({ ip, port: null, method: 'icmp' });
      for (const port of ports) tasks.push({ ip, port, method: 'tcp' });
      count = ports.length + 1;
    }
    ipTaskCount[ip] = count;
  }

  let doneTasks = 0, aliveIPs = 0, deadIPs = 0;
  const ipAliveSeen = new Set();

  async function runTask(task) {
    let result;
    if (task.method === 'icmp') {
      result = await probeHTTP(task.ip, 80, timeout);
      result.method = 'ICMP (sim)';
    } else {
      result = await probeHTTP(task.ip, task.port, timeout);
      result.method = `TCP:${task.port}`;
    }
    result.ip   = task.ip;
    result.port = task.port;
    scanResults.push(result);

    if (result.alive && !ipAliveSeen.has(task.ip)) {
      ipAliveSeen.add(task.ip);
      log(t('logAlive', task.ip, result.latency, result.method), 'log-ok');
    }

    doneTasks++;
    ipTaskCount[task.ip]--;
    if (ipTaskCount[task.ip] === 0 && !ipCompletedSet.has(task.ip)) {
      ipCompletedSet.add(task.ip);
      ipsDone++;
      if (ipAliveSeen.has(task.ip)) aliveIPs++; else deadIPs++;
      document.getElementById('progress-text').textContent =
        t('progressChecking', ipsDone, totalIPs, task.ip);
    }

    const pct = Math.round(doneTasks / tasks.length * 100);
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('s-alive').textContent = aliveIPs;
    document.getElementById('s-dead').textContent  = deadIPs;

    renderResults(); // live update (filtered/sorted/deduped)
  }

  // concurrency pool
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) {
      if (stopRequested) break;
      const task = tasks[idx++];
      await runTask(task);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker());
  await Promise.all(workers);

  clearInterval(timerInterval);
  const elapsed = ((Date.now()-startTime)/1000).toFixed(1);
  if (stopRequested) {
    document.getElementById('progress-text').textContent = t('progressStopped', ipsDone, totalIPs);
    log(t('logStopped', aliveIPs, ipsDone, elapsed), 'log-warn');
  } else {
    document.getElementById('progress-text').textContent = t('progressDone', totalIPs);
    log(t('logDone', aliveIPs, totalIPs, elapsed), 'log-warn');
  }

  document.getElementById('results-card').style.display = 'block';
  renderResults();

  document.getElementById('scan-btn').disabled = false;
  document.getElementById('scan-btn').textContent = t('btnRescan');
  document.getElementById('stop-btn').style.display = 'none';
  scanning = false;
}

function stopScan() {
  if (!scanning) return;
  stopRequested = true;
  document.getElementById('stop-btn').disabled = true;
  document.getElementById('stop-btn').textContent = t('btnStopping');
  // worker loops check the flag between tasks; once all in-flight probes
  // resolve, startScan's tail code hides this button and resets scan-btn
}

// ── render results: dedupe by IP, apply filter + sort, respect detail toggle ──
function collapseByIP() {
  const byIP = new Map();
  for (const r of scanResults) {
    const existing = byIP.get(r.ip);
    if (!existing) {
      byIP.set(r.ip, {
        ip: r.ip,
        alive: r.alive,
        latency: r.latency,
        port: r.port,
        method: r.method,
        // every successful probe for this IP, kept for the detail view
        openPorts: r.alive ? [{ port: r.port, method: r.method, latency: r.latency }] : []
      });
    } else {
      if (r.alive) {
        existing.openPorts.push({ port: r.port, method: r.method, latency: r.latency });
        // the headline port/latency shown in simple mode is always the fastest one
        if (!existing.alive || r.latency < existing.latency) {
          existing.alive = true;
          existing.latency = r.latency;
          existing.port = r.port;
          existing.method = r.method;
        }
      } else if (!existing.alive) {
        existing.latency = Math.max(existing.latency, r.latency);
      }
    }
  }
  // keep each IP's open-port list sorted fastest-first for a stable detail view
  for (const row of byIP.values()) {
    row.openPorts.sort((a, b) => a.latency - b.latency);
  }
  return [...byIP.values()];
}

function applyFilterAndSort(rows) {
  if (currentFilter === 'alive') rows = rows.filter(r => r.alive);
  else if (currentFilter === 'dead') rows = rows.filter(r => !r.alive);
  if (sortFastest) {
    rows = [...rows].sort((a, b) => {
      if (a.alive !== b.alive) return a.alive ? -1 : 1;
      return a.latency - b.latency;
    });
  }
  return rows;
}

function renderResults() {
  const rows = applyFilterAndSort(collapseByIP());

  const tbody = document.getElementById('results-body');
  tbody.innerHTML = '';
  rows.forEach((r, i) => {
    const tr = document.createElement('tr');
    const statusBadge = r.alive
      ? `<span class="badge badge-ok">${t('statusAlive')}</span>`
      : `<span class="badge badge-fail">${t('statusDead')}</span>`;

    // detail mode: list every open port for this IP, not just the fastest one
    const portCell = r.openPorts.length
      ? r.openPorts.map(p => p.port).join(', ')
      : (r.port || '—');
    const methodCell = r.openPorts.length
      ? r.openPorts.map(p => p.method).join(', ')
      : (r.method || '—');

    tr.innerHTML = `
      <td class="row-num">${i + 1}</td>
      <td class="ip-cell ip-copy" onclick="copyIP('${r.ip}', this)">${r.ip}</td>
      <td class="detail-col${showDetail ? ' show' : ''}">${portCell}</td>
      <td class="detail-col${showDetail ? ' show' : ''}" style="color:var(--muted)">${methodCell}</td>
      <td class="latency-cell">${r.alive ? r.latency + 'ms' : '—'}</td>
      <td>${statusBadge}</td>
    `;
    tr.querySelector('.ip-copy').title = t('copyHint');
    tbody.appendChild(tr);
  });

  document.getElementById('no-results').style.display = rows.length ? 'none' : 'block';

  if (autoScroll) {
    const wrap = document.querySelector('.results-wrap');
    if (wrap) wrap.scrollTop = wrap.scrollHeight;
  }
}

// helper: get the deduped/filtered/sorted row set used for export
function getDisplayedRows() {
  return applyFilterAndSort(collapseByIP());
}

// formats one detail-mode line for an IP, listing every open port found
function formatDetailLine(r) {
  if (!r.alive) return `${r.ip}  NO_RESPONSE`;
  const ports = r.openPorts.length
    ? r.openPorts.map(p => `${p.port}(${p.latency}ms)`).join(', ')
    : `${r.port || '-'} (${r.latency}ms)`;
  return `${r.ip}  [${ports}]  ALIVE`;
}

// ── export ──
function exportTXT() {
  const rows = getDisplayedRows();
  let content;
  if (showDetail) {
    content = rows.map(formatDetailLine).join('\n'); // detail mode always one-per-line; commas would hurt readability
  } else {
    const ips = rows.map(r => r.ip);
    content = useCommas ? ips.join(', ') : ips.join('\n');
  }
  download('scan_results.txt', content, 'text/plain');
}
function exportCSV() {
  const rows = getDisplayedRows();
  let csvRows;
  if (showDetail) {
    csvRows = [['IP','OpenPorts','FastestLatency(ms)','Status']];
    rows.forEach(r => {
      const ports = r.openPorts.length
        ? r.openPorts.map(p => p.port).join('|')
        : (r.port || '');
      csvRows.push([r.ip, ports, r.alive ? r.latency : '', r.alive ? 'alive' : 'no_response']);
    });
  } else {
    csvRows = [['IP','Status']];
    rows.forEach(r => csvRows.push([r.ip, r.alive ? 'alive' : 'no_response']));
  }
  const csv = csvRows.map(row => row.join(',')).join('\n');
  download('scan_results.csv', csv, 'text/csv');
}
function exportJSON() {
  const rows = getDisplayedRows();
  const out = showDetail
    ? rows.map(r => ({
        ip: r.ip,
        alive: r.alive,
        openPorts: r.openPorts.map(p => ({ port: p.port, method: p.method, latency: p.latency })),
        fastestLatency: r.alive ? r.latency : null
      }))
    : rows.map(r => ({ ip: r.ip, alive: r.alive }));
  download('scan_results.json', JSON.stringify(out, null, 2), 'application/json');
}
function exportClipboard() {
  const rows = getDisplayedRows();
  const btn = document.getElementById('export-clipboard-btn');
  if (!rows.length) {
    const original = btn.textContent;
    btn.textContent = t('exportClipboardEmpty');
    setTimeout(() => { btn.textContent = original; }, 1200);
    return;
  }
  let content;
  if (showDetail) {
    content = rows.map(formatDetailLine).join('\n');
  } else {
    const ips = rows.map(r => r.ip);
    content = useCommas ? ips.join(', ') : ips.join('\n');
  }
  copyToClipboard(content).then(ok => {
    const original = btn.textContent;
    btn.textContent = ok ? t('exportClipboardOK') : t('exportClipboardFail');
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
}

// generates e.g. "20260620_101245" so every export filename stays unique
function timestampTag() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

function download(name, content, type) {
  // insert a timestamp before the extension so repeated exports never overwrite each other
  const dotIdx = name.lastIndexOf('.');
  const base = dotIdx !== -1 ? name.slice(0, dotIdx) : name;
  const ext  = dotIdx !== -1 ? name.slice(dotIdx) : '';
  const uniqueName = `${base}_${timestampTag()}${ext}`;

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = uniqueName;
  a.click();
}

// ── Python code generator ──
function showPythonCode(target, timeout, concurrency) {
  const ports = document.getElementById('custom-ports').value || '80,443,22,8080,8443';
  const method = currentMethod;

  const code = `#!/usr/bin/env python3
"""
IP Scanner Labs — accurate scan, no root required.
Method: ${method === 'icmp' ? 'ICMP Ping' : method === 'tcp' ? 'TCP Connect' : 'ICMP + TCP'}
Generated by IP Scanner Labs.
Supports multiple targets separated by commas or spaces, e.g.:
"109.85.76.1, 46.86.78.0/24 192.168.1.1-254"
"""

import socket
import subprocess
import platform
import ipaddress
import re
import concurrent.futures
import csv
import json
import time
from datetime import datetime

# ── configuration ─────────────────────────────────
TARGET     = "${target}"
PORTS      = [${method !== 'icmp' ? ports : '80'}]   # ports to probe
TIMEOUT    = ${timeout / 1000}        # seconds
WORKERS    = ${concurrency}         # concurrent threads
METHOD     = "${method}"            # tcp | icmp | both
# ───────────────────────────────────────────────────


def parse_single(raw: str) -> list:
    """Expand one IP / CIDR / range token into a list of IPs."""
    raw = raw.strip()
    if '/' in raw:
        net = ipaddress.IPv4Network(raw, strict=False)
        return [str(h) for h in net.hosts()]
    if '-' in raw:
        parts = raw.split('-')
        base  = parts[0].rsplit('.', 1)
        start = int(base[1])
        end   = int(parts[1]) if '.' not in parts[1] else int(parts[1].split('.')[-1])
        prefix = base[0]
        return [f"{prefix}.{i}" for i in range(start, end + 1)]
    return [raw]


def parse_targets(raw: str) -> list:
    """Support multiple targets separated by commas and/or whitespace; deduped."""
    pieces = [p for p in re.split(r'[,\\s]+', raw.strip()) if p]
    seen = []
    for piece in pieces:
        for ip in parse_single(piece):
            if ip not in seen:
                seen.append(ip)
    return seen


def tcp_probe(ip: str, port: int) -> dict:
    """TCP connect probe — does not require root."""
    start = time.time()
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(TIMEOUT)
        result = sock.connect_ex((ip, port))
        sock.close()
        latency = int((time.time() - start) * 1000)
        alive = result == 0
        return {"ip": ip, "port": port, "method": f"TCP:{port}",
                "alive": alive, "latency_ms": latency}
    except Exception as e:
        return {"ip": ip, "port": port, "method": f"TCP:{port}",
                "alive": False, "latency_ms": -1, "error": str(e)}


def icmp_probe(ip: str) -> dict:
    """ICMP ping via the system's ping binary — does not require root."""
    start = time.time()
    param = ["-n", "1", "-w", str(int(TIMEOUT * 1000))] \\
            if platform.system().lower() == "windows" \\
            else ["-c", "1", "-W", str(int(TIMEOUT))]
    try:
        result = subprocess.run(
            ["ping"] + param + [ip],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        latency = int((time.time() - start) * 1000)
        alive = result.returncode == 0
        return {"ip": ip, "port": None, "method": "ICMP",
                "alive": alive, "latency_ms": latency}
    except FileNotFoundError:
        return {"ip": ip, "port": None, "method": "ICMP",
                "alive": False, "latency_ms": -1, "error": "ping not found"}


def scan_host(task: tuple) -> dict:
    ip, port, method = task
    if method == "icmp":
        return icmp_probe(ip)
    return tcp_probe(ip, port)


def main():
    targets = parse_targets(TARGET)
    total_ips = len(targets)
    print(f"[*] Scanning {total_ips} unique address(es) — method: {METHOD}")

    tasks = []
    if METHOD in ("tcp", "both"):
        for ip in targets:
            for port in PORTS:
                tasks.append((ip, port, "tcp"))
    if METHOD in ("icmp", "both"):
        for ip in targets:
            tasks.append((ip, None, "icmp"))

    print(f"[*] Total tasks: {len(tasks)}")

    results = []
    alive_ips = {}     # ip -> best (fastest alive) result
    ip_remaining = {}
    for ip in targets:
        ip_remaining[ip] = sum(1 for task in tasks if task[0] == ip)

    ips_done = 0
    start_time = time.time()

    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as executor:
        futures = {executor.submit(scan_host, task): task for task in tasks}
        for future in concurrent.futures.as_completed(futures):
            r = future.result()
            results.append(r)

            if r["alive"]:
                current = alive_ips.get(r["ip"])
                if current is None or r["latency_ms"] < current["latency_ms"]:
                    alive_ips[r["ip"]] = r

            ip_remaining[r["ip"]] -= 1
            if ip_remaining[r["ip"]] == 0:
                ips_done += 1
                status = "alive" if r["ip"] in alive_ips else "no response"
                print(f"  Host {ips_done} of {total_ips}  —  {r['ip']}  —  {status}")

    elapsed = time.time() - start_time
    print(f"\\n[done] Scan complete — {len(alive_ips)} of {total_ips} hosts alive — {elapsed:.1f}s")

    sorted_alive = sorted(alive_ips.values(), key=lambda x: x["latency_ms"])

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # txt: unique alive IPs only, no port info
    with open(f"scan_{timestamp}.txt", "w") as f:
        for r in sorted_alive:
            f.write(r["ip"] + "\\n")

    with open(f"scan_{timestamp}.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["ip","port","method","alive","latency_ms"])
        writer.writeheader()
        writer.writerows(results)

    with open(f"scan_{timestamp}.json", "w") as f:
        json.dump(sorted_alive, f, indent=2)

    print(f"[*] Results saved: scan_{timestamp}.txt / .csv / .json")
    print("\\n── Alive hosts (fastest first) ──────────────")
    for r in sorted_alive:
        print(f"  {r['ip']:20s} {r['latency_ms']}ms")


if __name__ == "__main__":
    main()
`;

  document.getElementById('python-card').style.display = 'block';
  document.getElementById('log-card').style.display = 'none';
  document.getElementById('progress-card').style.display = 'none';
  document.getElementById('welcome-card').style.display = 'none';
  document.getElementById('python-code').textContent = code;
  document.getElementById('python-card').scrollIntoView({ behavior: 'smooth' });
}

function copyPython() {
  copyToClipboard(document.getElementById('python-code').textContent).then(ok => {
    alert(ok ? t('copyOK') : t('copyFail'));
  });
}
function downloadPython() {
  download('ip_scanner.py', document.getElementById('python-code').textContent, 'text/plain');
}

// ── init ──
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('custom-ports').addEventListener('input', function() {
    const vals = this.value.split(',').map(v => v.trim()).filter(Boolean);
    selectedPorts = new Set(vals);
    document.querySelectorAll('.tag').forEach(tagEl => {
      tagEl.classList.toggle('sel', selectedPorts.has(tagEl.dataset.port));
    });
  });
  syncPortInput();

  document.getElementById('target').addEventListener('input', updateRangeInfo);

  // desktop convenience: pressing Enter in the target or port fields starts the scan
  ['target', 'custom-ports', 'timeout', 'concurrency'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !scanning) startScan();
    });
  });

  document.getElementById('footer-year').textContent = new Date().getFullYear();

  document.addEventListener('click', (e) => {
    const switchEl = document.getElementById('lang-switch');
    if (!switchEl.contains(e.target)) closeLangMenu();
  });

  applyLanguage();
});
