# Alejandra Beach House - Customization Guide

## Quick Customization Checklist

### 📸 Images to Replace
1. **Hero Background**: Add `assets/images/hero-background.jpg` (1920x1080 recommended)
2. **Gallery Images**: Replace all images in `assets/images/gallery/`:
   - `exterior-1.jpg`, `exterior-2.jpg`, `exterior-3.jpg`
   - `bedroom-1.jpg`, `bedroom-2.jpg`
   - `kitchen-1.jpg`, `kitchen-2.jpg`
   - `living-1.jpg`, `living-2.jpg`
   - `terrace-1.jpg`, `pool-1.jpg`
   - `beach-1.jpg`, `beach-2.jpg`
   - `parking-1.jpg`

### 🎨 Branding & Colors
Update these in `assets/css/styles.css`:
- Primary color: `#2c5aa0` (ocean blue)
- Accent color: `#ff6b6b` (coral)
- Gold accent: `#ffd700`

### 📱 Contact Information
Update in `assets/js/script.js`:
```javascript
// Line ~280: WhatsApp number
const whatsappUrl = `https://wa.me/+1234567890...`;
```

Update in `index.html`:
```html
<!-- Social media links -->
<a href="https://wa.me/+1234567890">WhatsApp</a>
<a href="https://t.me/yourusername">Telegram</a>
<a href="https://facebook.com/yourpage">Facebook</a>

<!-- Email -->
<p>info@alejandraguesthouse.com</p>
```

### 🗺️ Location Settings
Update in `assets/js/script.js` (lines 115-116):
```javascript
const lat = 18.4861; // Your latitude
const lng = -69.9312; // Your longitude
```

### 💰 Pricing
Update in `index.html` around line 180:
```html
<p class="price">$120/night</p> <!-- High season -->
<p class="price">$85/night</p>  <!-- Low season -->
```

### 🏠 Property Details
Update capacity, rooms, amenities in the HTML amenities section.

### ⭐ Reviews
Add real guest reviews in the reviews section with initials only.

## Testing Your Website

1. Open `index.html` in a web browser
2. Test all navigation links
3. Try the photo gallery filters
4. Test the booking form
5. Check mobile responsiveness
6. Verify map functionality

## Deployment Ready!

Your website includes:
✅ Responsive design for all devices
✅ Professional photo gallery
✅ Interactive map
✅ Contact forms with social media integration
✅ SEO-optimized structure
✅ Fast loading with optimized code
✅ Modern, clean design
✅ Accessibility features

## Next Steps

1. **Add your real images** to the gallery folder
2. **Update contact information** with your actual details
3. **Customize the content** to match your property
4. **Test thoroughly** on different devices
5. **Deploy** to your web hosting provider

The website is now ready for production use!