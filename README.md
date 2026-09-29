# THE SHOES RACK
Premium footwear storefront in plain HTML, CSS and vanilla JavaScript. No backend; cart, wishlist and recently viewed use localStorage. Checkout is a UI demo only (no payment processed).

## Features
Shop with filters and sort, 9 category pages, product pages, quick view, cart drawer and page, wishlist, live search, WhatsApp enquiry (dynamic product message), demo reviews, policy templates, responsive layout.

## Run
Open `index.html` in a browser (or use any static server).

## Structure
`index.html, shop.html, product.html, cart.html, checkout.html, wishlist.html, about.html, contact.html, reviews.html, faq.html` · `categories/` · `policies/` · `css/` · `js/` · `assets/`

## Edit
- Products, prices, images: `js/products.js` (add/remove `mk(...)` lines; price = 5th value, original price = 6th; for real images add an `images` array override or edit the `images:` line in `mk`, using `assets/images/your.jpg` or a URL).
- WhatsApp number, email, currency, shipping fee: `js/config.js` (email is a placeholder).
- Policies: edit files in `policies/` (placeholder text, get legal review).
- Announcement bar, footer: `js/main.js`. Homepage copy: `index.html`.
- Images from trendyhouse.in are not bundled. Use only images you have rights to.

## Admin panel
Open `admin.html` (password in `js/config.js` > `adminPassword`, default `admin123`; change it). Add, edit and delete products; upload images or use paths.
Products are saved in this browser only. To publish: click "Download products-data.js", replace `js/products-data.js` with it, and re-upload the site. This password is only a convenience, not real security; a live multi-user admin needs a backend (e.g. Firebase or Supabase).

## Real product photos
Save photos as `assets/images/TSR001.jpg`, `TSR001-2.jpg`, `TSR001-3.jpg`, `TSR001-4.jpg` (up to 4 per product id). Any missing file shows a text placeholder with the product name. Homepage photos: `hero.jpg`, `cat-sneakers.jpg`, `cat-sports.jpg`, `cat-casual.jpg`, `cat-formal.jpg`, `cat-womens.jpg`, `cat-newarrivals.jpg`.

## Deploy
Netlify: drag the folder onto app.netlify.com/drop. Vercel: `vercel` in the folder (framework: Other, no build). GitHub Pages: push to a repo, Settings > Pages > deploy from branch root.

## Logo
Edit `assets/logo/logo.svg` (mark) or replace it with your own logo file of the same name. It is also used as the browser tab icon. The brand name text is set in `js/main.js`.
