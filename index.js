const fs = require('fs');
const {isValidFolderName} = require('./util/is-valid-folder-name/');

// Get directory name
const dir = process.argv.slice(2);

// Check directory is a string, and exists
if (!isValidFolderName(dir)) {
  console.error('ERROR:\nInvalid folder name - must contain only alpha-numeric characters, underscores and hyphens');

  return;
}

// Set folder as directory
const folder = `./${dir}`;

// Export folder name
module.exports = {
  folder
};

// Create directory
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}
else {
  console.error('ERROR:\nDirectory already exists (aborting)');

  return;
}

console.log('Success!');
