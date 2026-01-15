const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const { markedHighlight } = require('marked-highlight');
const { gfmHeadingId } = require('marked-gfm-heading-id');
const frontMatter = require('front-matter');
const hljs = require('highlight.js');

// Configure marked with extensions
marked.use(
  {
    mangle: false
  },
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }),
  gfmHeadingId()
);

// Paths
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');
const markdownDir = path.join(srcDir, 'markdown');
const templatesDir = path.join(srcDir, 'templates');
const cssDir = path.join(srcDir, 'css');
const jsDir = path.join(srcDir, 'js');

// Ensure dist directory exists
fs.ensureDirSync(distDir);

// Copy static assets
fs.copySync(cssDir, path.join(distDir, 'css'));
fs.copySync(jsDir, path.join(distDir, 'js'));

// Copy any images if they exist
const imagesDir = path.join(srcDir, 'images');
if (fs.existsSync(imagesDir)) {
  fs.copySync(imagesDir, path.join(distDir, 'images'));
}

// Read templates
const mainTemplate = fs.readFileSync(path.join(templatesDir, 'main.html'), 'utf8');
const pageTemplate = fs.readFileSync(path.join(templatesDir, 'page.html'), 'utf8');

// Helper function to generate app cards HTML
function generateAppCardsHTML(appsData) {
  const githubIconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
  const youtubeIconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
  const webIconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';

  const iconMap = {
    github: githubIconSVG,
    youtube: youtubeIconSVG,
    web: webIconSVG
  };

  // Category icons and order
  const categoryConfig = {
    'Games': { emoji: '🎮', order: 1 },
    'Writing Tools': { emoji: '✍️', order: 2 },
    'Tech Demos': { emoji: '🔬', order: 3 }
  };

  // Group apps by category
  const appsByCategory = {};
  appsData.forEach(app => {
    const category = app.category || 'Other';
    if (!appsByCategory[category]) {
      appsByCategory[category] = [];
    }
    appsByCategory[category].push(app);
  });

  // Sort categories by defined order
  const sortedCategories = Object.keys(appsByCategory).sort((a, b) => {
    const orderA = categoryConfig[a]?.order || 999;
    const orderB = categoryConfig[b]?.order || 999;
    return orderA - orderB;
  });

  let html = '';

  // Generate HTML for each category
  sortedCategories.forEach(category => {
    const config = categoryConfig[category] || { emoji: '📁', order: 999 };

    html += `
<div class="app-category">
  <h2 class="category-header">
    <span class="category-emoji">${config.emoji}</span>
    ${category}
  </h2>
  <div class="apps-grid">
`;

    appsByCategory[category].forEach(app => {
      html += `
<div class="app-card">
  <div class="app-image">
    <img src="../images/apps/${app.image}" alt="${app.title} Screenshot">
  </div>
  <div class="app-content">
    <h3>${app.title}</h3>
    <p>${app.description}</p>
    <div class="app-links">
`;

      app.links.forEach(link => {
        const icon = iconMap[link.type] || githubIconSVG;
        html += `      <a href="${link.url}" target="_blank" rel="noopener noreferrer">
        ${icon}
        ${link.label}
      </a>
`;
      });

      html += `    </div>
  </div>
</div>
`;
    });

    html += `  </div>
</div>
`;
  });

  return html;
}

// Process markdown files
const markdownFiles = fs.readdirSync(markdownDir)
  .filter(file => file.endsWith('.md'));

markdownFiles.forEach(mdFile => {
  console.log(`Processing ${mdFile}...`);

  // Read markdown file
  const mdContent = fs.readFileSync(path.join(markdownDir, mdFile), 'utf8');

  // Parse front matter
  const { attributes, body } = frontMatter(mdContent);

  // Convert markdown to HTML
  let htmlContent = marked.parse(body);

  // Special handling for apps.md - append app cards from JSON data
  if (mdFile === 'apps.md') {
    const appsDataPath = path.join(srcDir, 'apps-data.json');
    if (fs.existsSync(appsDataPath)) {
      const appsData = JSON.parse(fs.readFileSync(appsDataPath, 'utf8'));
      htmlContent += '\n' + generateAppCardsHTML(appsData);
    }
  }

  // Fill page template
  let pageHtml = pageTemplate
    .replace('{{title}}', attributes.title || 'Untitled')
    .replace('{{content}}', htmlContent);

  // Add any additional front matter content
  Object.keys(attributes).forEach(key => {
    if (key !== 'title') {
      pageHtml = pageHtml.replace(`{{${key}}}`, attributes[key] || '');
    }
  });

  // Fill main template
  let fullHtml = mainTemplate
    .replace('{{title}}', attributes.title || 'Untitled')
    .replace('{{description}}', attributes.description || '')
    .replace('{{page_content}}', pageHtml);

  // Determine output path
  const outputFilename = mdFile.replace('.md', '.html');
  const outputPath = path.join(distDir, outputFilename);

  // Special case for index.md
  if (mdFile === 'index.md') {
    fs.writeFileSync(path.join(distDir, 'index.html'), fullHtml);
  } else {
    // Create directory for the page if it doesn't exist
    const pageName = mdFile.replace('.md', '');
    const pageDir = path.join(distDir, pageName);
    fs.ensureDirSync(pageDir);
    fs.writeFileSync(path.join(pageDir, 'index.html'), fullHtml);
  }
});

console.log('Build completed successfully!'); 