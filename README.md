# Portfolio Website

A modern, responsive portfolio website built with Vite, Tailwind CSS, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: JavaScript-powered work history with pagination
- **Interactive Modals**: Detailed information popups for work experiences
- **Smooth Animations**: CSS transitions and hover effects
- **Modern UI**: Clean, professional design with gradient overlays
- **Accessibility**: Focus states and semantic HTML

## 📁 Project Structure

```
portfolio/
├── images/                 # Image assets
│   ├── fonterra/          # Fonterra company images
│   ├── masan/             # Masan company images
│   └── vinamilk/          # Vinamilk company images
├── src/
│   ├── main.js            # JavaScript logic and data
│   └── style.css          # Custom CSS styles
├── index.html             # Main HTML file
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🛠️ Code Architecture

### JavaScript (`src/main.js`)
- **Data Management**: Centralized work history data
- **Template Rendering**: Dynamic card generation
- **Pagination Logic**: Page navigation and state management
- **Modal Management**: Popup functionality
- **Event Handling**: User interactions

### CSS (`src/style.css`)
- **Custom Animations**: Fade-in effects and transitions
- **Component Styles**: Reusable button and card styles
- **Responsive Utilities**: Mobile-first responsive design
- **Accessibility**: Focus states and keyboard navigation
- **Print Styles**: Optimized for printing

### HTML (`index.html`)
- **Semantic Structure**: Clean, accessible markup
- **Component Templates**: Placeholder containers for dynamic content
- **Modal Structure**: Popup dialogs for detailed information

## 🎯 Key Improvements After Refactoring

1. **Separation of Concerns**: HTML, CSS, and JavaScript are now properly separated
2. **DRY Principle**: Eliminated code duplication with template functions
3. **Maintainability**: Centralized data management makes updates easier
4. **Scalability**: Easy to add new work experiences or modify existing ones
5. **Performance**: Optimized rendering with efficient DOM manipulation
6. **Accessibility**: Improved focus management and semantic structure

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

## 📝 Adding New Work Experience

To add a new work experience, simply update the `workData` array in `src/main.js`:

```javascript
{
  id: 'unique-id',
  company: 'COMPANY NAME',
  logo: './path/to/logo.svg',
  background: './path/to/background.jpg',
  tags: ['#Tag1', '#Tag2'],
  position: 'Job Title',
  department: 'Department',
  period: 'MM/YYYY to MM/YYYY',
  description: 'Job description',
  modalId: 'modal-unique-id'
}
```

## 🎨 Customization

- **Colors**: Modify Tailwind classes or add custom colors in `tailwind.config.js`
- **Animations**: Update CSS animations in `src/style.css`
- **Layout**: Adjust grid and spacing in HTML classes
- **Content**: Update text content in HTML or JavaScript data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).