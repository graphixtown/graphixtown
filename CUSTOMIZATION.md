# JSON Customization Guide

Your website now supports easy customization through JSON files! All content can be updated by editing the JSON files in the `data/` folder - no code changes needed.

## 📁 File Structure

```
static-website/
├── data/
│   ├── branding.json     # Logo, company name, social media
│   ├── services.json     # Services offered with pricing
│   ├── portfolio.json    # Portfolio items with images
│   ├── stats.json        # Company statistics
│   └── contact.json      # Contact information
├── index.html            # Main website file
├── styles.css            # All styling
└── script.js             # Loads JSON data automatically
```

## 🎨 Branding (`data/branding.json`)

Control your brand identity:

```json
{
  "logo": {
    "icon": "Palette",           // SVG icon name (currently decorative)
    "text": "Your Company Name", // Company name in logo/title
    "showIcon": true            // Show/hide icon next to text
  },
  "socialMedia": {
    "instagram": {
      "url": "https://www.instagram.com/yourhandle/",
      "icon": "Instagram"       // Icon name (currently decorative)
    }
  }
}
```

## 💼 Services (`data/services.json`)

Define your service offerings:

```json
[
  {
    "title": "Service Name",
    "description": "Detailed description of what you offer",
    "icon": "🎨",              // Emoji or icon
    "features": [              // List of features/benefits
      "Feature 1",
      "Feature 2", 
      "Feature 3"
    ],
    "price": "$299+",          // Starting price
    "color": "text-primary"    // Color theme (text-primary, text-secondary, text-accent)
  }
]
```

**Available Color Options:**
- `text-primary` - Purple theme
- `text-secondary` - Pink theme  
- `text-accent` - Blue theme

## 🖼️ Portfolio (`data/portfolio.json`)

Showcase your work:

```json
[
  {
    "title": "Project Title",
    "description": "Brief project description",
    "category": "graphics",        // Category for filtering
    "imageUrl": "https://...",     // Full URL to project image
    "featured": true              // Show in featured section
  }
]
```

**Available Categories:**
- `graphics` - Graphic design work
- `video` - Video/motion graphics
- `motion` - Animations
- `all` - Shows in all filters

**Image Requirements:**
- Use high-quality images (minimum 600x400px)
- Supported formats: JPG, PNG, WebP
- Recommended: Use image CDNs like Unsplash, Cloudinary, or ImageKit
- Aspect ratio: 3:2 works best (600x400, 900x600, etc.)

## 📊 Statistics (`data/stats.json`)

Display company achievements:

```json
[
  {
    "value": "500+",           // Number or text to display
    "label": "Projects Done",  // Description below the number
    "color": "text-primary"    // Color theme
  }
]
```

## 📞 Contact (`data/contact.json`)

Update contact information:

```json
{
  "email": "your@email.com",
  "responseTime": "We respond within 24 hours.",
  "availability": "Currently Available"
}
```

The email address is used for:
- Contact form submissions (opens user's email client)
- Display in contact section
- Footer links

## 🚀 Making Changes

### Step 1: Edit JSON Files
1. Open any `.json` file in the `data/` folder
2. Edit the content (keep the same structure)
3. Save the file

### Step 2: Upload to GitHub Pages
1. Upload your updated files to your GitHub repository
2. Changes will appear on your live site within minutes

### Step 3: Test Locally (Optional)
Open `index.html` in your browser to test changes before uploading.

## 💡 Tips & Best Practices

### Content Writing
- **Services**: Focus on benefits, not just features
- **Portfolio**: Use action words in titles ("Created", "Designed", "Developed")
- **Stats**: Use impressive but honest numbers
- **Contact**: Be clear about response times and availability

### Images
- **High Quality**: Use professional, high-resolution images
- **Consistent Style**: Maintain similar lighting/style across portfolio
- **Fast Loading**: Optimize images for web (under 500KB each)
- **Copyright**: Only use images you own or have license to use

### JSON Format Rules
- **Quotes**: Always use double quotes `"` around text
- **Commas**: Add commas after each item except the last one
- **Brackets**: Don't forget opening `[` and closing `]` brackets for arrays
- **Validation**: Use [JSONLint](https://jsonlint.com/) to check for errors

## 🔧 Advanced Customization

### Adding New Services
```json
{
  "title": "New Service",
  "description": "What this service includes",
  "icon": "⭐",
  "features": [
    "Feature 1",
    "Feature 2", 
    "Feature 3",
    "Feature 4"
  ],
  "price": "$X+",
  "color": "text-primary"
}
```

### Adding New Portfolio Items
```json
{
  "title": "New Project",
  "description": "What you created",
  "category": "graphics",
  "imageUrl": "https://your-image-url.com/image.jpg",
  "featured": true
}
```

### Custom Categories
To add new portfolio categories:
1. Add items with your custom category name
2. The filter buttons will automatically update
3. Use lowercase, single words for categories

## ⚠️ Common Issues

### JSON Syntax Errors
**Problem**: Website shows "Loading..." forever
**Solution**: Check your JSON syntax at [JSONLint](https://jsonlint.com/)

### Images Not Loading
**Problem**: Portfolio images don't appear
**Solution**: 
- Check image URLs are accessible
- Use direct image links, not page links
- Test URLs in a new browser tab

### Content Not Updating
**Problem**: Changes don't appear on live site
**Solution**:
- Clear browser cache (Ctrl+F5)
- Wait 5-10 minutes for GitHub Pages to update
- Check if JSON file was uploaded correctly

## 🎯 Content Suggestions

### Services Examples
- Logo Design & Branding
- Website Design & Development  
- Social Media Graphics
- Print Design (Flyers, Business Cards)
- Video Editing & Motion Graphics
- Brand Identity Packages
- UI/UX Design

### Portfolio Categories
- `branding` - Logos and brand identity
- `web` - Website designs
- `print` - Flyers, business cards, posters
- `social` - Social media graphics
- `packaging` - Product packaging design

### Professional Stats Ideas
- Projects Completed
- Happy Clients
- Years in Business
- Awards Won
- Team Members
- Countries Served
- Response Time
- Satisfaction Rate

---

## 🔄 Backup & Version Control

Always keep backup copies of your JSON files before making major changes. Consider using:
- Google Drive or Dropbox for backups
- Git version control for tracking changes
- Local copies on your computer

Your website will automatically load the latest JSON data every time someone visits! 🎉