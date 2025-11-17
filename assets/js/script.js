// Global Variables
let currentImageIndex = 0;
let galleryImages = [];
let map;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeGallery();
    initializeMap();
    initializeModals();
    initializeBookingForm();
    initializeReviewForm();
    initializeScrollAnimations();
    setMinDate();
});

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Gallery Functions
function initializeGallery() {
    // Sample gallery data - replace with your actual images
    const galleryData = [
        { category: 'exterior', src: 'assets/images/gallery/photo_2025-11-14_18-26-30.jpg', alt: 'House Exterior View' },
        { category: 'exterior', src: 'assets/images/gallery/photo_2025-11-14_18-26-30.jpg', alt: 'Garden Area' },
        { category: 'exterior', src: 'assets/images/gallery/photo_2025-11-14_18-26-30.jpg', alt: 'House Surroundings' },
        { category: 'rooms', src: 'assets/images/gallery/photo_2025-11-14_18-26-53.jpg', alt: 'Master Bedroom' },
        { category: 'rooms', src: 'assets/images/gallery/photo_2025-11-14_18-26-53.jpg', alt: 'Second Bedroom' },
        { category: 'kitchen', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Modern Kitchen' },
        { category: 'kitchen', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Kitchen Dining Area' },
        { category: 'living', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Living Room' },
        { category: 'living', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Common Area' },
        { category: 'terrace', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Ocean View Terrace' },
        { category: 'terrace', src: 'assets/images/gallery/photo_2025-11-14_18-26-57.jpg', alt: 'Pool Area' },
        { category: 'beach', src: 'assets/images/gallery/photo_2025-11-14_18-27-00.jpg', alt: 'Beach Access' },
        { category: 'beach', src: 'assets/images/gallery/photo_2025-11-14_18-27-00.jpg', alt: 'Nearby Beach' },
        { category: 'garage', src: 'assets/images/gallery/photo_2025-11-14_18-27-03.jpg', alt: 'Parking Area' }
    ];

    galleryImages = galleryData;
    populateGallery(galleryImages);
    setupGalleryTabs();
}

function populateGallery(images) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = image.category;
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 300\\"><rect width=\\"400\\" height=\\"300\\" fill=\\"%23f0f0f0\\"/><text x=\\"200\\" y=\\"150\\" text-anchor=\\"middle\\" dy=\\".3em\\" fill=\\"%23999\\">${image.alt}</text></svg>'">
            <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
            </div>
        `;

        galleryItem.addEventListener('click', function() {
            openGalleryModal(index);
        });

        galleryGrid.appendChild(galleryItem);
    });
}

function setupGalleryTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery
            const category = this.dataset.category;
            filterGallery(category);
        });
    });
}

function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

// Map Functions
function initializeMap() {
    // Initialize map with approximate location (for privacy)
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Approximate coordinates (replace with your approximate location)
    const lat = 21.11263938481885; // Updated coordinates for the beach house location
    const lng = -75.84511401516896;

    try {
        map = L.map('map', {
            center: [lat, lng],
            zoom: 12,
            zoomControl: true,
            scrollWheelZoom: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add marker for approximate location
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup('<strong>Alejandra Beach House</strong><br>Approximate location for privacy');

        // Add circle to show general area
        L.circle([lat, lng], {
            color: '#2c5aa0',
            fillColor: '#2c5aa0',
            fillOpacity: 0.2,
            radius: 1000
        }).addTo(map);

    } catch (error) {
        console.error('Error initializing map:', error);
        mapContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Map loading...</p>';
    }
}

// Modal Functions
function initializeModals() {
    const bookingModal = document.getElementById('bookingModal');
    const galleryModal = document.getElementById('galleryModal');
    const closeBtns = document.querySelectorAll('.close');
    
    // Close modals when clicking close button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal();
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === bookingModal || e.target === galleryModal) {
            closeModal();
        }
    });

    // Setup gallery navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            navigateGallery('prev');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            navigateGallery('next');
        });
    }

    // Keyboard navigation for gallery
    document.addEventListener('keydown', function(e) {
        const galleryModal = document.getElementById('galleryModal');
        if (galleryModal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                navigateGallery('prev');
            } else if (e.key === 'ArrowRight') {
                navigateGallery('next');
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
}

function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function openGalleryModal(index) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        currentImageIndex = index;
        modalImage.src = galleryImages[index].src;
        modalImage.alt = galleryImages[index].alt;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

function navigateGallery(direction) {
    if (direction === 'prev') {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    } else {
        currentImageIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = galleryImages[currentImageIndex].src;
        modalImage.alt = galleryImages[currentImageIndex].alt;
    }
}

// Form Functions
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleBookingSubmission();
    });

    // Date validation
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    if (checkinInput) {
        checkinInput.addEventListener('change', function() {
            if (checkoutInput) {
                const checkinDate = new Date(this.value);
                const nextDay = new Date(checkinDate);
                nextDay.setDate(nextDay.getDate() + 1);
                checkoutInput.min = nextDay.toISOString().split('T')[0];
            }
        });
    }
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput) {
        checkinInput.min = today;
    }
    if (checkoutInput) {
        checkoutInput.min = today;
    }
}

function handleBookingSubmission() {
    const formData = new FormData(document.getElementById('bookingForm'));
    const bookingData = {
        name: formData.get('name'),
        email: formData.get('email'),
        checkin: formData.get('checkin'),
        checkout: formData.get('checkout'),
        guests: formData.get('guests'),
        message: formData.get('message') || 'No special requests'
    };

    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.checkin || !bookingData.checkout || !bookingData.guests) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(bookingData);
    const whatsappUrl = `https://wa.me/+5352454116?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    showNotification('Redirecting to WhatsApp to send your booking request...', 'success');
    
    // Open WhatsApp after a brief delay
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        closeModal();
        document.getElementById('bookingForm').reset();
    }, 1500);
}

function createWhatsAppMessage(data) {
    return `🏖️ *BOOKING REQUEST - Alejandra Guest House*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📅 *Check-in:* ${data.checkin}
📅 *Check-out:* ${data.checkout}
👥 *Guests:* ${data.guests}

💬 *Special Requests:*
${data.message}

Thank you for choosing Alejandra Beach House! We'll get back to you soon with availability and pricing details.`;
}

// Review Form Functions
function initializeReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewText = document.getElementById('reviewText');
    const charCount = document.getElementById('charCount');
    const reviewDate = document.getElementById('reviewDate');
    
    if (!reviewForm || !reviewText || !charCount) return;

    // Set current date as default
    if (reviewDate) {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        reviewDate.value = formattedDate;
    }

    // Character counter
    reviewText.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCount.textContent = currentLength;
        
        // Add warning class if approaching limit
        const charCountElement = charCount.parentElement;
        if (currentLength > 450) {
            charCountElement.classList.add('warning');
        } else {
            charCountElement.classList.remove('warning');
        }
    });

    // Form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleReviewSubmission();
    });

    // Star rating interaction
    setupStarRating();
}

function setupStarRating() {
    const starLabels = document.querySelectorAll('.star-label');
    const starInputs = document.querySelectorAll('.star-rating input');
    
    starLabels.forEach((label, index) => {
        label.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });
        
        label.addEventListener('click', function() {
            const ratingValue = this.previousElementSibling.value;
            selectStars(parseInt(ratingValue));
        });
    });
    
    // Reset highlighting on mouse leave
    document.querySelector('.star-rating').addEventListener('mouseleave', function() {
        const checkedInput = document.querySelector('.star-rating input:checked');
        if (checkedInput) {
            selectStars(checkedInput.value);
        } else {
            resetStars();
        }
    });
}

function highlightStars(rating) {
    const starLabels = document.querySelectorAll('.star-label');
    starLabels.forEach((label, index) => {
        if (index < rating) {
            label.style.color = '#F18F01';
        } else {
            label.style.color = '#ddd';
        }
    });
}

function selectStars(rating) {
    const starLabels = document.querySelectorAll('.star-label');
    starLabels.forEach((label, index) => {
        if (index < rating) {
            label.style.color = '#F18F01';
        } else {
            label.style.color = '#ddd';
        }
    });
}

function resetStars() {
    const starLabels = document.querySelectorAll('.star-label');
    starLabels.forEach(label => {
        label.style.color = '#ddd';
    });
}

function handleReviewSubmission() {
    const formData = new FormData(document.getElementById('reviewForm'));
    const reviewData = {
        name: formData.get('reviewerName'),
        date: formData.get('reviewDate'),
        rating: formData.get('rating'),
        text: formData.get('reviewText')
    };

    // Validate required fields
    if (!reviewData.name || !reviewData.date || !reviewData.rating || !reviewData.text) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Validate text length
    if (reviewData.text.length > 500) {
        showNotification('Review text must be 500 characters or less.', 'error');
        return;
    }

    // Add review to the page
    addReviewToPage(reviewData);
    
    // Show success message
    showNotification('Thank you for your review! It has been added successfully.', 'success');
    
    // Reset form
    document.getElementById('reviewForm').reset();
    document.getElementById('charCount').textContent = '0';
    resetStars();
}

function addReviewToPage(reviewData) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    const newReview = document.createElement('div');
    newReview.className = 'review-card';
    
    // Get initials from name
    const initials = reviewData.name.split(' ').map(word => word.charAt(0)).join('.') + '.';
    
    // Format date
    const date = new Date(reviewData.date);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    
    // Create stars HTML
    const starsHTML = Array.from({length: 5}, (_, i) => {
        const starClass = i < reviewData.rating ? 'fas fa-star' : 'far fa-star';
        return `<i class="${starClass}"></i>`;
    }).join('');
    
    newReview.innerHTML = `
        <div class="review-header">
            <div class="reviewer-info">
                <h4>${initials}</h4>
                <p>${formattedDate}</p>
            </div>
            <div class="review-rating">
                ${starsHTML}
            </div>
        </div>
        <p class="review-text">"${reviewData.text}"</p>
    `;
    
    // Add animation
    newReview.style.opacity = '0';
    newReview.style.transform = 'translateY(20px)';
    
    reviewsGrid.appendChild(newReview);
    
    // Animate in
    setTimeout(() => {
        newReview.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        newReview.style.opacity = '1';
        newReview.style.transform = 'translateY(0)';
    }, 100);
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation
    const animatedElements = document.querySelectorAll('.detail-card, .review-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOutRight {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(100px);
    }
}
`;
document.head.appendChild(style);

// Window load event
window.addEventListener('load', function() {
    // Hide loading indicators if any
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => {
        el.style.display = 'none';
    });
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // You can add a placeholder image here if needed
    }
}, true);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openBookingModal = openBookingModal;
window.closeModal = closeModal;