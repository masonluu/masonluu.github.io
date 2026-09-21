# masonluu.github.io

Personal portfolio for Mason Luu, live at https://masonluu.github.io/.

Plain HTML and CSS with a few lines of JavaScript. No build step, no framework, no dependencies. Push to `main` and GitHub Pages serves it.

## Structure

```
index.html              The page
404.html                Not-found page
favicon.svg             Favicon (apple-touch-icon.png for iOS)
robots.txt, sitemap.xml Search engine files
assets/
  css/site.css          All styles (colors and fonts are tokens at the top)
  js/site.js            Reveals the flow arrows on scroll
  fonts/                Self-hosted variable fonts (Bricolage Grotesque, Public Sans)
  images/               Headshot (WebP + JPEG fallback) and social preview image
  Mason_Luu_Resume.pdf  Resume linked from the page
```

## Common edits

- **Add a project:** copy an `<li class="row">` block inside the Projects section of `index.html`.
- **Link a project to its repo:** uncomment the `row-links` line under the project and set the URL.
- **Change colors:** edit the variables in `:root` at the top of `assets/css/site.css`. Dark mode values are in the `prefers-color-scheme: dark` block right below.
- **Update the resume:** replace `assets/Mason_Luu_Resume.pdf`, keeping the same file name.
- **Social preview image:** `assets/images/og-image.png` (1200 x 630). Replace it if the name or title changes.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Credits

Fonts: [Bricolage Grotesque](https://github.com/ateliertriay/bricolage) and [Public Sans](https://github.com/uswds/public-sans), both under the SIL Open Font License.
