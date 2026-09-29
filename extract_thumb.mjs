import fs from 'fs';

const content = fs.readFileSync('src/assets/Jordan 2076 - Sponsors logos/Silver Sponsor/vbc logo .pdf', 'latin1');
const match = content.match(/<xmpGImg:image>([\s\S]*?)<\/xmpGImg:image>/);

if (match) {
  const cleanB64 = match[1].replace(/\s/g, '');
  const buf = Buffer.from(cleanB64, 'base64');
  fs.writeFileSync('vbc_xmp_thumb.jpg', buf);
  console.log('Saved vbc_xmp_thumb.jpg, size:', buf.length);
} else {
  console.log('No xmpGImg:image found');
}
