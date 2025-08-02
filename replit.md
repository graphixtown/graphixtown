# GFX Town - Professional Graphic Design Portfolio

## Overview

GFX Town is a professional graphic design portfolio website available in two versions:
1. **React-based full-stack application** (original) - Modern SPA with Express backend
2. **Pure HTML/CSS/JavaScript static website** (new) - Lightweight, no-framework solution for GitHub Pages

The static version eliminates all frameworks and build tools, providing a completely self-contained website that works anywhere. Built specifically for GitHub Pages hosting, it features the same purple-themed design and functionality as the React version but with zero dependencies.

Both versions serve the same content and maintain identical user experience, with the static version optimized for maximum compatibility and performance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Static Website Version (Current Primary Solution)
- **Technology**: Pure HTML5, CSS3, and vanilla JavaScript
- **No Dependencies**: Zero external libraries, frameworks, or build tools
- **Hosting**: Optimized for GitHub Pages static hosting
- **Content Management**: JavaScript data objects embedded in script.js
- **Styling**: Custom CSS with CSS variables for theming
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Performance**: <100KB total bundle size, loads in <2 seconds

### React-based Version (Development/Alternative)
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture (React version only)
- **Server**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful JSON endpoints serving static content from attached asset files
- **File Storage**: JSON files in the attached_assets directory for easy content management
- **Development**: Custom Vite integration for seamless full-stack development experience

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **User Management**: Basic user schema with username/password fields and UUID primary keys
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Note**: Database integration is set up but not actively used; content is served from JSON files

### Component Architecture
- **Design System**: Comprehensive UI component library based on Radix UI primitives
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Fixed header with smooth scrolling between sections
- **Content Sections**: Modular components for Hero, Services, Portfolio, About, Contact, and Footer
- **Theme**: Dark theme with custom color palette and CSS variables for easy customization

### Content Management

#### Static Website Version
- **JSON-Based Content**: External JSON files in data/ folder for easy customization
- **Async Loading**: JavaScript fetch API loads JSON data with fallback support
- **No Coding Required**: Update website content by editing JSON files only
- **Content Types**: Branding, services, portfolio items, company stats, and contact information
- **Error Handling**: Graceful fallback to embedded data if JSON loading fails

#### React Version
- **Static Content**: JSON files for portfolio items, services, statistics, branding, and contact information
- **Asset Structure**: Organized attached_assets directory with timestamped content files
- **API Endpoints**: Simple file-reading endpoints that serve JSON content to the frontend
- **Content Types**: Portfolio projects with categories, service offerings with pricing, company statistics, and contact details

### Recent Changes (January 2025)
- **Major Architecture Addition**: Created pure HTML/CSS/JavaScript version for GitHub Pages
- **Static Website**: Complete reimplementation without React or any frameworks
- **JSON Customization**: Added external JSON files for easy content management without coding
- **Performance Optimized**: <100KB total size, no build process required
- **Mobile Responsive**: Full mobile optimization with hamburger menu
- **Contact Form**: Smart mailto implementation for static hosting
- **Portfolio Filtering**: JavaScript-based category filtering system
- **SEO Optimization**: Complete meta tags, Open Graph, and semantic HTML
- **Documentation**: Comprehensive guides for deployment and JSON customization

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Query for data fetching and caching
- **TypeScript**: Full type safety across frontend and backend
- **Node.js**: Server runtime environment

### UI and Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe CSS class composition
- **clsx & tailwind-merge**: Conditional CSS class handling

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development

### Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **Drizzle Kit**: Database migrations and schema management
- **@neondatabase/serverless**: PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Form and Data Handling
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation library
- **date-fns**: Date manipulation and formatting

### Development Environment
- **Wouter**: Lightweight router for React applications
- **nanoid**: URL-safe unique ID generator
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment