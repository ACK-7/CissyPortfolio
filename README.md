# Architecture Portfolio

A modern, responsive single-page portfolio website built for architecture graduates and professionals. Features a dark theme, smooth animations, and employer-focused content structure.

## 🚀 Features

- **Modern Tech Stack**: React 18, Tailwind CSS, GSAP animations
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark Theme**: Professional dark color scheme with accent colors
- **Smooth Animations**: GSAP-powered entrance animations and micro-interactions
- **Performance Optimized**: Lazy loading, optimized images, fast load times
- **SEO Friendly**: Semantic HTML, meta tags, accessibility features
- **Employer Focused**: Structured to highlight skills, experience, and measurable outcomes

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation with smooth scrolling
│   ├── Hero.jsx                # Landing section with CTA
│   ├── About.jsx               # Professional summary & timeline
│   ├── Skills.jsx              # Technical skills with progress bars
│   ├── Projects.jsx            # Featured projects grid
│   ├── ProjectCard.jsx         # Individual project cards
│   ├── ProjectModal.jsx        # Detailed project view
│   ├── Process.jsx             # Design process workflow
│   ├── CVExperience.jsx        # Professional experience timeline
│   ├── ContactFooter.jsx       # Contact form and information
│   ├── Footer.jsx              # Site footer
│   └── LazyImage.jsx           # Optimized image loading
├── hooks/
│   └── useGsapAnimations.js    # GSAP animation setup
├── App.jsx                     # Main application component
├── main.jsx                    # React entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project files**
   ```bash
   # If using git
   git clone <repository-url>
   cd architecture-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

## 🎨 Customization

### Updating Content

1. **Personal Information**
   - Edit `src/components/Header.jsx` for name and title
   - Update `src/components/Hero.jsx` for professional summary
   - Modify `src/components/About.jsx` for detailed bio and milestones

2. **Projects**
   - Edit the `projects` array in `src/components/Projects.jsx`
   - Replace placeholder images with your project images
   - Update project descriptions, roles, and outcomes

3. **Experience**
   - Modify the `experiences` array in `src/components/CVExperience.jsx`
   - Update job titles, companies, achievements, and skills

4. **Skills**
   - Edit `skillCategories` in `src/components/Skills.jsx`
   - Adjust skill levels and add/remove skills as needed

5. **Contact Information**
   - Update contact details in `src/components/ContactFooter.jsx`
   - Replace email addresses and social media links

### Styling Customization

1. **Colors**
   - Edit `tailwind.config.js` to change the color palette
   - Update CSS custom properties in `src/index.css`

2. **Typography**
   - Modify font imports in `index.html`
   - Update font families in `tailwind.config.js`

3. **Animations**
   - Customize GSAP animations in `src/hooks/useGsapAnimations.js`
   - Adjust timing, easing, and effects as needed

### Adding Images

1. **Project Images**
   - Add images to `public/images/projects/`
   - Update image paths in the projects data
   - Recommended sizes: 800x600px for thumbnails, 1200x800px for gallery

2. **Optimized Formats**
   - Use WebP format for better performance
   - Provide fallback formats (JPG/PNG) for compatibility
   - Compress images to reduce file size

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options

#### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

#### Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify's deploy interface
3. Or connect your Git repository for automatic deployments

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 📋 Content Replacement Checklist

- [ ] Update personal name and title in Header component
- [ ] Replace professional summary in Hero section
- [ ] Update about section with your background
- [ ] Replace project data with your actual projects
- [ ] Add your project images to public/images/
- [ ] Update experience timeline with your work history
- [ ] Modify skills section with your expertise
- [ ] Replace contact information and social links
- [ ] Update resume/CV download link
- [ ] Replace placeholder email addresses
- [ ] Update meta tags in index.html
- [ ] Add your actual resume PDF to public/

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Alt text for all images
- Focus indicators
- Screen reader friendly

## 🔧 Performance Optimizations

- Lazy loading for images
- Code splitting with React
- Optimized GSAP animations (transform/opacity only)
- Compressed assets
- Minimal external dependencies
- Efficient CSS with Tailwind's purging

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

## 🧪 Testing Checklist

### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast ratios pass

### Functionality
- [ ] All navigation links work
- [ ] Contact form submits correctly
- [ ] Project modals open/close
- [ ] Responsive design on all devices
- [ ] Animations perform smoothly

## 📄 Resume/CV Integration

### PDF Resume
1. Add your resume PDF to `public/resume.pdf`
2. The download links will automatically work
3. Ensure the PDF is optimized for web viewing

### Printable CV Page
- Create a separate print-friendly CV route
- Use CSS `@media print` for print-specific styling
- Consider using libraries like Puppeteer for PDF generation

## 🎯 Employer-Focused Features

- **Measurable Outcomes**: Project descriptions include metrics and results
- **Technical Skills**: Comprehensive skills section with proficiency levels
- **Leadership Experience**: Emphasis on team coordination and project management
- **Professional Timeline**: Clear career progression and achievements
- **Contact CTAs**: Multiple ways for employers to reach out
- **Resume Download**: Easy access to detailed CV

## 🔄 Maintenance

### Regular Updates
- Update project portfolio quarterly
- Refresh experience section with new roles
- Keep skills section current with new technologies
- Update contact information as needed

### Performance Monitoring
- Check Lighthouse scores monthly
- Monitor loading times
- Update dependencies regularly
- Test on new devices/browsers

## 📞 Support

For questions about customization or deployment:
- Check the component comments for implementation details
- Review Tailwind CSS documentation for styling
- Consult GSAP documentation for animation customization
- Test thoroughly on multiple devices before deployment

---

**Built with ❤️ using React, Tailwind CSS, and GSAP**