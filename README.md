# Alejandra Beach House Website

A professional, responsive website for a beach house guest house with spectacular ocean views.

## Features Implemented

### ✅ Hero Section
- Spectacular background with overlay effect
- Attractive title and subtitle
- Key features with icons (sunrise views, beach access, family-friendly, WiFi, restaurants)
- Call-to-action buttons

### ✅ Professional Photo Gallery
- Organized by categories: Exterior, Bedrooms, Kitchen, Living Areas, Terrace/Pool, Beach, Parking
- Filterable tabs for easy navigation
- Modal view with navigation controls
- Responsive grid layout

### ✅ Technical Details
- Capacity: 4 people, 2 bedrooms, 3 bathrooms
- Amenities: Fully furnished, equipped kitchen, AC, parking, gardens
- Pricing for high/low seasons
- Special promotions and discounts

### ✅ Reviews Section
- Star ratings display
- Guest comments with initials for privacy
- Overall rating calculation
- Professional review card layout

### ✅ Location & Map
- Interactive map with approximate location
- Distance information to key areas
- Area highlights and attractions
- Privacy-focused location display

### ✅ Contact & Booking
- Direct WhatsApp, Telegram, and Facebook integration
- Comprehensive booking request form
- Form validation and error handling
- Social media integration

## File Structure

```
alejandra_guest_house/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/
│       └── gallery/        # Gallery images folder
├── README.md               # This file
└── .gitignore             # Git ignore file
```

## Setup Instructions

### 1. Add Your Images
Replace the placeholder images in `assets/images/gallery/` with your actual photos:

**Required Images:**
- `exterior-1.jpg`, `exterior-2.jpg`, `exterior-3.jpg` - House exterior and gardens
- `bedroom-1.jpg`, `bedroom-2.jpg` - Bedroom photos
- `kitchen-1.jpg`, `kitchen-2.jpg` - Kitchen and dining areas
- `living-1.jpg`, `living-2.jpg` - Living room and common areas
- `terrace-1.jpg`, `pool-1.jpg` - Terrace and pool areas
- `beach-1.jpg`, `beach-2.jpg` - Beach access and surroundings
- `parking-1.jpg` - Parking/garage area

**Image Guidelines:**
- Use high-quality images (at least 1200px wide)
- Optimize for web (compress to reduce file size)
- Use consistent aspect ratios for better layout

### 2. Update Contact Information
In `assets/js/script.js`, update the contact details:

```javascript
// Line ~280: Update WhatsApp number
const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;

// In index.html, update social media links:
- WhatsApp: href="https://wa.me/YOUR_PHONE_NUMBER"
- Telegram: href="https://t.me/YOUR_USERNAME"
- Facebook: href="https://facebook.com/YOUR_PAGE"
- Email: info@yourdomain.com
```

### 3. Update Location Information
In `assets/js/script.js`, update the map coordinates:

```javascript
// Lines ~115-116: Update with your approximate coordinates
const lat = YOUR_LATITUDE;  // Example: 18.4861
const lng = YOUR_LONGITUDE; // Example: -69.9312
```

### 4. Customize Content
Update the following content in `index.html`:
- Property name and descriptions
- Pricing information
- Guest reviews
- Distance information
- Special promotions

### 5. Hero Background Image
Replace the CSS gradient background with your spectacular ocean view photo:

In `assets/css/styles.css`, around line 120:
```css
.hero-background {
    /* Replace this with your actual image */
    background-image: url('assets/images/hero-background.jpg');
}
```

## Deployment Options

### Option 1: Simple Hosting
1. Upload all files to your web hosting provider
2. Ensure the folder structure is maintained
3. Your site will be accessible at your domain

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `yourusername.github.io/repository-name`

### Option 3: Netlify (Free)
1. Create a Netlify account
2. Drag and drop the entire folder to Netlify
3. Your site will be automatically deployed with a free subdomain

## Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Interactive functionality
- **Leaflet.js** - Interactive maps
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy loading** for images
- **Responsive design** for all devices
- **Optimized animations** with CSS transforms
- **Compressed assets** for faster loading
- **SEO-friendly** structure and meta tags

## Customization Tips

### Colors
The main color scheme uses:
- Primary Blue: `#2c5aa0`
- Accent Red: `#ff6b6b`
- Gold: `#ffd700`

Update these in the CSS file for brand consistency.

### Fonts
Currently using Poppins font family. To change:
1. Update the Google Fonts import in `index.html`
2. Update the `font-family` in `assets/css/styles.css`

### Sections
You can easily add, remove, or modify sections by:
1. Updating the HTML structure in `index.html`
2. Adding corresponding styles in `assets/css/styles.css`
3. Adding JavaScript functionality in `assets/js/script.js` if needed

## Support

For technical support or customization requests, please contact the developer.

## License

This website template is provided for use with Alejandra Beach House. All images and content should be replaced with your actual property information.