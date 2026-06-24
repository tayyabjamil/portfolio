const fs = require('fs');
const path = require('path');
const BASE = '/portfolio';

// Patch index.html
const indexPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html
  .replace(/src="\//g, `src="${BASE}/`)
  .replace(/href="\//g, `href="${BASE}/`);
fs.writeFileSync(indexPath, html);
console.log('Patched index.html');

// Patch JS bundle
const bundleDir = path.join(__dirname, '../dist/_expo/static/js/web');
const bundles = fs.readdirSync(bundleDir).filter(f => f.endsWith('.js'));
bundles.forEach(file => {
  const filePath = path.join(bundleDir, file);
  let js = fs.readFileSync(filePath, 'utf8');
  js = js.replace(/\"\/assets\//g, `"${BASE}/assets/`);
  fs.writeFileSync(filePath, js);
  console.log(`Patched ${file}`);
});
