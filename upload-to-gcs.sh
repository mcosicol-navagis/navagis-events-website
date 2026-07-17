#!/bin/bash
set -e

BUCKET="gs://maptheway-website"

echo "🧹 Cleaning previous build..."
rm -rf .next out

echo "🔨 Building static export..."
npm run build

echo "📊 Output: $(find out -type f | wc -l) files, $(du -sh out | cut -f1)"

echo "🗑️  Clearing GCS bucket..."
gsutil -m rm -r "$BUCKET/**" 2>/dev/null || echo "(bucket was empty)"

echo "📤 Uploading to GCS..."
gsutil -m cp -r out/* "$BUCKET/"

echo ""
echo "🎉 Deployed to: https://storage.googleapis.com/${BUCKET#gs://}/index.html"
