// src/utils.js
import fs from 'fs';

function saveFile(buffer, filePath) {
  fs.writeFileSync(filePath, buffer);
}

export { saveFile };
