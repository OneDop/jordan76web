const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('src/assets/Jordan 2076 - Sponsors logos/Silver Sponsor/vbc logo .pdf');
const content = buf.toString('latin1');

console.log('PDF length:', buf.length);

// Find streams
const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
let match;
let count = 0;
while ((match = streamRegex.exec(content)) !== null) {
  count++;
  const rawData = Buffer.from(match[1], 'latin1');
  try {
    const uncompressed = zlib.inflateSync(rawData);
    console.log(`Stream ${count} uncompressed length:`, uncompressed.length);
    const txt = uncompressed.toString('utf8');
    console.log(`Stream ${count} sample:`, txt.slice(0, 300));
    fs.writeFileSync(`scratch_stream_${count}.txt`, uncompressed);
  } catch (e) {
    console.log(`Stream ${count} could not be inflated (might not be zlib):`, e.message);
  }
}
