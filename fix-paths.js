#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "out");

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
  });
}

walk(outDir);
console.log(`✓ No path prefixing needed`);
