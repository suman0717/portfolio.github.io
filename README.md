# Suman Kumar Chandan - Portfolio (Static HTML Version)

A professional portfolio website built with pure HTML, CSS, and JavaScript - **no build tools or frameworks required!**

## 🚀 Quick Start

1. **Download all files** from this folder
2. **Open `index.html`** in your web browser
3. That's it! Your portfolio is ready to view

## 📁 Files Included

- `index.html` - Main HTML file with all content structure
- `styles.css` - Complete styling with dark/light theme support
- `script.js` - All interactive functionality
- `data.js` - Portfolio data (easy to update)
- `profile.png` - Your profile image
- `README.md` - This file

## ✨ Features

- ✅ **No Build Required** - Just open in browser
- ✅ **Dark/Light Theme** - Toggle with persistent preference
- ✅ **Fully Responsive** - Works on all devices
- ✅ **Search & Filter** - Find projects by keywords and tags
- ✅ **SEO Optimized** - Meta tags for search engines
- ✅ **Fast Loading** - Pure HTML/CSS/JS, no dependencies
- ✅ **Easy to Customize** - Simple data file structure

## 🎨 Customization

### Update Personal Information

Edit `data.js` to change:
- Skills and expertise
- Work experience
- Projects
- Available filter tags

### Update Contact Details

Edit the personal information in `index.html`:
- Email address
- Phone number
- LinkedIn URL
- Location

### Add Your Resume

Place your resume PDF file in the same folder and name it `resume.pdf`. The "Download Resume" button will automatically work.

### Change Theme Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3b82f6; /* Change this to your preferred color */
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files from this folder
3. Go to Settings → Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Free)

1. Go to [Netlify](https://netlify.com)
2. Drag and drop this folder
3. Your site is live instantly!
4. Get a custom domain or use the free Netlify subdomain

### Option 3: Vercel (Free)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click
4. Automatic HTTPS and global CDN

### Option 4: Any Web Hosting

Upload all files to any web hosting service via FTP:
- Hostinger
- Bluehost
- GoDaddy
- SiteGround
- Or any other hosting provider

Just upload the files to the `public_html` or `www` folder and you're done!

## 📝 How to Update Content

### Add a New Project

1. Open `data.js`
2. Add a new object to the `projects` array:

```javascript
{
    name: "Your Project Name",
    description: "Brief description of the project",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
    ],
    tags: ["Mobile", "LCNC", "Cloud"]
}
```

### Add a New Skill Category

1. Open `data.js`
2. Add a new object to the `skills` array:

```javascript
{
    category: "New Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Update Work Experience

1. Open `data.js`
2. Edit the `experience` array with your job details

## 🔧 Browser Compatibility

Works perfectly in:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Responsive

The portfolio automatically adapts to:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🎯 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta description and keywords
- ✅ Open Graph tags for social media
- ✅ Twitter Card support
- ✅ Proper heading hierarchy
- ✅ Alt text for images

## ⚡ Performance

- **No external dependencies** - Everything is self-contained
- **Minimal file size** - Fast loading on any connection
- **Optimized CSS** - Efficient styling with CSS variables
- **Vanilla JavaScript** - No framework overhead

## 🆘 Troubleshooting

**Resume download doesn't work:**
- Make sure you have a file named `resume.pdf` in the same folder as `index.html`

**Images not showing:**
- Ensure `profile.png` is in the same folder as `index.html`
- Check that the file name matches exactly (case-sensitive)

**Theme toggle not working:**
- Make sure JavaScript is enabled in your browser
- Check browser console for any errors

**Search/Filter not working:**
- Ensure both `data.js` and `script.js` are loaded
- Check browser console for JavaScript errors

## 📄 License

This portfolio template is open source and free to use for personal projects.

## 👤 Contact

**Suman Kumar Chandan**  
Senior Consultant | Low-Code/No-Code Solutions Architect

- 📧 Email: suman0717@gmail.com
- 📱 Phone: +91-9636015057
- 💼 LinkedIn: [linkedin.com/in/suman-chandan-676b00b4](https://linkedin.com/in/suman-chandan-676b00b4/)

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
