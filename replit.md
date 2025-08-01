# Overview

GFX Town is a modern graphics design website that operates as a hybrid application with both dynamic and static site capabilities. The project is designed for GitHub Pages deployment and uses JSON-based content management to provide easy updates without requiring a database. The application features a professional portfolio showcase, service offerings, contact functionality, and an admin interface for content management.

The site serves as a business presence for a graphics design company, showcasing their work, services, and providing contact mechanisms for potential clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses **React with TypeScript** as the core frontend framework, built with **Vite** for fast development and optimized builds. The UI is constructed using **shadcn/ui components** built on top of **Radix UI primitives** with **Tailwind CSS** for styling.

**Key architectural decisions:**
- **Component-based architecture**: Modular React components for sections (Hero, Services, Portfolio, About, Contact)
- **Dual routing approach**: Static components for GitHub Pages deployment and dynamic components for full-featured experience
- **Custom theming**: CSS custom properties for consistent dark theme across the application
- **Responsive design**: Mobile-first approach with Tailwind CSS breakpoints

## Backend Architecture
The backend uses **Express.js** with TypeScript in an ESM module setup. The architecture supports both development and production environments with different data management strategies.

**Key architectural decisions:**
- **In-memory storage**: Uses a custom `MemStorage` class for development/testing
- **Database-ready**: Configured with Drizzle ORM and PostgreSQL schema for future database integration
- **API-first design**: RESTful API endpoints with `/api` prefix for clean separation
- **Middleware pipeline**: Express middleware for JSON parsing, URL encoding, and request logging

## Data Storage Solutions
The application employs a **hybrid data management approach**:

**Static Content Management:**
- **JSON configuration files** stored in `/client/public/config/` for GitHub Pages compatibility
- Files include: `services.json`, `portfolio.json`, `stats.json`, `contact.json`
- Fetched client-side using React Query for caching and state management

**Dynamic Data (Development/Admin):**
- **Drizzle ORM** with PostgreSQL for structured data management
- **Neon Database** integration for serverless PostgreSQL hosting
- **In-memory fallback** for development without database setup

## Authentication and Authorization
Currently implements a **basic user schema** with username/password authentication:
- User management through Drizzle ORM schema
- Session-based authentication potential (connect-pg-simple configured)
- Admin interface protection (routes defined but implementation pending)

## External Service Integrations

**GitHub Pages Deployment:**
- Static site generation compatible with GitHub Pages hosting
- Automated deployment through GitHub Actions (implied by static setup)
- Asset optimization and build process via Vite

**Email Integration:**
- **Mailto functionality** for contact form submissions
- Client-side email composition with pre-filled templates
- No server-side email processing required for static hosting

**Social Media:**
- **Instagram integration** with direct links to business profile
- Social media icons and branding consistency

**Development Tools:**
- **Replit integration** with development banner and cartographer plugin
- **React Query** for client-side data fetching and caching
- **React Hook Form** with Zod validation for form management

**UI/UX Libraries:**
- **Radix UI** for accessible, unstyled components
- **Lucide React** for consistent iconography
- **Tailwind CSS** for utility-first styling
- **Class Variance Authority** for component variant management

The architecture prioritizes **flexibility** between static hosting (GitHub Pages) and dynamic functionality (full Express server), allowing the same codebase to serve both deployment scenarios effectively.