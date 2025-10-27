#!/usr/bin/env node
// Simple HTML->PDF generator using puppeteer. Renders templates/mallar/*.html to public/mallar/*.pdf

const fs = require('fs');
const path = require('path');

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function generate() {
  const templateDir = path.resolve(__dirname, '../templates/mallar');
  const outDir = path.resolve(__dirname, '../public/mallar');
  await ensureDir(outDir);

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    console.error('Puppeteer is required. Install with: npm i -D puppeteer');
    process.exit(1);
  }

  const files = (await fs.promises.readdir(templateDir)).filter((f) => f.endsWith('.html'));
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const file of files) {
    const htmlPath = path.join(templateDir, file);
    const html = await fs.promises.readFile(htmlPath, 'utf8');
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfName = file.replace(/\.html$/, '.pdf');
    const pdfPath = path.join(outDir, pdfName);
    await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
    console.log('Generated', pdfPath);
  }

  await browser.close();
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});


