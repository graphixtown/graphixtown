# Deployment Guide - Pure HTML Website

## 🚀 Quick GitHub Pages Setup

### Step 1: Create Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" 
3. Name it `gfx-town-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files
**Option A: Drag & Drop (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag all files from the `static-website` folder (including the `data/` folder)
3. Add commit message: "Initial website upload"
4. Click "Commit changes"

**Important**: Make sure to upload the entire `data/` folder with all JSON files!

**Option B: Git Commands**
```bash
git clone https://github.com/yourusername/gfx-town-portfolio.git
cd gfx-town-portfolio
# Copy all files from static-website folder here
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Wait 2-5 minutes for deployment

### Step 4: Access Your Website
Your site will be available at:
```
https://yourusername.github.io/repository-name
```

---

## 🌐 Alternative Hosting Options

### Netlify (Recommended for beginners)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account
3. Click "New site from Git"
4. Choose your repository
5. Deploy settings: Leave defaults
6. Click "Deploy site"
7. Get custom URL like `amazing-site-123.netlify.app`

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Click "Deploy"
5. Get URL like `gfx-town.vercel.app`

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login`
3. Run `firebase init hosting`
4. Choose your files directory
5. Run `firebase deploy`

---

## 🔧 Custom Domain Setup

### For GitHub Pages:
1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Create a `CNAME` file with your domain:
   ```
   www.yourdomain.com
   ```
3. In your domain registrar, add DNS records:
   - Type: CNAME
   - Name: www
   - Value: yourusername.github.io

### For Netlify:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

---

## 📊 Performance Optimization

### Before Deployment:
- [x] Minify CSS (optional - file is already optimized)
- [x] Optimize images (using Unsplash CDN)
- [x] Enable gzip compression (automatic on most hosts)
- [x] Add proper meta tags (already included)

### After Deployment:
1. Test on [PageSpeed Insights](https://pagespeed.web.dev)
2. Test on [GTmetrix](https://gtmetrix.com)
3. Check mobile-friendliness on [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 🔍 SEO Setup

### Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website URL
3. Verify ownership via HTML file upload
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### Create Sitemap (optional):
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🛠 Troubleshooting

### Common Issues:

**404 Page Not Found**
- Check that `index.html` is in the root directory
- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for changes to propagate

**CSS/JS Not Loading**
- Check file paths are correct (case-sensitive)
- Ensure all files are uploaded to the same directory
- Check browser console for error messages

**Images Not Showing**
- Check image URLs are accessible
- Unsplash URLs should work automatically
- Test images in a new browser tab

**Mobile Menu Not Working**
- Check that `script.js` is loading properly
- Open browser console to check for JavaScript errors
- Ensure all HTML IDs match the JavaScript selectors

### Getting Help:
1. Check browser console for errors (F12 → Console)
2. Validate HTML: [validator.w3.org](https://validator.w3.org)
3. Test CSS: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

---

## 📱 Mobile Testing

Test your site on:
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Responsive Design Checker](https://responsivedesignchecker.com)
- Real devices (iPhone, Android)

---

## 🎯 Next Steps After Deployment

1. **Customize Content**: Edit JSON files in `data/` folder to update your content
2. **Social Media**: Share your new website
3. **Business Cards**: Add your website URL
4. **Google My Business**: Update your business profile
5. **Email Signature**: Include your website link
6. **Analytics**: Add Google Analytics (optional)

## 🔄 Updating Your Website

After deployment, you can easily update your website:

1. **Edit JSON Files**: Modify files in the `data/` folder:
   - `branding.json` - Company name, logo
   - `services.json` - Services and pricing
   - `portfolio.json` - Your work samples
   - `stats.json` - Company statistics
   - `contact.json` - Contact information

2. **Upload Changes**: Push updated JSON files to your repository

3. **Live Updates**: Changes appear on your website within minutes

See `CUSTOMIZATION.md` for detailed editing instructions!

---

## 💡 Pro Tips

- **Custom 404 Page**: Create `404.html` for better error handling
- **Favicon**: Add `favicon.ico` to your root directory
- **SSL Certificate**: Most hosts provide this automatically
- **Backup**: Keep a copy of your files locally
- **Updates**: Edit files and push changes to update your site

Your professional portfolio is now live! 🎉