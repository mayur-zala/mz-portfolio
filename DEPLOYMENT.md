# Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account ([vercel.com](https://vercel.com))
- GitHub account with repo pushed

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import GitHub repo: `mz-portfolio`
   - Click "Import"

3. **Configure Build Settings**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `.` (root)
   - **Install Command:** `npm install`

4. **Environment Variables** (Optional)
   - No required env vars for this static site
   - Can add `ENVIRONMENT=production` for production branch if needed

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit auto-generated `.vercel.app` URL

### Environment Setup

**Preview (Development)**
- Triggered on: Pull requests & non-main branches
- Cache: 1 hour
- Analytics: Disabled

**Production**
- Triggered on: Push to `main` branch
- Cache: 1 year (static assets)
- Analytics: Enabled

### Vercel Configuration

Settings are in `vercel.json`:
- **buildCommand:** `npm run build` (generates Tailwind CSS)
- **outputDirectory:** `.` (serves index.html from root)
- **headers:** Cache control for assets & resume
- **rewrites:** `/resume` → `/assets/resume/MayurZala_Resume.pdf`

### Custom Domain (Optional)

1. In Vercel dashboard → Project Settings → Domains
2. Add your domain (e.g., `mayurzala.com`)
3. Follow DNS setup instructions

### Rebuild & Redeploy

To redeploy without code changes:
- Dashboard → Deployments → Click three dots → Redeploy

### Troubleshooting

**Build fails:**
- Check `npm run build` works locally
- Verify all files are committed to git

**Assets not loading:**
- Ensure `styles/output.css` exists after build
- Check file paths are relative (not absolute)

**Resume not downloading:**
- Verify PDF exists at `assets/resume/MayurZala_Resume.pdf`
- Check file isn't gitignored

---

**Live Site:** Check Vercel dashboard for deployment URL
