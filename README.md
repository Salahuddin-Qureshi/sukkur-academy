# The Sukkur Academy Website

A modern, responsive React website for The Sukkur Academy - an educational institution in Sukkur specializing in MDCAT and ECAT preparation for classes 9th to 12th.

## Features

- **Modern Design**: Clean, professional design with green/white theme matching academy branding
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Multi-page Structure**: Home, About, Courses, Faculty, Contact, and Registration pages
- **Registration Form**: Complete student registration with CSV export functionality
- **Course Information**: Detailed information about all subjects and faculty
- **Contact Integration**: Multiple contact methods and inquiry forms

## Pages

1. **Home**: Hero section with academy overview, features, and call-to-action
2. **About**: Academy story, mission, values, and achievements
3. **Courses**: Detailed course information, subjects, and exam preparation
4. **Faculty**: Profiles of all professors with their qualifications and experience
5. **Contact**: Contact information, inquiry form, and FAQ section
6. **Registration**: Comprehensive student registration form with CSV export

## Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Pure CSS with CSS variables
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory:
   ```bash
   cd sukkur-academy
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

Alternatively, you can:
- Connect your GitHub repository to Vercel dashboard
- Import the project directly in Vercel dashboard
- Use the Vercel for Git integration

## Registration Data Export

The registration form automatically exports student data as CSV files to the user's computer. Each registration creates a timestamped CSV file with all student information that can be easily imported into Excel or other spreadsheet applications.

## Features Overview

### Design
- Academy's green and white color scheme
- Professional typography and spacing
- Hover effects and smooth transitions
- Mobile-first responsive design

### Functionality
- Client-side routing with React Router
- Form validation and data handling
- CSV export for offline data storage
- Local storage backup for registrations
- Contact form with subject categorization

### SEO and Performance
- Semantic HTML structure
- Optimized images and assets
- Fast loading with Vite bundler
- Clean URLs with proper routing

## Customization

### Colors
The color scheme can be modified by updating CSS variables in `src/index.css`:
```css
:root {
  --primary-green: #22c55e;
  --dark-green: #16a34a;
  --light-green: #86efac;
  /* ... other colors */
}
```

### Content
- Update academy information in respective page components
- Modify contact details in Header.jsx and Footer.jsx
- Adjust course information in Courses.jsx
- Update faculty details in Faculty.jsx

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is created for The Sukkur Academy. All rights reserved.

## Support

For technical support or questions about the website, please contact the development team.

---

**The Sukkur Academy** - Where Experience Meets Excellence