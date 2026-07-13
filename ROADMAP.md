# Roadmap — edthomson.com

_Status: active · updated 2026-05-30_

Personal website / portfolio — a Node.js static-site generator that compiles
markdown into HTML and deploys to GitHub Pages.

## Shipped

- [x] Static site generator (markdown + YAML front matter → HTML)
- [x] CI/CD: GitHub Actions build + deploy to GitHub Pages on push
- [x] Responsive layout with mobile navigation menu
- [x] Dark mode (system-preference detection + manual toggle, persisted)
- [x] Content pages — About, Apps & Projects, Blockchain, AI, Decentralized Gaming, Information Security
- [x] Apps showcase grid from `apps-data.json`, categorized (Games, Writing Tools, Tech Demos, Productivity Tools)
- [x] Code syntax highlighting (highlight.js) with copy-to-clipboard buttons
- [x] Auto table of contents from headings with smooth-scroll navigation
- [x] Lazy image loading (IntersectionObserver with fallback)
- [x] Footer with social links and dynamic year

## Next

- [ ] Surface the crypto price-analysis app on the showcase once it matures
- [ ] Image optimization + CSS/JS minification in the build step

## Backlog

- [ ] Search across content pages
- [ ] Analytics integration
- [ ] PWA / offline support (service worker)
