# CIT Club Website - React Migration

## 🚀 Project Overview

This is the modernized version of the CIT Club website, migrated from a static HTML/CSS/Bootstrap structure to a modern React + Tailwind CSS application.

## 📋 Migration Summary

### ✅ Completed Features

- **Modern Tech Stack**: React 19 + Vite + Tailwind CSS v4
- **Responsive Design**: Mobile-first design with Tailwind utilities
- **Component Architecture**: Modular React components for maintainability
- **Routing**: React Router for seamless navigation
- **Pages Migrated**:
  - 🏠 Home page with hero section and DataCamp collaboration
  - 🔬 Cells page showcasing all technical specializations
  - 📅 Events page with upcoming and past events
  - 👥 Team page with member profiles
- **Components Created**:
  - Navigation bar with mobile responsiveness
  - Footer with social links
  - Layout wrapper component
- **Assets**: All images and logos successfully migrated
- **Styling**: Enhanced with modern gradients, animations, and hover effects

### 🎨 Design Improvements

- **Terminal Theme**: Maintained the terminal/CLI aesthetic from original
- **Green Terminal Colors**: Preserved the signature green terminal text
- **Modern UI**: Added glassmorphism effects, gradients, and smooth animations
- **Better Typography**: Inter font for readability, JetBrains Mono for code
- **Enhanced UX**: Hover effects, transitions, and interactive elements
- **Responsive Grid**: CSS Grid and Flexbox for better layouts

### 🛠 Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM
- **Icons**: Font Awesome 6.0
- **Fonts**: Inter (UI) + JetBrains Mono (code)

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer with social links
│   └── Layout.jsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Cells.jsx       # Technical cells showcase
│   ├── Events.jsx      # Events and workshops
│   └── Team.jsx        # Team member profiles
├── assets/
│   └── images/         # All migrated assets
├── utilities/          # Helper functions
│   ├── animations.js   # Animation utilities
│   └── helpers.js      # General helper functions
├── App.jsx            # Main app with routing
└── main.jsx           # React entry point
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 🎯 Features

### Navigation
- Fixed responsive navbar with terminal styling
- Mobile hamburger menu
- Active route highlighting
- Smooth transitions

### Home Page
- Hero section with CIT logo
- Club description and mission
- DataCamp collaboration showcase
- Feature cards for community aspects

### Cells Page
- Grid layout of technical specializations
- Interactive hover effects
- Detailed descriptions for each cell
- Call-to-action for joining

### Events Page
- Upcoming events with registration
- Past events history
- Event categorization and filtering
- Newsletter subscription

### Team Page
- Member profile cards
- Role and skill displays
- Statistics section
- Join team call-to-action

## 🎨 Styling Approach

- **Utility-First**: Tailwind CSS for rapid development
- **Design System**: Consistent color palette and spacing
- **Responsive**: Mobile-first breakpoints
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Proper contrast and keyboard navigation

## 📱 Responsive Design

- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Medium screens (768px - 1024px)
- **Desktop**: Large screens (> 1024px)

## 🔧 Development Notes

- All images are optimized and properly imported
- Font Awesome icons for consistent iconography
- Tailwind's JIT mode for optimal bundle size
- ESLint configuration for code quality
- Modern React patterns with hooks

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🤝 Contributing

1. Follow the existing component structure
2. Use Tailwind utilities for styling
3. Maintain responsive design principles
4. Add proper prop types for components
5. Test on mobile devices

## 📧 Contact

For questions about this migration or the CIT Club:
- Email: cit.inpt@gmail.com
- GitHub: CIT-INPT
- Website: [Your deployed URL]

---

**Original Website**: Static HTML/CSS/Bootstrap
**New Website**: React + Tailwind CSS
**Migration Date**: August 2025
**Maintained by**: CIT Club Development Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
