# Portfolio Website

A vibrant, colorful portfolio website showcasing CS projects and interactive media creative work.

## Features

- Responsive design for all devices
- Dark/light mode toggle
- Project filtering by category
- Animated UI elements with colorful gradients
- Project detail pages

## GitHub Pages Deployment

This portfolio is configured to deploy automatically to GitHub Pages. When you push to the main branch, the GitHub Actions workflow will build and deploy the site.

### Deployment URL

Your portfolio will be available at: https://st6rgazing.github.io/Portfolio/

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
\`\`\`

## Customization

1. Update project data in `components/projects-section.tsx`
2. Modify personal information in the About section
3. Update contact details in the Contact section
4. Replace placeholder images with your own images
5. Adjust colors in the tailwind.config.ts file

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion
- shadcn/ui components
