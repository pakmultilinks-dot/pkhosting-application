# PK Hosting Application

A polished, mobile-friendly web application for PK Hosting. Browse every hosting plan with real prices, check domain prices, compare plans side by side, and build a quote.

Live app: https://pakmultilinks-dot.github.io/pkhosting-application/

## What it does

- **Plan browser**: Shared, WordPress, Reseller, Cloud VPS, Premium VPS, Dedicated and Website Retainers. First-year Black Friday prices with renewal prices, a billing view toggle, and plan search.
- **Find my plan**: a four-question quiz that recommends the right plan with the reason why.
- **Domain search**: shows the real registration and renewal price for 34 extensions. The availability result is a clearly labelled demo check, not a live registry lookup. Real availability is confirmed by PK Hosting before registration.
- **Compare**: tick Compare on up to three plans for a side-by-side table.
- **My Quote**: add plans and domains, pick a 1, 2 or 3 year term, add real VPS add-ons (Windows licence, daily backup, extra IPv4, extra storage, private network), see the first-year total and the renewal total live. Request the quote with your details and get a quote reference, then copy, print or download it.
- **Help**: real answers on refunds, the Hestia panel, free migration, payments, backups and uptime, plus PK Hosting contact details.

Every button and function works. The app was tested end to end in a real browser: 82 automated checks, all passing, covering every tab, every button, the quiz, domain search, compare, the quote builder, the form, the FAQ, persistence across reload, and a 390px mobile viewport with no horizontal overflow.

## Prices

All prices were verified live on https://www.pkhosting.com/pricing/ on 11 November 2026. Black Friday first-year prices; renewals are the full price. Add-ons and taxes extra. Dedicated servers are starting budgets; the exact hardware is confirmed in writing by PK Hosting before payment.

## Notes

- This is a demo application. It is not the real PK Hosting checkout and no order is placed here. Nothing is charged.
- No data leaves the browser. The cart and saved quotes use localStorage only.
- Built with plain HTML, CSS and JavaScript. No build step, no dependencies.
