# 🏗️ LenBuild — Official Website

> *"We build homes that hold memories and moments that last for generations."*

The official marketing website for **LenBuild Pty Ltd** — a trusted, family-operated building company based in **Guyra, NSW**, specialising in custom homes, renovations, extensions, and building consultancy across the New England Tablelands region.

---

## 🌐 Live Site

> [https://www.lenbuild.com](https://www.lenbuild.com) — deployed on Netlify from `main` (every pull request gets a deploy preview)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Pages & Features](#pages--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contact](#contact)

---

## About the Project

This is a fully responsive, single-page application (SPA) built with **React** to serve as the digital presence for LenBuild. It showcases the company's services, team, past projects, client testimonials, and provides a direct contact channel for prospective clients.

Key highlights:
- ✅ Smooth page transitions using `react-transition-group`
- ✅ Scroll-triggered animations powered by **AOS** (Animate On Scroll)
- ✅ Fully responsive across desktop, tablet, and mobile
- ✅ Contact form with client-side validation, anti-spam measures, and **Formspree** integration
- ✅ Parallax image effects
- ✅ Auto-scrolling testimonial carousel

---

## Pages & Features

### 🏠 Home
- Full-screen hero section with call-to-action buttons
- Company overview and team photo
- Legacy quote block
- Services overview grid (Custom Homes, Extensions, Renovations, PAC)
- Rotating client testimonials carousel
- Call-to-action section

### 👷 About
- Company story and mission
- Core values cards (Quality Craftsmanship, Client-Centred Approach, Sustainability)
- Meet the Team section featuring:
  - **Dan** — Director (15+ years experience)
  - **Luke** — Lead Carpenter
  - **Archie** — 4th Year Apprentice
  - **Caleb** — 3rd Year Apprentice

### 🔨 Projects & Services
Dedicated page showcasing LenBuild's full range of services:
- **Custom Home Building** — Bespoke homes designed from concept to completion
- **Extensions** — Seamless additions to existing homes
- **Renovations** — Full-scale home transformations
- **PAC (Paid as a Consultant)** — Expert building guidance and oversight

### ✉️ Contact
- Contact form with full validation (required fields, format checks, character limits)
- Formspree backend integration for email delivery
- Anti-spam protection (session-based submission limit + cooldown timer)
- Accordion-style FAQ section covering common client questions
- Contact information card (location & email)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Dev server and production build |
| [react-snap](https://github.com/stereobooster/react-snap) | Prerenders each route to static HTML after the build (SEO) |
| [React Router DOM v6](https://reactrouter.com/) | Client-side routing |
| [React Transition Group](https://reactcommunity.org/react-transition-group/) | Page transition animations |
| [AOS](https://michalsnik.github.io/aos/) | Scroll-triggered animations |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Formspree](https://formspree.io/) | Contact form handling |
| CSS Modules / Global CSS | Styling |

---

## Project Structure

```
lenbuild/
├── index.html               # HTML entry (Vite)
├── vite.config.js
├── public/                  # Static files copied as-is (favicons, manifest, robots, sitemap)
└── src/
    ├── assets/              # Images and media
    ├── components/
    │   ├── CallToAction/    # CTA banner component
    │   ├── Footer/          # Site footer
    │   ├── Header/          # Navigation header
    │   ├── PageHeader/      # Page banner with breadcrumbs
    │   ├── ParallaxImage/   # Parallax scroll effect
    │   └── ScrollToTop/     # Scroll-to-top button & auto scroll
    ├── pages/
    │   ├── Home/            # Landing page
    │   ├── About/           # About & team page
    │   ├── ProjectsServices/# Services & projects page
    │   └── Contact/         # Contact form & FAQ page
    ├── styles/
    │   ├── global.css       # Global styles & transitions
    │   └── variables.css    # CSS custom properties
    ├── App.jsx              # Root app with routing
    └── index.jsx            # Entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22 (see `lenbuild/.nvmrc`; Vite needs 20.19+)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Lyfe4/LenBuild.git
   cd LenBuild/lenbuild
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` / `npm run dev` | Runs the Vite dev server at http://localhost:3000 |
| `npm run build` | Builds for production to `build/`, then prerenders every route with react-snap |
| `npm run preview` | Serves the production build locally |


---

<p align="center">Built with ❤️ for the LenBuild team by <a href="https://github.com/Lyfe4">Lyfe4</a></p>
