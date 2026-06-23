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
index.html     Markup and UI structure
style.css      All styling (dark/light themes, responsive layout)
script.js      Application logic + English/Persian i18n dictionary
LICENSE        MIT License
README.md      This file
.gitignore     Excludes local scan exports and OS noise
```

---

## License

MIT — see [LICENSE](LICENSE).
