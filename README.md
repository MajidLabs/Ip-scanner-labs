# IP Scanner Labs

A lightweight, browser-based host scanner. No server, no installation, no root access needed — open the HTML file and start scanning.

Built for network administrators and developers who need a quick reachability check without setting up a dedicated tool.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Language: HTML/JS](https://img.shields.io/badge/Stack-HTML%20%2F%20JS%20%2F%20CSS-blue.svg)

---

## What it does

Sends TCP connection probes to a list of IP addresses across a set of ports and tells you which hosts respond, how fast, and on which ports. Results appear in real time as the scan runs.

For an accurate scan (real TCP sockets + ICMP ping), it can generate a ready-to-run Python script — no libraries required, no root needed.

---

## Features

- **Multi-target input** — single IP, range (`192.168.1.1-254`), or CIDR (`192.168.1.0/24`); separate multiple targets with a comma or space
- **Live results** — table fills in real time as each host responds; sortable by latency
- **Multi-port tracking** — scans all selected ports per IP; shows every open port in detail mode, deduplicated by default
- **Cloudflare preset** — one-click random sample from Cloudflare's official IPv4 blocks, useful for finding the fastest-responding edge node from your location *(reachability check only — not CDN fronting or traffic obfuscation)*
- **Python script generator** — produces an accurate standalone script using real `socket.connect()` and the system `ping` binary
- **Export** — TXT, CSV, JSON, or clipboard; IP-only or full detail (port, method, latency)
- **Bilingual UI** — Persian (Farsi) and English, switchable at runtime; RTL/LTR layout follows automatically
- **Responsive** — two-column desktop layout, mobile-friendly single-column; dark/light theme follows system preference

---

## Usage

**Browser (quick)**

Open `index.html` in any modern browser. Keep `style.css` and `script.js` in the same folder.

> On mobile, if CSS/JS don't load (a common restriction when opening local files via `file://`), use the standalone `ip-scanner-labs-single-file.html` instead — everything is inlined into one file.

**Python (accurate)**

1. Set your targets and ports in the UI
2. Switch the execution mode to *"Show Python code"*
3. Download or copy the generated script
4. Run it: `python3 ip_scanner.py`

No pip installs needed. Works on Linux, macOS, and Windows.

---

## How the browser scan works

The browser mode uses `fetch()` with `no-cors` against `http://ip:port`. Because browsers can't read raw TCP state, the result is a **heuristic** (tahmini — تخمینی): if the request resolves before the timeout, the host is likely reachable. If it times out, it probably isn't.

This means **false positives are possible** — a host that answers at the HTTP level but blocks the specific port you're testing may still be reported as alive. For anything more than a rough reachability check, use the Python mode.

The Python script uses real `socket.connect_ex()` calls and the OS `ping` binary — neither requires root or administrator privileges.

---

## Limitations

- Not a replacement for `nmap` or similar dedicated scanners
- Browser mode cannot determine port state with certainty (see above)
- ICMP ping in the browser is simulated — real ICMP is only available in the generated Python script

---

## Responsible use

Only scan networks and hosts you own or have explicit written permission to test. Unauthorized scanning may be illegal in your jurisdiction regardless of intent.

---

## Project structure

```
index.html                                                Markup and UI structure
style.css                                                    All styling (dark/light themes, responsive layout)
script.js                                                     Application logic + English/Persian i18n dictionary
LICENSE                                                    MIT License
README.md                                             This file
.gitignore                                                  Excludes local scan exports and OS noise
mobile-ip-scanner-labs-single-file.html   Mobile version — everything inlined, no dependencies
```

---

## License

MIT — see [LICENSE](LICENSE).

---

---

<div dir="rtl">

# IP Scanner Labs

یک اسکنر سبک و مرورگر-محور برای بررسی دسترس‌پذیری هاست‌ها. بدون نیاز به سرور، نصب، یا دسترسی root — فقط فایل HTML را باز کنید و اسکن را شروع کنید.

ساخته‌شده برای مدیران شبکه و توسعه‌دهندگانی که نیاز به بررسی سریع دسترس‌پذیری دارند، بدون راه‌اندازی ابزار اختصاصی.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Language: HTML/JS](https://img.shields.io/badge/Stack-HTML%20%2F%20JS%20%2F%20CSS-blue.svg)

---

## چه کاری انجام می‌دهد

به فهرستی از آدرس‌های IP روی مجموعه‌ای از پورت‌ها پروب TCP ارسال می‌کند و مشخص می‌کند کدام هاست‌ها پاسخ می‌دهند، با چه سرعتی، و روی کدام پورت‌ها. نتایج به صورت real-time در حین اجرای اسکن نمایش داده می‌شوند.

برای اسکن دقیق‌تر (سوکت‌های واقعی TCP و پینگ ICMP)، می‌تواند یک اسکریپت Python آماده برای اجرا تولید کند — بدون نیاز به کتابخانه خاص یا دسترسی root.

---

## ویژگی‌ها

- **ورودی چندهدفه** — آی‌پی تکی، محدوده (`192.168.1.1-254`)، یا CIDR (`192.168.1.0/24`)؛ چند هدف را با کاما یا فاصله جدا کنید
- **نتایج زنده** — جدول به‌صورت real-time با پاسخ هر هاست پر می‌شود؛ قابل مرتب‌سازی بر اساس تأخیر
- **ردیابی چندپورتی** — تمام پورت‌های انتخابی را برای هر IP اسکن می‌کند؛ در حالت جزئیات تمام پورت‌های باز را نشان می‌دهد
- **پیش‌تنظیم Cloudflare** — نمونه‌گیری تصادفی از بلوک‌های رسمی IPv4 کلادفلر با یک کلیک، برای یافتن سریع‌ترین edge node از موقعیت شما
- **تولید اسکریپت Python** — یک اسکریپت مستقل دقیق با استفاده واقعی از `socket.connect()` و دستور سیستمی `ping` تولید می‌کند
- **خروجی** — TXT، CSV، JSON یا کلیپ‌بورد؛ فقط IP یا جزئیات کامل (پورت، روش، تأخیر)
- **رابط دوزبانه** — فارسی و انگلیسی، قابل تغییر در حین اجرا؛ چیدمان RTL/LTR به صورت خودکار تنظیم می‌شود
- **ریسپانسیو** — دسکتاپ دو ستونه، موبایل تک‌ستونه؛ تم تاریک/روشن از تنظیمات سیستم پیروی می‌کند

---

## نحوه استفاده

**مرورگر (سریع)**

فایل `index.html` را در هر مرورگر مدرنی باز کنید. فایل‌های `style.css` و `script.js` باید در همان پوشه باشند.

> در موبایل، اگر CSS/JS بارگذاری نشدند (محدودیت رایج در باز کردن فایل‌های لوکال از طریق `file://`)، از فایل یکپارچه `ip-scanner-labs-single-file.html` استفاده کنید — همه چیز در یک فایل ادغام شده است.

**Python (دقیق)**

1. اهداف و پورت‌ها را در رابط کاربری تنظیم کنید
2. حالت اجرا را به *"نمایش کد Python"* تغییر دهید
3. اسکریپت تولیدشده را دانلود یا کپی کنید
4. اجرا کنید: `python3 ip_scanner.py`

نیازی به نصب پکیج اضافی نیست. روی Linux، macOS و Windows کار می‌کند.

---

## نحوه عملکرد اسکن مرورگر

حالت مرورگر از `fetch()` با `no-cors` روی `http://ip:port` استفاده می‌کند. از آنجا که مرورگرها نمی‌توانند وضعیت TCP خام را بخوانند، نتیجه یک **تخمین** است: اگر درخواست قبل از timeout حل شود، هاست احتمالاً در دسترس است؛ اگر timeout شود، احتمالاً در دسترس نیست.

این یعنی **false positive امکان‌پذیر است** — هاستی که در سطح HTTP پاسخ می‌دهد اما پورت موردنظر را مسدود کرده، ممکن است زنده گزارش شود. برای بیش از یک بررسی ساده دسترس‌پذیری، از حالت Python استفاده کنید.

اسکریپت Python از فراخوانی‌های واقعی `socket.connect_ex()` و دستور سیستمی `ping` استفاده می‌کند — هیچ‌کدام نیاز به root یا دسترسی مدیر ندارند.

---

## محدودیت‌ها

- جایگزین `nmap` یا اسکنرهای تخصصی مشابه نیست
- حالت مرورگر نمی‌تواند وضعیت پورت را با قطعیت تعیین کند (بالا را ببینید)
- پینگ ICMP در مرورگر شبیه‌سازی‌شده است — ICMP واقعی فقط در اسکریپت Python تولیدشده موجود است

---

## استفاده مسئولانه

فقط شبکه‌ها و هاست‌هایی را اسکن کنید که مالک آن‌ها هستید یا مجوز کتبی صریح برای تست دارید. اسکن غیرمجاز ممکن است در حوزه قضایی شما غیرقانونی باشد، صرف‌نظر از نیت.

---

## ساختار پروژه

```
index.html                                                                                             ساختار HTML و رابط کاربری
style.css                                                               تمام استایل‌ها (تم تاریک/روشن، طراحی ریسپانسیو)
script.js                                                                       منطق برنامه + دیکشنری i18n انگلیسی/فارسی
LICENSE                                                                                                                        مجوز MIT
README.md                                                                                                                     همین فایل
.gitignore                                                          حذف خروجی‌های اسکن محلی و فایل‌های سیستم‌عامل
mobile-ip-scanner-labs-single-file.html             نسخه موبایل — همه چیز در یک فایل، بدون وابستگی   
```

---

## مجوز

MIT — به فایل [LICENSE](LICENSE) مراجعه کنید.

</div>
