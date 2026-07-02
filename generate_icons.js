const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'icon.svg');

async function generate() {
  console.log('Generating favicon assets...');
  
  // Make sure public folder exists
  if (!fs.existsSync(path.join(__dirname, 'public'))) {
    fs.mkdirSync(path.join(__dirname, 'public'));
  }
  
  // Make sure src/app folder exists
  if (!fs.existsSync(path.join(__dirname, 'src', 'app'))) {
    fs.mkdirSync(path.join(__dirname, 'src', 'app'), { recursive: true });
  }

  // 1. Generate PNGs from SVG
  await sharp(svgPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    
  await sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, 'public', 'icon-192.png'));
    
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, 'public', 'icon-512.png'));

  // 2. Generate favicon.ico (using 32x32 PNG structure)
  await sharp(svgPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon.ico'));
    
  // Copy favicon to src/app as well
  fs.copyFileSync(
    path.join(__dirname, 'public', 'favicon.ico'),
    path.join(__dirname, 'src', 'app', 'favicon.ico')
  );
  
  console.log('Favicon assets generated successfully!');
}

generate().catch(console.error);
