// Apply configuration to the site
document.addEventListener('DOMContentLoaded', function() {
    // Apply basic site information
    document.title = siteConfig.siteTitle;
    document.getElementById('page-title').textContent = siteConfig.siteTitle;
    
    // Apply header/navigation
    document.getElementById('site-logo').textContent = siteConfig.logoText;
    
    const navMenu = document.getElementById('nav-menu');
    siteConfig.navigationLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        navMenu.appendChild(li);
    });
    
    // Apply hero section
    document.getElementById('hero-title').textContent = siteConfig.heroTitle;
    document.getElementById('hero-subtitle').textContent = siteConfig.heroSubtitle;
    
    const ctaButton = document.getElementById('cta-button');
    ctaButton.textContent = siteConfig.ctaButtonText;
    ctaButton.href = siteConfig.ctaButtonUrl;
    
    // Apply features section
    const featuresContainer = document.getElementById('features-container');
    siteConfig.features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        
        const title = document.createElement('h3');
        title.textContent = feature.title;
        
        const description = document.createElement('p');
        description.textContent = feature.description;
        
        featureCard.appendChild(title);
        featureCard.appendChild(description);
        featuresContainer.appendChild(featureCard);
    });
    
    // Apply footer
    document.getElementById('footer-text').innerHTML = siteConfig.footerText;
    
    // Apply theme customization
    const root = document.documentElement;
    root.style.setProperty('--primary-color', siteConfig.theme.primaryColor);
    root.style.setProperty('--secondary-color', siteConfig.theme.secondaryColor);
    root.style.setProperty('--accent-color', siteConfig.theme.accentColor);
    root.style.setProperty('--text-color', siteConfig.theme.textColor);
    root.style.setProperty('--light-text-color', siteConfig.theme.lightTextColor);
    root.style.setProperty('--card-bg-color', siteConfig.theme.cardBgColor);
    root.style.setProperty('--main-font', siteConfig.theme.mainFont);
    root.style.setProperty('--heading-font', siteConfig.theme.headingFont);
});