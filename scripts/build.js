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
  const htmlContent = marked.parse(body);
  
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