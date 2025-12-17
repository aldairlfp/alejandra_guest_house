# Sitio Web Alejandra Beach House

Un sitio web profesional y responsivo para una casa de huéspedes en la playa con espectaculares vistas al mar.

## Funcionalidades Implementadas

### ✅ Sección Hero
- Fondo espectacular con efecto de superposición
- Título y subtítulo atractivos
- Características clave con íconos (vistas al amanecer, acceso a la playa, familiar, WiFi, restaurantes)
- Botones de llamada a la acción

### ✅ Galería de Fotos Profesional
- Organizada por categorías: Exterior, Dormitorios, Cocina, Áreas Comunes, Terraza/Piscina, Playa, Parqueo
- Pestañas filtrables para fácil navegación
- Vista modal con controles de navegación
- Diseño de cuadrícula responsivo

### ✅ Detalles Técnicos
- Capacidad: 4 personas, 2 habitaciones, 3 baños
- Amenidades: Totalmente amueblada, cocina equipada, AC, parqueo, jardines
- Precios para temporadas alta/baja
- Promociones y descuentos especiales

### ✅ Sección de Reseñas
- Visualización de calificaciones con estrellas
- Comentarios de huéspedes con iniciales para privacidad
- Cálculo de calificación general
- Tarjeta de reseña profesional

### ✅ Ubicación y Mapa
- Mapa interactivo con ubicación aproximada
- Información de distancias a lugares clave
- Destacados y atracciones del área
- Visualización de ubicación enfocada en la privacidad

### ✅ Contacto y Reservas
- Integración directa con WhatsApp, Telegram y Facebook
- Formulario completo de solicitud de reserva
- Validación de formulario y manejo de errores
- Integración con redes sociales

## Estructura de Archivos

```
alejandra_guest_house/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Hoja de estilos principal
│   ├── js/
│   │   └── script.js       # Funcionalidad JavaScript
│   └── images/
│       └── gallery/        # Carpeta de imágenes de la galería
├── README.md               # Este archivo
└── .gitignore             # Archivo gitignore
```

## Lista de Verificación Pre-Producción

Antes de desplegar tu sitio web en producción, actualiza lo siguiente:

### 📸 Imágenes a Reemplazar

**Sección Hero:**
- [ ] Agrega archivos de video: `assets/videos/hero-background.mp4` y `assets/videos/hero-background.webm`
- [ ] O reemplaza el video con una imagen estática de fondo en el CSS

**Imágenes de la Galería:**
Actualiza todas las imágenes de la galería en `assets/js/script.js` (líneas ~50-90):
- [ ] `assets/images/photo_2025-11-14_18-26-30.jpg` (exterior)
- [ ] `assets/images/1701eb5c-64d8-4f22-bf79-97c115300413.jpg` (exterior)
- [ ] `assets/images/118349.jpg` (exterior)
- [ ] `assets/images/294213(1).jpg` (dormitorio)
- [ ] `assets/images/802039.jpg` (dormitorio)
- [ ] `assets/images/294213.jpg` (dormitorio)
- [ ] `assets/images/907796.png` (cocina)
- [ ] `assets/images/1377511.jpg` (cocina)
- [ ] `assets/images/76995.jpg` (sala)

**Mapa de Ubicación:**
- [ ] Reemplaza `assets/images/map.jpg` con la imagen real del mapa de ubicación

**Favicon:**
- [ ] Agrega/reemplaza `assets/images/favicon.ico`

### 🔗 Enlaces de Redes Sociales y Contacto

**En `index.html` (Sección Contacto, líneas ~360-390):**
- [ ] WhatsApp: Actualiza `href="https://wa.me/+5352454116"` con tu número
- [ ] Telegram: Actualiza `href="https://t.me/bertalm73"` con tu usuario
- [ ] Facebook: Actualiza `href="https://facebook.com/alejandraguesthouse"` con tu página
- [ ] Instagram: Actualiza `href="https://instagram.com/alejandraguesthouse"` con tu perfil

**En `index.html` (Sección Footer, líneas ~440-460):**
- [ ] Email: Actualiza `info@alejandraguesthouse.com` con tu email real
- [ ] Teléfono: Actualiza `+5352454116` con tu número
- [ ] Enlaces sociales: Actualiza Facebook, Instagram, WhatsApp y Telegram

### 📱 Integración de WhatsApp

**En `assets/js/script.js` (línea ~320):**
```javascript
// Actualiza el número de WhatsApp para envíos del formulario de reserva
const whatsappUrl = `https://wa.me/+5352454116?text=${encodeURIComponent(whatsappMessage)}`;
```
Cambia `+5352454116` por tu número de WhatsApp (incluye el código de país).

### 🗺️ Coordenadas de Ubicación

**En `assets/js/script.js` (ya actualizado con tus coordenadas):**
```javascript
// Las líneas ya están configuradas así:
const lat = 21.11263938481885;
const lng = -75.84511401516896;
```
Nota: El mapa ahora es una imagen estática (`assets/images/map.jpg`), solo necesitas reemplazar el archivo de imagen.

### 📝 Actualización de Contenidos

**En `index.html`:**
- [ ] Actualiza el nombre/título de la propiedad si es diferente a "Alejandra Guest House"
- [ ] Revisa y actualiza la descripción del hero (línea ~70)
- [ ] Actualiza capacidad, habitaciones, baños (líneas ~170-185)
- [ ] Actualiza la lista de amenidades (líneas ~190-210)
- [ ] Actualiza información de distancias (líneas ~310-330)
- [ ] Actualiza destacados del área (líneas ~335-345)
- [ ] Revisa y actualiza reseñas de huéspedes (líneas ~240-290)

### 🎨 Branding

- [ ] Actualiza el título de la página y la meta descripción (líneas ~5-10)
- [ ] Revisa el esquema de colores en el CSS si es necesario
- [ ] Actualiza el año de copyright en el footer (actualmente 2024)

### ✅ Pruebas Finales

Antes de publicar:
- [ ] Prueba que todos los enlaces de redes sociales abran correctamente
- [ ] Prueba el envío del formulario de reserva por WhatsApp
- [ ] Verifica que todas las imágenes carguen correctamente
- [ ] Prueba en dispositivos móviles
- [ ] Revisa que todos los enlaces de navegación funcionen
- [ ] Verifica que la galería modal y la navegación funcionen
- [ ] Prueba la validación del formulario

## Instrucciones de Configuración

### 1. Agrega Tus Imágenes
Reemplaza las imágenes de ejemplo en `assets/images/gallery/` por tus fotos reales:

**Imágenes Requeridas:**
- `exterior-1.jpg`, `exterior-2.jpg`, `exterior-3.jpg` - Exterior de la casa y jardines
- `bedroom-1.jpg`, `bedroom-2.jpg` - Fotos de dormitorios
- `kitchen-1.jpg`, `kitchen-2.jpg` - Cocina y comedor
- `living-1.jpg`, `living-2.jpg` - Sala y áreas comunes
- `terrace-1.jpg`, `pool-1.jpg` - Terraza y piscina
- `beach-1.jpg`, `beach-2.jpg` - Acceso a la playa y alrededores
- `parking-1.jpg` - Parqueo/garaje

**Guía de Imágenes:**
- Usa imágenes de alta calidad (al menos 1200px de ancho)
- Optimiza para web (comprime para reducir el tamaño)
- Usa proporciones consistentes para mejor diseño

### 2. Actualiza Información de Contacto
En `assets/js/script.js`, actualiza los datos de contacto:

```javascript
// Línea ~280: Actualiza el número de WhatsApp
const whatsappUrl = `https://wa.me/TU_NUMERO?text=${encodeURIComponent(whatsappMessage)}`;

// En index.html, actualiza los enlaces de redes sociales:
- WhatsApp: href="https://wa.me/TU_NUMERO"
- Telegram: href="https://t.me/TU_USUARIO"
- Facebook: href="https://facebook.com/TU_PAGINA"
- Email: info@tudominio.com
```

### 3. Actualiza Información de Ubicación
En `assets/js/script.js`, actualiza las coordenadas del mapa:

```javascript
// Líneas ~115-116: Actualiza con tus coordenadas aproximadas
const lat = TU_LATITUD;  // Ejemplo: 18.4861
const lng = TU_LONGITUD; // Ejemplo: -69.9312
```

### 4. Personaliza el Contenido
Actualiza el siguiente contenido en `index.html`:
- Nombre de la propiedad y descripciones
- Información de precios
- Reseñas de huéspedes
- Información de distancias
- Promociones especiales

### 5. Imagen de Fondo Hero
Reemplaza el fondo degradado en CSS por tu foto espectacular de vista al mar:

En `assets/css/styles.css`, alrededor de la línea 120:
```css
.hero-background {
    /* Reemplaza esto con tu imagen real */
    background-image: url('assets/images/hero-background.jpg');
}
```

## Opciones de Despliegue

### Opción 1: Hosting Simple
1. Sube todos los archivos a tu proveedor de hosting web
2. Asegúrate de mantener la estructura de carpetas
3. Tu sitio será accesible en tu dominio

### Opción 2: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en la configuración del repositorio
4. Tu sitio estará disponible en `tuusuario.github.io/nombre-del-repositorio`

### Opción 3: Netlify (Gratis)
1. Crea una cuenta en Netlify
2. Arrastra y suelta la carpeta completa en Netlify
3. Tu sitio se desplegará automáticamente con un subdominio gratuito

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesibilidad
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Funcionalidad interactiva
- **Leaflet.js** - Mapas interactivos
- **Font Awesome** - Íconos
- **Google Fonts** - Tipografía (Poppins)

## Compatibilidad de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Características de Rendimiento

- **Carga diferida** de imágenes
- **Diseño responsivo** para todos los dispositivos
- **Animaciones optimizadas** con transformaciones CSS
- **Recursos comprimidos** para carga rápida
- **Estructura SEO-friendly** y meta etiquetas

## Consejos de Personalización

### Colores
El esquema de colores principal usa:
- Azul Primario: `#2c5aa0`
- Rojo Acento: `#ff6b6b`
- Dorado: `#ffd700`

Actualiza estos valores en el archivo CSS para mantener la coherencia de marca.

### Fuentes
Actualmente se usa la familia Poppins. Para cambiarla:
1. Actualiza la importación de Google Fonts en `index.html`
2. Actualiza la propiedad `font-family` en `assets/css/styles.css`

### Secciones
Puedes agregar, quitar o modificar secciones fácilmente:
1. Actualizando la estructura HTML en `index.html`
2. Agregando estilos en `assets/css/styles.css`
3. Agregando funcionalidad en `assets/js/script.js` si es necesario

## Soporte

Para soporte técnico o solicitudes de personalización, contacta al desarrollador.

## Licencia

Esta plantilla de sitio web se proporciona para su uso con Alejandra Beach House. Todas las imágenes y contenido deben ser reemplazados por la información real de tu propiedad.
