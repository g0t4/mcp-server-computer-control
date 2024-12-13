const screenshot = require('screenshot-desktop');
const path = require('path');

// Capture the screenshot
screenshot({ format: 'png' })
  .then((img) => {
    const outputPath = path.join(__dirname, 'screenshot.png');
    require('fs').writeFileSync(outputPath, img);
    console.log(`Screenshot saved to ${outputPath}`);
  })
  .catch((err) => {
    console.error('Error taking screenshot:', err);
  });
