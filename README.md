<!-- ==============================================================================
  CLUSTER: creative-coding-lab
  PLANTILLA: README raíz de cluster modular
  AUTOR: Yefry (yefcode) · 2026
============================================================================== -->

# 🎨 creative-coding-lab

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-yefcode.dev-6c47ff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://yefcode.dev/projects)
[![GitHub](https://img.shields.io/badge/GitHub-%40yefcode-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yefcode)
[![Category](https://img.shields.io/badge/Category-Canvas%20%26%20Creative-blueviolet?style=for-the-badge)](https://yefcode.dev/projects)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Projects](https://img.shields.io/badge/Experiments-24%20proyectos-success?style=for-the-badge)](.)

<br />

**Laboratorio de experimentos visuales interactivos: CSS 3D, animaciones matemáticas, sliders y micro-interacciones.**

</div>

---

## 📖 Descripción General

`creative-coding-lab` es un monorepo modular que consolida **24 experimentos de ingeniería visual** construidos con CSS 3D Transforms, Canvas 2D, animaciones `@keyframe` y JavaScript puro. Cada subcarpeta es un proyecto autónomo con su propio `README.md`, demo GIF y código ejecutable directamente en el navegador.

> **Sin dependencias de build.** Abre `index.html` en cualquier navegador moderno.

---

## 🗂️ Catálogo de Proyectos

### 01 — Transformaciones 3D

| # | Proyecto | Demo | Tecnología |
| :-: | :--- | :---: | :--- |
| 1 | [`dynamic-carousel/`](./01-3d-transforms/dynamic-carousel/) | 🎬 GIF | CSS 3D Transforms, JS |
| 2 | [`cylindrical-carousel/`](./01-3d-transforms/cylindrical-carousel/) | 🎬 GIF | CSS `perspective`, `rotateY` |
| 3 | [`interactive-cube/`](./01-3d-transforms/interactive-cube/) | 🎬 GIF | CSS `preserve-3d`, `rotateX/Y/Z` |
| 4 | [`card-flip-3d/`](./01-3d-transforms/card-flip-3d/) | 🎬 GIF | CSS `backface-visibility` |

### 02 — Animaciones Keyframe

| # | Proyecto | Demo | Tecnología |
| :-: | :--- | :---: | :--- |
| 5 | [`3d-loading-rings/`](./02-keyframe-animations/3d-loading-rings/) | 🖼️ Img | CSS `@keyframes`, `animation-delay` |
| 6 | [`3d-rotation-wheel/`](./02-keyframe-animations/3d-rotation-wheel/) | 🖼️ Img | CSS `rotateZ`, `animation-timing-function` |
| 7 | [`3d-wavy-circle/`](./02-keyframe-animations/3d-wavy-circle/) | 🖼️ Img | CSS `border-radius`, `animation-delay` |
| 8 | [`spinning-preloader/`](./02-keyframe-animations/spinning-preloader/) | 🖼️ Img | CSS `conic-gradient`, multicapa |
| 9 | [`bouncing-ball-physics/`](./02-keyframe-animations/bouncing-ball-physics/) | 🖼️ Img | CSS cubic-bezier, gravedad simulada |

### 03 — Micro-Interacciones UI

| # | Proyecto | Demo | Tecnología |
| :-: | :--- | :---: | :--- |
| 10 | [`clip-path-card-reveal/`](./03-ui-micro-interactions/clip-path-card-reveal/) | 🎬 GIF | CSS `clip-path: circle()`, hover |
| 11 | [`blur-focus-grid/`](./03-ui-micro-interactions/blur-focus-grid/) | 🎬 GIF | CSS `filter: blur()`, sibling selector |
| 12 | [`glowing-buttons/`](./03-ui-micro-interactions/glowing-buttons/) | 🎬 GIF | CSS `box-shadow`, `radial-gradient` |
| 13 | [`card-hover-tilt/`](./03-ui-micro-interactions/card-hover-tilt/) | 🖼️ Img | CSS `perspective`, JS mouse-tracking |
| 14 | [`image-distortion-hover/`](./03-ui-micro-interactions/image-distortion-hover/) | 🖼️ Img | CSS `scale`, `clip-path` en hover |
| 15 | [`animated-menu-indicator/`](./03-ui-micro-interactions/animated-menu-indicator/) | 🎬 GIF | CSS `scaleX`, JS event delegation |
| 16 | [`sidebar-smooth-scroll/`](./03-ui-micro-interactions/sidebar-smooth-scroll/) | 🎬 GIF | CSS `scroll-behavior: smooth`, JS |
| 17 | [`split-text-hover/`](./03-ui-micro-interactions/split-text-hover/) | 🎬 GIF | CSS `translateY` en hover, `overflow: hidden` |

### 04 — Sliders y Canvas

| # | Proyecto | Demo | Tecnología |
| :-: | :--- | :---: | :--- |
| 18 | [`responsive-touch-slider/`](./04-sliders-and-canvas/responsive-touch-slider/) | 🎬 GIF | Swiper.js, CSS Coverflow Effect |
| 19 | [`mouse-moving-gradient/`](./04-sliders-and-canvas/mouse-moving-gradient/) | 🖼️ Img | JS `mousemove`, CSS `radial-gradient` |
| 20 | [`curtain-image-slider/`](./04-sliders-and-canvas/curtain-image-slider/) | 🖼️ Img | CSS `clip-path`, JS drag comparator |
| 21 | [`horizontal-scroll-layout/`](./04-sliders-and-canvas/horizontal-scroll-layout/) | 🖼️ Img | CSS `overflow-x: hidden`, `scroll-snap` |
| 22 | [`scroll-activated-reveals/`](./04-sliders-and-canvas/scroll-activated-reveals/) | 🖼️ Img | JS `IntersectionObserver`, CSS transitions |
| 23 | [`radio-slideshow/`](./04-sliders-and-canvas/radio-slideshow/) | 🖼️ Img | CSS `~` sibling combinator, radio buttons |
| 24 | [`isometric-face-layered/`](./04-sliders-and-canvas/isometric-face-layered/) | 🖼️ Img | CSS `skewX/Y`, `rotateZ`, capas isométricas |

---

## ⚡ Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/yefcode/creative-coding-lab.git
cd creative-coding-lab

# Abrir cualquier proyecto directamente (sin build step)
start 01-3d-transforms/dynamic-carousel/index.html
```

> Todos los proyectos son HTML/CSS/JS puros. No requieren `npm install`.

---

## 🌐 Ecosistema de Portafolio

Parte del portafolio interactivo de **Yefry (yefcode)**:

- 🌐 **Web:** [yefcode.dev](https://yefcode.dev)
- 🐙 **GitHub:** [@yefcode](https://github.com/yefcode)
- 💼 **LinkedIn:** [linkedin.com/in/yefcode](https://linkedin.com/in/yefcode)

---

<div align="center">

Licencia MIT © 2026 [Yefry (yefcode)](https://github.com/yefcode). Todos los derechos reservados.

</div>
