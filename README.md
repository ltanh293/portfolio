# Portfolio Website

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript using Vite.

## Features

- 🎨 Modern glassmorphism design with green gradient theme
- 📱 Fully responsive design for all devices
- ✨ Smooth scroll animations and hover effects
- 🎯 Interactive work history cards with detailed information
- 🚀 Optimized for performance and SEO

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Vite (Build tool)
- GitHub Pages (Hosting)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/portfolio/`

### Method 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be automatically deployed when you push to the main branch

## Project Structure

```
portfolio/
├── images/           # Image assets
│   ├── avata/       # Avatar images
│   ├── fonterra/    # Company logos
│   ├── masan/       # Company logos
│   ├── nestle/      # Company logos
│   └── vinamilk/    # Company logos
├── src/             # Source files
│   ├── main.js      # Main JavaScript file
│   └── style.css    # Custom styles
├── index.html       # Main HTML file
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md        # This file
```

## Customization

### Changing Colors and Theme

Edit the CSS variables in `src/style.css` to customize the color scheme:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `src/style.css`
3. Add JavaScript functionality in `src/main.js`

### Updating Content

- **Personal Information**: Update the content in `index.html`
- **Work History**: Modify the `workData` array in `src/main.js`
- **Images**: Replace images in the `images/` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Le Tuan Anh - [LinkedIn](https://www.linkedin.com/in/tuan-anh-le-62a429202/)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)