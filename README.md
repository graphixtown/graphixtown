# GFX Town Website

A modern, professional graphics design website built for GitHub Pages deployment with JSON-based content management.

## 🚀 Features

- **Static Site**: Optimized for GitHub Pages hosting
- **JSON Content Management**: Easy content updates without database
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Email Integration**: Contact form uses mailto functionality
- **Instagram Integration**: Social media presence
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## 🏗️ How to Deploy to GitHub Pages

### Step 1: Download Your Code
1. Click the three dots menu in your Replit project
2. Select "Download as ZIP"
3. Extract the ZIP file to your computer

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" (green button)
3. Name it: `gfx-town-website` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't add README, .gitignore, or license (we already have them)
6. Click "Create repository"

### Step 3: Upload Your Code
1. Click "uploading an existing file" link on the new repo page
2. Drag and drop ALL files from your extracted folder
3. Or use "choose your files" to select everything
4. Write commit message: "Initial website setup"
5. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository Settings tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment will start automatically

### Step 5: Access Your Website
- Your website will be available at: `https://yourusername.github.io/gfx-town-website`
- First deployment takes 5-10 minutes
- Future updates deploy automatically when you edit files

## ✏️ How to Edit Content

All website content is stored in JSON files that you can edit directly on GitHub:

### Edit Company Statistics
**File**: `client/public/config/stats.json`
```json
[
  {
    "value": "500+",
    "label": "Projects Completed",
    "color": "text-primary"
  }
]
```

### Edit Services
**File**: `client/public/config/services.json`
```json
[
  {
    "title": "Logo Design",
    "description": "Professional logo design...",
    "icon": "palette",
    "features": ["Custom Design", "Multiple Concepts"],
    "price": "$299+",
    "color": "text-primary"
  }
]
```

### Edit Portfolio Items
**File**: `client/public/config/portfolio.json`
```json
[
  {
    "title": "Tech Startup Logo",
    "description": "Modern logo design...",
    "category": "graphics",
    "imageUrl": "https://your-image-url.com/image.jpg",
    "featured": true
  }
]
```

### Edit Contact Information
**File**: `client/public/config/contact.json`
```json
{
  "email": "workforgraphixtown@gmail.com",
  "responseTime": "We typically respond within 24 hours.",
  "availability": "Currently Available"
}
```

## 🔧 Making Changes
1. Navigate to the file you want to edit on GitHub
2. Click the pencil icon (Edit this file)
3. Make your changes
4. Scroll down and click "Commit changes"
5. Your website updates automatically within 2-3 minutes!

## 📁 Project Structure

