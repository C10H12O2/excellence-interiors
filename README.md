# Excellence Interiors & Events Decor Suppliers

A single-page landing site for Excellence Interiors & Events, a 
retail supplier of event and interior decor pieces — serving hotels, caterers, 
and event professionals.

🔗 **Live site:** https://c10h12o2.github.io/excellence-interiors/

## Overview

Dress up the event. Style up the space. Supplied wholesale and retail.

This site was primarily made to advertise my parents' shops and simultaneously show what I can do for future employers. This site showcases the shop's product categories, contact channels, and 
location for the businesses and individuals who source decor supplies from them.

## Features

- **Branded page loader** with logo pulse animation on load
- **Staggered hero entrance** animation (fade + rise, respects `prefers-reduced-motion`)
- **Signature swatch strip** highlighting core product categories
- **Services grid** with photos for each decor category
- **Scroll-triggered fade-ins** for the swatch strip via `IntersectionObserver`
- **Direct contact channels** — WhatsApp (2 lines), call (2 carriers), and 
  social links (Instagram, Facebook, TikTok), each with inline SVG icons
- **Embedded Google Maps** location
- **Fully responsive** — tested down to small phone screens
- Logo click scrolls smoothly back to the top

## Tech Stack

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no 
dependencies. Runs anywhere a static file can be served.

## Project Structure
```
Excellence-Decor/
├── css/
│   ├── base.css
│   ├── contact.css
│   ├── footer.css
│   ├── gallery.css
│   ├── hero.css
│   ├── loader.css
│   ├── nav.css
│   ├── responsive.css
│   ├── services.css
│   └── variables.css
├── images/
│   ├── products/
│   │   ├── Artificial Flowers 2.webp
│   │   ├── Artificial Flowers.webp
│   │   ├── Delivery.png
│   │   ├── Event Decor.jfif
│   │   ├── Fairy Lights.jpeg
│   │   ├── Gold Chauffing Dishes2.jfif
│   │   ├── Gold Chauffing Dishes.jpg
│   │   └── Wine Bottle Holder.jpg
│   ├── Excellence Beyond Logo.png
│   ├── excellence logo.png
│   └── favicon.png
├── js/
│   └── main.js
├── index.html
└── README.md
```
