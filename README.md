# Estructura Semántica del HTML

La landing page EcoProduct sigue una estructura clara y bien organizada, utilizando etiquetas semánticas para definir cada sección.

## Etiqueta Semanticas Utilizadas:

#### 1. **`<!DOCTYPE html>`**
- Declara que el documento es de tipo HTML5. Es obligatorio para que los navegadores interpreten correctamente el código.

---

#### 2. **`<html lang="es">`**
- Define el idioma principal del documento (español). Esto ayuda a los lectores de pantalla y motores de búsqueda a entender el contenido.

---

#### 3. **`<head>`**
- Contiene metadatos que no se muestran en la página pero son esenciales para su funcionamiento y SEO.
  - `<meta charset="UTF-8">`: Especifica la codificación de caracteres (UTF-8 es estándar y soporta todos los caracteres especiales).
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Hace que la página sea responsive, adaptándose a diferentes dispositivos.
  - `<title>`: Define el título de la página, que aparece en la pestaña del navegador y en los resultados de búsqueda.
  - `<link rel="stylesheet" href="./css/styles.css">`: Enlaza la hoja de estilos CSS para dar diseño a la página.

---

#### 4. **`<body>`**
- Contiene todo el contenido visible de la página. Está dividido en secciones semánticas.

---

#### 5. **`<header>`**
-   Representa la cabecera de la página. Aquí se incluye la navegación principal y un botón para cambiar el tema (modo oscuro/claro).
  - `<nav>`: Define la barra de navegación. Es semánticamente correcto para agrupar enlaces de navegación.
  - `<ul>` y `<li>`: Lista no ordenada para los enlaces de navegación. Es una práctica común para menús.
  - `<button id="theme-toggle">`: Botón para cambiar el tema. El atributo `aria-label` mejora la accesibilidad al describir su función.

---

#### 6. **`<main>`**
-   Contiene el contenido principal de la página. Es una etiqueta semántica que ayuda a los motores de búsqueda y lectores de pantalla a identificar el contenido principal.

---

#### 7. **`<section>`**
-   Divide el contenido en secciones temáticas. Cada `<section>` tiene un `id` único para facilitar la navegación interna.
  - **`<section id="hero">`**: Es la sección de presentación o "hero". Incluye un título (`<h1>`), un párrafo descriptivo (`<p>`) y un botón de llamado a la acción (`<a>`).
  - **`<section id="caracteristicas">`**: Describe las características principales del producto. Usa `<article>` para cada característica, lo cual es semánticamente correcto para contenido independiente.
  - **`<section id="envios">`**: Detalla las opciones de envío. Usa `<div>` para agrupar contenido relacionado.
  - **`<section id="pagos">`**: Explica los métodos de pago y promociones. También usa `<div>` para organizar el contenido.

---

#### 8. **`<article>`**
-   Se usa dentro de la sección `caracteristicas` para cada característica del producto. Es semánticamente correcto porque cada característica es un contenido independiente y autocontenido.

---

#### 9. **`<footer>`**
-   Representa el pie de página. Aquí se incluye información de contacto, enlaces importantes y redes sociales.
  - `<div class="contact-info">`: Agrupa la información de contacto.
  - `<div class="important-links">`: Contiene enlaces a términos, privacidad y preguntas frecuentes.
  - `<div class="social-media">`: Muestra enlaces a redes sociales. El atributo `aria-label` mejora la accesibilidad.

---

#### 10. **Etiquetas de Texto**
- **`<h1>` a `<h3>`**: Se usan para títulos y subtítulos. Siguen una jerarquía lógica (`<h1>` para el título principal, `<h2>` para secciones y `<h3>` para subsecciones), lo que mejora la accesibilidad y el SEO.
- **`<p>`**: Para párrafos de texto descriptivo.
- **`<ul>` y `<li>`**: Para listas no ordenadas, como opciones de envío y métodos de pago.

---

#### 11. **Atributos de Accesibilidad**
- **`aria-current="page"`**: Indica que el enlace "Inicio" corresponde a la página actual.
- **`aria-label`**: Proporciona una descripción accesible para el botón de cambio de tema y los enlaces de redes sociales.
- **`alt` en `<img>`**: Describe las imágenes para usuarios con discapacidad visual.

---

#### 12. **Script de Cambio de Tema**
-   El script en `<script>` permite cambiar entre modo oscuro y claro. Usa `classList.toggle` para alternar la clase `dark-mode` en el elemento `<html>`.

