# Sapar Therapy — massagetherapy-naples.com

Next.js site for Borys Sapar, LMT. Naples, FL.
Replacing the current Tilda site at massagetherapy-naples.com.

---

## Deploy to Vercel (5 steps)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import that repo
3. Leave all settings as default → click Deploy
4. Site is live on a `.vercel.app` URL

### Connect Borys's domain

5. Vercel dashboard → Project → Settings → Domains
6. Add his domain (e.g. `sapartherapy.com`)
7. Copy the two DNS records Vercel gives you (A record + CNAME)
8. Log into his domain registrar (GoDaddy / Namecheap / etc.)
9. Paste the DNS records in
10. Done — propagates in 15–60 minutes

---

## After launch — update these

- `app/layout.js` line 3: change `metadataBase` URL to his real domain
- `app/sitemap.js`: same domain update
- `app/robots.js`: same domain update
- `public/og-image.jpg`: add a real 1200x630 image (his photo or treatment room)

---

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## SEO included

- Title tag + meta description with Naples, FL keywords
- Open Graph tags for social sharing
- Twitter card
- JSON-LD LocalBusiness schema (Google rich results)
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Canonical URL
- Semantic HTML (h1, h2, h3, article, section, aria-label)
- Mobile responsive

## After launch checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Update Google Business Profile website URL to new domain
- [ ] Add a real og-image.jpg to /public folder
- [ ] Replace placeholder domain in layout.js with real domain
