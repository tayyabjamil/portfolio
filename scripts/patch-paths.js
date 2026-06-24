const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html
  .replace(/src="\//g, 'src="/portfolio/')
  .replace(/href="\//g, 'href="/portfolio/');

fs.writeFileSync(indexPath, html);
console.log('Patched dist/index.html paths for /portfolio base URL');
