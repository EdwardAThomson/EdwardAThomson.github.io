# Ed Thomson's Personal Website

A modern, fast-loading personal website built with markdown and static HTML generation.

## Features

- **Markdown-Based Content:** Write content in markdown format for easy editing
- **Fast & Lightweight:** Static HTML generation for optimal performance
- **Modern Design:** Responsive layout with clean, professional styling
- **Dark Mode Support:** Automatic dark mode detection with manual toggle
- **No Database Required:** Everything is file-based for simplicity

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/EdwardAThomson/EdwardAThomson.github.io.git
   cd EdwardAThomson.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Previewing Locally

To build the site and preview it locally:

```bash
npm run build
npm run start
```

This will:
1. Build the site from markdown files into the `dist` directory.
2. Start a simple web server to serve the `dist` directory. You can typically view the site at `http://localhost:8080`.

### Creating Content

Content is written in markdown format in the `src/markdown` directory:

1. Create a new markdown file for each page (e.g., `about.md`, `blockchain.md`)
2. Add front matter at the top of each file:
   ```markdown
   ---
   title: Page Title
   description: Page description for SEO
   ---
   
   # Your Content Here
   ```
3. Write your content using markdown syntax

### Building for Production

To build the site for production:

```bash
npm run build
```

This will generate static HTML files in the `dist` directory.

## Deployment with GitHub Pages

This site is designed to be deployed automatically using GitHub Pages.

Your workflow is simple:
1. Make changes to your source files (in `src/`, `templates/`, etc.).
2. Build the final site by running `npm run build`.
3. Commit and push all changes (including the updated `dist/` directory) to your `main` branch.

### GitHub Pages Configuration

You only need to configure this once in your GitHub repository's settings:
1. Go to your repository on GitHub and navigate to **Settings** > **Pages**.
2. Under "Build and deployment", for the "Source", select **Deploy from a branch**.
3. In the "Branch" section, select `main` and `/dist` folder, then click **Save**.

GitHub will now automatically publish any changes you push to the `dist` directory on your `main` branch.

## Project Structure

```
├── dist/                 # Generated output files
├── scripts/              # Build script
├── src/                  # Source files
│   ├── css/              # CSS styles
│   ├── js/               # JavaScript files
│   ├── markdown/         # Markdown content files
│   └── templates/        # HTML templates
└── package.json          # Project dependencies and scripts
```

## Customization

### Styling

The main styles are defined in `src/css/style.css`. The website uses CSS variables for colors, fonts, and spacing, making it easy to customize the appearance.

### Templates

HTML templates are located in the `src/templates` directory:

- `main.html`: The main layout template
- `page.html`: Template for individual pages

### JavaScript

The site includes several JavaScript enhancements:

- Dark mode toggle
- Table of contents generator
- Mobile menu toggle
- Lazy loading for images
- Code block copy button

## License

This project is licensed under the MIT License - see the LICENSE file for details. 