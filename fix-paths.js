#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BUCKET_PATH = '/maptheway-website';
const outDir = path.join(__dirname, 'out');

function fixHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Negative lookbehind prevents double-prefixing if script is run more than once.
  // Broad replacement covers HTML attributes AND inline RSC __next_f.push payload.
  content = content.replace(/(?<!\/maptheway-website)\/_next\//g, `${BUCKET_PATH}/_next/`);
  content = content.replace(/(?<!\/maptheway-website)\/assets\//g, `${BUCKET_PATH}/assets/`);
  content = content.replace(/(?<!\/maptheway-website)\/favicon\.ico/g, `${BUCKET_PATH}/favicon.ico`);

  fs.writeFileSync(filePath, content);
  console.log(`✓ ${path.relative(__dirname, filePath)}`);
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (file.endsWith('.html')) fixHtmlFile(full);
  });
}

walk(outDir);
console.log(`✓ All paths prefixed with ${BUCKET_PATH}`);
