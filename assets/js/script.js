// Global Variables
let currentImageIndex = 0;
let galleryImages = [];
let currentLanguage = "en";

// Translations
const translations = {
  en: {
    navHome: "Home",
    navGallery: "Gallery",
    navDetails: "Details",
    navReviews: "Reviews",
    navLocation: "Location",
    navContact: "Contact",
    heroTitle: "Costal Hillside House",
    heroSubtitle: "Your Beach Retreat",
    heroDescription:
      "Surrounded by hills • Nature, comfort and good vibes • A few minutes from the sea",
    feature1: "Sunrises facing the sea from your private terrace",
    feature2:
      "Ideal for a couple seeking romance, and families wanting comfort",
    feature3: "Access to the beach without long walks",
    feature4: "Close to restaurants and local activities",
    feature5: "Solar backup power",
    feature6: "Available for long-term stay",
    btnBook: "Book Now",
    btnGallery: "View Gallery",
    galleryTitle: "Photo Gallery",
    gallerySubtitle: "Discover the beauty of Alejandra Guest House",
    tabAll: "All Photos",
    tabExterior: "Exterior & Gardens",
    tabRooms: "Bedrooms",
    tabKitchen: "Kitchen",
    tabLiving: "Living Areas",
    tabTerrace: "Terrace & Pool",
    tabBeach: "Beach & Surroundings",
    tabParking: "Parking",
    detailsTitle: "House Details & Amenities",
    capacityTitle: "Capacity & Rooms",
    capacity: "Capacity: 4 people",
    bedrooms: "Bedrooms: 2",
    bathrooms: "Bathrooms: 3",
    amenitiesTitle: "Amenities",
    furnished: "Fully furnished",
    kitchen: "Equipped kitchen",
    ac: "Air conditioning",
    parking: "Parking available",
    gardens: "Beautiful gardens",
    noPets: "Pets not allowed",
    reviewsTitle: "Guest Reviews",
    locationTitle: "Location & Access",
    distancesTitle: "Distances & Access",
    cityCenter: "City Center: 15 minutes",
    beach: "Beach: 2 minutes walking",
    airport: "Airport: 45 minutes",
    restaurants: "Restaurants: 5 minutes",
    supermarket: "Supermarket: 10 minutes",
    hiking: "Hiking trails: On site",
    highlightsTitle: "Area Highlights",
    highlight1: "Ecological tourism opportunities",
    highlight2: "Historical interest sites nearby",
    highlight3: "Multiple pristine beaches",
    highlight4: "Local fishing village",
    highlight5: "Mountain hiking trails",
    highlight6: "Bird watching spots",
    mapNote: "Approximate location shown for privacy and security",
    contactTitle: "Contact & Booking",
    getInTouch: "Get in Touch",
    contactDesc:
      "Ready to book Your Beach Retreat? Contact us through any of these convenient methods:",
    bookingTitle: "Booking Request",
    labelName: "Full Name",
    labelEmail: "Email",
    labelCheckin: "Check-in Date",
    labelCheckout: "Check-out Date",
    labelGuests: "Number of Guests",
    selectGuests: "Select guests",
    guest1: "1 Guest",
    guest2: "2 Guests",
    guest3: "3 Guests",
    guest4: "4 Guests",
    labelMessage: "Special Requests (Optional)",
    btnSubmit: "Send Booking Request",
  },
  es: {
    navHome: "Inicio",
    navGallery: "Galería",
    navDetails: "Detalles",
    navReviews: "Reseñas",
    navLocation: "Ubicación",
    navContact: "Contacto",
    heroTitle: "Casa en Colina Costera",
    heroSubtitle: "Tu Refugio en la Playa",
    heroDescription:
      "Rodeada de colinas • Naturaleza, comodidad y buenas vibras • A minutos del mar",
    feature1: "Amaneceres frente al mar desde tu terraza privada",
    feature2:
      "Ideal para parejas en busca de romance y familias que desean confort",
    feature3: "Acceso a la playa sin largas caminatas",
    feature4: "Cerca de restaurantes y actividades locales",
    feature5: "Respaldo de energía solar",
    feature6: "Disponible para estancias prolongadas",
    btnBook: "Reservar Ahora",
    btnGallery: "Ver Galería",
    galleryTitle: "Galería de Fotos",
    gallerySubtitle: "Descubre la belleza de Alejandra Guest House",
    tabAll: "Todas las Fotos",
    tabExterior: "Exterior y Jardines",
    tabRooms: "Habitaciones",
    tabKitchen: "Cocina",
    tabLiving: "Áreas Comunes",
    tabTerrace: "Terraza y Piscina",
    tabBeach: "Playa y Alrededores",
    tabParking: "Estacionamiento",
    detailsTitle: "Detalles de la Casa y Comodidades",
    capacityTitle: "Capacidad y Habitaciones",
    capacity: "Capacidad: 4 personas",
    bedrooms: "Habitaciones: 2",
    bathrooms: "Baños: 3",
    amenitiesTitle: "Comodidades",
    furnished: "Completamente amueblada",
    kitchen: "Cocina equipada",
    ac: "Aire acondicionado",
    parking: "Estacionamiento disponible",
    gardens: "Hermosos jardines",
    noPets: "No se permiten mascotas",
    reviewsTitle: "Reseñas de Huéspedes",
    locationTitle: "Ubicación y Acceso",
    distancesTitle: "Distancias y Acceso",
    cityCenter: "Centro de la Ciudad: 15 minutos",
    beach: "Playa: 2 minutos caminando",
    airport: "Aeropuerto: 45 minutos",
    restaurants: "Restaurantes: 5 minutos",
    supermarket: "Supermercado: 10 minutos",
    hiking: "Senderos: En el lugar",
    highlightsTitle: "Destacados del Área",
    highlight1: "Oportunidades de turismo ecológico",
    highlight2: "Sitios históricos cercanos",
    highlight3: "Múltiples playas vírgenes",
    highlight4: "Pueblo pesquero local",
    highlight5: "Senderos de montaña",
    highlight6: "Lugares para observar aves",
    mapNote: "Ubicación aproximada mostrada por privacidad y seguridad",
    contactTitle: "Contacto y Reservas",
    getInTouch: "Ponte en Contacto",
    contactDesc:
      "¿Listo para reservar tu Refugio en la Playa? Contáctanos a través de estos métodos:",
    bookingTitle: "Solicitud de Reserva",
    labelName: "Nombre Completo",
    labelEmail: "Correo Electrónico",
    labelCheckin: "Fecha de Entrada",
    labelCheckout: "Fecha de Salida",
    labelGuests: "Número de Huéspedes",
    selectGuests: "Seleccionar huéspedes",
    guest1: "1 Huésped",
    guest2: "2 Huéspedes",
    guest3: "3 Huéspedes",
    guest4: "4 Huéspedes",
    labelMessage: "Solicitudes Especiales (Opcional)",
    btnSubmit: "Enviar Solicitud de Reserva",
  },
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeNavigation();
  initializeGallery();
  initializeMap();
  initializeModals();
  initializeBookingForm();
  initializeScrollAnimations();
  setMinDate();
  initializeLanguageToggle();
});

// Navigation Functions
function initializeNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Gallery Functions
function initializeGallery() {
  // Sample gallery data - replace with your actual images
  const galleryData = [
    {
      category: "exterior",
      src: "assets/images/exterior1.jpg",
      alt: "House Exterior View",
    },
    {
      category: "exterior",
      src: "assets/images/exterior2.jpg",
      alt: "Garden Area",
    },
    {
      category: "exterior",
      src: "assets/images/exterior3.jpg",
      alt: "House Surroundings",
    },
    {
      category: "exterior",
      src: "assets/images/exterior4.jpg",
      alt: "House Surroundings",
    },
    {
      category: "exterior",
      src: "assets/images/exterior5.jpg",
      alt: "House Surroundings",
    },
    {
      category: "exterior",
      src: "assets/images/exterior6.jpg",
      alt: "House Surroundings",
    },
    {
      category: "rooms",
      src: "assets/images/bedroom1.jpg",
      alt: "Master Bedroom",
    },
    {
      category: "rooms",
      src: "assets/images/bedroom2.jpg",
      alt: "Second Bedroom",
    },
    {
      category: "rooms",
      src: "assets/images/294213.jpg",
      alt: "Additional Bedroom",
    },
    {
      category: "kitchen",
      src: "assets/images/907796.png",
      alt: "Modern Kitchen",
    },
    {
      category: "kitchen",
      src: "assets/images/1377511.jpg",
      alt: "Kitchen Dining Area",
    },
    {
      category: "living",
      src: "assets/images/76995.jpg",
      alt: "Living Room",
    },
    {
      category: "exterior",
      src: "assets/images/photo_2025-11-14_18-26-30.jpg",
      alt: "House Exterior Detail",
    },
  ];

  galleryImages = galleryData;
  populateGallery(galleryImages);
  setupGalleryTabs();
}

function populateGallery(images) {
  const galleryGrid = document.querySelector(".gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  images.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.dataset.category = image.category;

    galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 300\\"><rect width=\\"400\\" height=\\"300\\" fill=\\"%23f0f0f0\\"/><text x=\\"200\\" y=\\"150\\" text-anchor=\\"middle\\" dy=\\".3em\\" fill=\\"%23999\\">${image.alt}</text></svg>'">
            <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
            </div>
        `;

    galleryItem.addEventListener("click", function () {
      openGalleryModal(index);
    });

    galleryGrid.appendChild(galleryItem);
  });
}

function setupGalleryTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Filter gallery
      const category = this.dataset.category;
      filterGallery(category);
    });
  });
}

function filterGallery(category) {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
      item.style.animation = "fadeInUp 0.5s ease";
    } else {
      item.style.display = "none";
    }
  });
}

// Map Functions
function initializeMap() {
  // Map is now a static image, no initialization needed
  // This function is kept for compatibility but doesn't do anything
  return;
}

// Modal Functions
function initializeModals() {
  const bookingModal = document.getElementById("bookingModal");
  const galleryModal = document.getElementById("galleryModal");
  const closeBtns = document.querySelectorAll(".close");

  // Close modals when clicking close button
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      closeModal();
    });
  });

  // Close modals when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === bookingModal || e.target === galleryModal) {
      closeModal();
    }
  });

  // Setup gallery navigation
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      navigateGallery("prev");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      navigateGallery("next");
    });
  }

  // Keyboard navigation for gallery
  document.addEventListener("keydown", function (e) {
    const galleryModal = document.getElementById("galleryModal");
    if (galleryModal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  });
}

function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function openGalleryModal(index) {
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");

  if (modal && modalImage) {
    currentImageIndex = index;
    modalImage.src = galleryImages[index].src;
    modalImage.alt = galleryImages[index].alt;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
  document.body.style.overflow = "auto";
}

function navigateGallery(direction) {
  if (direction === "prev") {
    currentImageIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
  } else {
    currentImageIndex =
      currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
  }

  const modalImage = document.getElementById("modalImage");
  if (modalImage) {
    modalImage.src = galleryImages[currentImageIndex].src;
    modalImage.alt = galleryImages[currentImageIndex].alt;
  }
}

// Form Functions
function initializeBookingForm() {
  const bookingForm = document.getElementById("bookingForm");
  if (!bookingForm) return;

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handleBookingSubmission();
  });

  // Date validation
  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");

  if (checkinInput) {
    checkinInput.addEventListener("change", function () {
      if (checkoutInput) {
        const checkinDate = new Date(this.value);
        const nextDay = new Date(checkinDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.min = nextDay.toISOString().split("T")[0];
      }
    });
  }
}

function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");

  if (checkinInput) {
    checkinInput.min = today;
  }
  if (checkoutInput) {
    checkoutInput.min = today;
  }
}

function handleBookingSubmission() {
  const formData = new FormData(document.getElementById("bookingForm"));
  const bookingData = {
    name: formData.get("name"),
    email: formData.get("email"),
    checkin: formData.get("checkin"),
    checkout: formData.get("checkout"),
    guests: formData.get("guests"),
    message: formData.get("message") || "No special requests",
  };

  // Validate required fields
  if (
    !bookingData.name ||
    !bookingData.email ||
    !bookingData.checkin ||
    !bookingData.checkout ||
    !bookingData.guests
  ) {
    showNotification("Please fill in all required fields.", "error");
    return;
  }

  // Create WhatsApp message
  const whatsappMessage = createWhatsAppMessage(bookingData);
  const whatsappUrl = `https://wa.me/+5352454116?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Show success message
  showNotification(
    "Redirecting to WhatsApp to send your booking request...",
    "success"
  );

  // Open WhatsApp after a brief delay
  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
    closeModal();
    document.getElementById("bookingForm").reset();
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

// Utility Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === "success"
            ? "#4CAF50"
            : type === "error"
            ? "#f44336"
            : "#2196F3"
        };
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
    notification.style.animation = "slideOutRight 0.3s ease";
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
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements with animation
  const animatedElements = document.querySelectorAll(
    ".detail-card, .review-card, .gallery-item"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Add CSS animations
const style = document.createElement("style");
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
window.addEventListener("load", function () {
  // Hide loading indicators if any
  const loadingElements = document.querySelectorAll(".loading");
  loadingElements.forEach((el) => {
    el.style.display = "none";
  });
});

// Error handling for images
document.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      console.warn("Image failed to load:", e.target.src);
      // You can add a placeholder image here if needed
    }
  },
  true
);

// Language Toggle Functions
function initializeLanguageToggle() {
  const languageBtn = document.getElementById("languageToggle");
  if (languageBtn) {
    languageBtn.addEventListener("click", toggleLanguage);
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  updateLanguage();
}

function updateLanguage() {
  const t = translations[currentLanguage];

  // Update language button
  document.querySelector(".lang-text").textContent =
    currentLanguage === "en" ? "ES" : "EN";

  // Navigation
  document.querySelectorAll(".nav-link")[0].textContent = t.navHome;
  document.querySelectorAll(".nav-link")[1].textContent = t.navGallery;
  document.querySelectorAll(".nav-link")[2].textContent = t.navDetails;
  document.querySelectorAll(".nav-link")[3].textContent = t.navReviews;
  document.querySelectorAll(".nav-link")[4].textContent = t.navLocation;
  document.querySelectorAll(".nav-link")[5].textContent = t.navContact;

  // Hero Section
  document.querySelector(".hero-title").textContent = t.heroTitle;
  document.querySelector(".hero-subtitle").textContent = t.heroSubtitle;
  document.querySelector(".hero-description").textContent = t.heroDescription;

  // Hero Features
  const features = document.querySelectorAll(".feature-item span");
  features[0].textContent = t.feature1;
  features[1].textContent = t.feature2;
  features[2].textContent = t.feature3;
  features[3].textContent = t.feature4;
  features[4].textContent = t.feature5;
  features[5].textContent = t.feature6;

  // Hero Buttons
  document.querySelectorAll(".hero-buttons button")[0].textContent = t.btnBook;
  document.querySelectorAll(".hero-buttons button")[1].textContent =
    t.btnGallery;

  // Gallery Section
  document.querySelectorAll(".section-title")[0].textContent = t.galleryTitle;
  document.querySelectorAll(".section-subtitle")[0].textContent =
    t.gallerySubtitle;

  // Gallery Tabs
  const tabs = document.querySelectorAll(".tab-button");
  tabs[0].textContent = t.tabAll;
  tabs[1].textContent = t.tabExterior;
  tabs[2].textContent = t.tabRooms;
  tabs[3].textContent = t.tabKitchen;
  tabs[4].textContent = t.tabLiving;
  tabs[5].textContent = t.tabTerrace;
  tabs[6].textContent = t.tabBeach;
  tabs[7].textContent = t.tabParking;

  // Details Section
  document.querySelectorAll(".section-title")[1].textContent = t.detailsTitle;
  document.querySelectorAll(".detail-card h3")[0].textContent = t.capacityTitle;
  document.querySelectorAll(".detail-card h3")[1].textContent =
    t.amenitiesTitle;

  // Capacity & Rooms
  const detailItems = document.querySelectorAll(".detail-item span");
  detailItems[0].textContent = t.capacity;
  detailItems[1].textContent = t.bedrooms;
  detailItems[2].textContent = t.bathrooms;
  detailItems[3].textContent = t.furnished;
  detailItems[4].textContent = t.kitchen;
  detailItems[5].textContent = t.ac;
  detailItems[6].textContent = t.parking;
  detailItems[7].textContent = t.gardens;
  detailItems[8].textContent = t.noPets;

  // Reviews Section
  document.querySelectorAll(".section-title")[2].textContent = t.reviewsTitle;

  // Location Section
  document.querySelectorAll(".section-title")[3].textContent = t.locationTitle;
  document.querySelector(".location-info h3:nth-of-type(1)").textContent =
    t.distancesTitle;

  // Distances
  const distances = document.querySelectorAll(".distance-item span");
  distances[0].textContent = t.cityCenter;
  distances[1].textContent = t.beach;
  distances[2].textContent = t.airport;
  distances[3].textContent = t.restaurants;
  distances[4].textContent = t.supermarket;
  distances[5].textContent = t.hiking;

  // Highlights
  document.querySelector(".location-info h3:nth-of-type(2)").textContent =
    t.highlightsTitle;
  const highlights = document.querySelectorAll(".highlights-list li");
  highlights[0].textContent = t.highlight1;
  highlights[1].textContent = t.highlight2;
  highlights[2].textContent = t.highlight3;
  highlights[3].textContent = t.highlight4;
  highlights[4].textContent = t.highlight5;
  highlights[5].textContent = t.highlight6;

  // Map Note
  const mapNote = document.querySelector(".map-note");
  mapNote.innerHTML = `<i class="fas fa-info-circle"></i> ${t.mapNote}`;

  // Contact Section
  document.querySelectorAll(".section-title")[4].textContent = t.contactTitle;
  document.querySelector(".contact-info h3").textContent = t.getInTouch;
  document.querySelector(".contact-info p").textContent = t.contactDesc;

  // Booking Form
  document.querySelector(".booking-form h3").textContent = t.bookingTitle;
  document.querySelectorAll(".form-group label")[0].textContent = t.labelName;
  document.querySelectorAll(".form-group label")[1].textContent = t.labelEmail;
  document.querySelectorAll(".form-group label")[2].textContent =
    t.labelCheckin;
  document.querySelectorAll(".form-group label")[3].textContent =
    t.labelCheckout;
  document.querySelectorAll(".form-group label")[4].textContent = t.labelGuests;
  document.querySelectorAll(".form-group label")[5].textContent =
    t.labelMessage;

  // Guest Options
  const guestOptions = document.querySelectorAll("#guests option");
  guestOptions[0].textContent = t.selectGuests;
  guestOptions[1].textContent = t.guest1;
  guestOptions[2].textContent = t.guest2;
  guestOptions[3].textContent = t.guest3;
  guestOptions[4].textContent = t.guest4;

  // Submit Button
  document.querySelector('.booking-form button[type="submit"]').textContent =
    t.btnSubmit;
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openBookingModal = openBookingModal;
window.closeModal = closeModal;
