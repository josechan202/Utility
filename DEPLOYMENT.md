# Deployment Guide

This guide covers deploying the Format Converter to various platforms.

## Quick Deploy to Vercel (Recommended)

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/Utility)

### Method 2: CLI Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy** (from project root):
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Method 3: Git Integration

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"

## Configuration

The project includes a `vercel.json` file with production-ready settings:
- Security headers (CSP, X-Frame-Options, etc.)
- Clean URLs
- Redirects for legacy paths
- Test route exclusion from search engines

## Post-Deployment Checklist

### 1. Update URLs
After deployment, update these files with your actual domain:

**README.md**:
```markdown
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-actual-domain.vercel.app)
```

**public/sitemap.xml**:
```xml
<loc>https://your-actual-domain.vercel.app/</loc>
```

**public/robots.txt**:
```
Sitemap: https://your-actual-domain.vercel.app/sitemap.xml
```

**public/index.html** (Open Graph tags):
```html
<meta property="og:url" content="https://your-actual-domain.vercel.app">
```

### 2. Configure Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate provisioning

### 3. Set Up Analytics (Optional)

Choose one of these analytics providers:

**Google Analytics**:
1. Create a GA4 property
2. Get your measurement ID (G-XXXXXXXXXX)
3. Uncomment the GA script in `public/index.html`
4. Replace the tracking ID

**Plausible Analytics** (Privacy-friendly):
1. Create account at [plausible.io](https://plausible.io)
2. Add your domain
3. Uncomment the Plausible script in `public/index.html`
4. Update the data-domain attribute

**Umami** (Self-hosted):
1. Deploy Umami instance
2. Add website
3. Update `public/config.js` with your Umami settings

### 4. Enable Error Monitoring (Optional)

**Sentry**:
1. Create Sentry project
2. Get your DSN
3. Update `public/config.js`:
   ```javascript
   errorMonitoring: {
       sentryDsn: 'https://xxxxxx@sentry.io/xxxxxx',
       enabled: true
   }
   ```
4. Add Sentry SDK to `public/index.html`

### 5. Add Favicon and Icons

Generate favicons using [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/):

Required files:
- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/icon-192.png` (for PWA)
- `public/icon-512.png` (for PWA)

### 6. Create Open Graph Image

Create a social preview image (1200x630px):
- Save as `public/og-image.png`
- Include app branding and description
- Test with [Social Share Preview](https://socialsharepreview.com/)

### 7. Environment Variables (if needed)

Set environment variables in Vercel dashboard:
```
Settings > Environment Variables
```

Example variables:
- `ANALYTICS_ID`
- `SENTRY_DSN`
- `API_KEY` (if you add backend features)

## Testing Deployment

### 1. Verify Deployment
```bash
curl -I https://your-app.vercel.app
```

Check for:
- Status: 200 OK
- Security headers present
- Content-Type: text/html

### 2. Run Lighthouse Audit
1. Open Chrome DevTools
2. Navigate to "Lighthouse" tab
3. Run audit (Desktop & Mobile)
4. Aim for 90+ scores

### 3. Test Functionality
- [ ] All format conversions work
- [ ] Error handling displays correctly
- [ ] Responsive design on mobile
- [ ] Test suite passes (`/tests`)
- [ ] No console errors

### 4. Security Verification
Check security headers:
```bash
curl -I https://your-app.vercel.app | grep -E "X-|Content-Security"
```

Expected headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy: ...`

### 5. SEO Verification
- [ ] Visit `/robots.txt` - should be accessible
- [ ] Visit `/sitemap.xml` - should be valid XML
- [ ] Check meta tags in page source
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

## Alternative Deployment Platforms

### Netlify

1. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --dir=public
   netlify deploy --prod --dir=public
   ```

2. **Via Git**:
   - Connect repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `public`

3. **Create `netlify.toml`**:
   ```toml
   [build]
     publish = "public"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   ```

### GitHub Pages

1. **Create `gh-pages` branch**:
   ```bash
   git checkout -b gh-pages
   git add public/*
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

2. **Enable GitHub Pages**:
   - Repository Settings > Pages
   - Source: gh-pages branch / root
   - Custom domain (optional)

3. **Create GitHub Action** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./public
   ```

### Cloudflare Pages

1. **Via Dashboard**:
   - Connect GitHub repository
   - Build settings:
     - Build command: (none)
     - Build output directory: `public`

2. **Via Wrangler CLI**:
   ```bash
   npm install -g wrangler
   wrangler pages publish public
   ```

### AWS S3 + CloudFront

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-bucket-name
   aws s3 sync public/ s3://your-bucket-name
   ```

2. **Enable Static Website Hosting**:
   ```bash
   aws s3 website s3://your-bucket-name --index-document index.html
   ```

3. **Create CloudFront Distribution**:
   - Origin: S3 bucket
   - Enable HTTPS
   - Set custom error pages

4. **Set Bucket Policy**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-bucket-name/*"
     }]
   }
   ```

## Performance Optimization

### 1. Enable CDN Caching
Vercel automatically caches static assets. For other platforms:

**Cache-Control headers**:
```
HTML: Cache-Control: public, max-age=0, must-revalidate
JS/CSS: Cache-Control: public, max-age=31536000, immutable
```

### 2. Enable Compression
Most platforms enable gzip/brotli automatically. Verify:
```bash
curl -H "Accept-Encoding: gzip" -I https://your-app.vercel.app
```

### 3. Monitor Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/) (Free)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Analytics Dashboards
- Vercel Analytics (built-in)
- Google Search Console
- Plausible Analytics
- Umami

## Rollback Procedure

### Vercel
```bash
# List deployments
vercel list

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### Netlify
```bash
# List deployments
netlify deploy:list

# Restore deployment
netlify deploy:restore [deploy-id]
```

## Troubleshooting

### Issue: 404 on Deployment
- Check `outputDirectory` in `vercel.json` points to `public`
- Verify `public/index.html` exists

### Issue: CSP Errors
- Update CSP in `vercel.json` to allow required resources
- Test CSP with browser console

### Issue: Assets Not Loading
- Check file paths are absolute (`/config.js` not `config.js`)
- Verify assets exist in `public/` directory

### Issue: Slow Performance
- Enable CDN caching
- Compress images
- Check Lighthouse audit for suggestions

## Support

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review deployment logs
3. Open an issue on GitHub
4. Contact platform support

---

**Last Updated**: 2025-11-15
