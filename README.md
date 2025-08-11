# Customizable GitHub Pages Template

A modern, responsive website template designed specifically for GitHub Pages. Easily customize your project site without touching HTML code.

## Features

- 🎨 **Easy Customization**: Change colors, fonts, and content through a simple configuration file
- 📱 **Responsive Design**: Looks great on all devices from desktop to mobile
- 🚀 **GitHub Pages Ready**: Deploy with a few clicks to showcase your projects
- ✨ **Modern Design**: Clean, professional layout with smooth animations
- 🔧 **No Build Process**: Simple HTML, CSS, and JavaScript - no frameworks required

## Quick Start

1. **Fork or clone this repository**
2. **Customize the site by editing `config.js`**
3. **Deploy to GitHub Pages**

## Customization

All customization happens in the `config.js` file. You can change:

### Basic Information

```javascript
siteTitle: "Your GitHub Project",
siteDescription: "A customizable GitHub Pages template",
logoText: "Your Project",
```

### Navigation Links

```javascript
navigationLinks: [
    { text: "Home", url: "#" },
    { text: "Features", url: "#features" },
    { text: "Documentation", url: "#" },
    { text: "GitHub", url: "https://github.com/yourusername/yourrepo" }
],
```

### Hero Section

```javascript
heroTitle: "Welcome to Your GitHub Project",
heroSubtitle: "A customizable template for showcasing your GitHub projects",
ctaButtonText: "View on GitHub",
ctaButtonUrl: "https://github.com/yourusername/yourrepo",
```

### Features Section

```javascript
features: [
    {
        title: "Easy Customization",
        description: "Customize colors, fonts, and content through a simple configuration file without touching HTML."
    },
    // Add more features as needed
],
```

### Theme Colors and Fonts

```javascript
theme: {
    primaryColor: "#333",
    secondaryColor: "#f4f4f4",
    accentColor: "#4CAF50",
    textColor: "#333",
    lightTextColor: "#fff",
    cardBgColor: "#f9f9f9",
    mainFont: "'Arial', sans-serif",
    headingFont: "'Arial', sans-serif"
}
```

## Deploying to GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Select the branch you want to deploy (usually `main` or `master`)
5. Click "Save"

Your site will be available at `https://yourusername.github.io/yourrepo/`

## Advanced Customization

If you need more advanced customization:

- Edit `styles.css` to change the styling beyond what's available in the configuration
- Modify `index.html` to change the structure of the page
- Edit `main.js` to add more dynamic functionality

## License

This template is released under the MIT License. Feel free to use it for any project.

## Credits

Created with ❤️ for the GitHub community.