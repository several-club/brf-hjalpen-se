/* eslint-disable */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.brf-guide.se';

function getBlogPosts() {
  try {
    const dataPath = path.join(__dirname, '..', 'src', 'data', 'blog.ts');
    const content = fs.readFileSync(dataPath, 'utf8');
    const slugRegex = /slug:\s*'([^']+)'/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    return slugs;
  } catch (e) {
    return [];
  }
}

function buildSitemap() {
  const staticPaths = ['/', '/guider', '/blogg', '/faq'];
  const blogSlugs = getBlogPosts();
  const urls = [
    ...staticPaths.map((p) => `${BASE_URL}${p}`),
    ...blogSlugs.map((slug) => `${BASE_URL}/blogg/${slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
}

buildSitemap();


