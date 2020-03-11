/**
 *  Check directory name is valid (to keep things simple, only allow
 *  for alpha-numerical characters, underscores and hyphens)
 * 
 *  @param {String} directory 
 */
function isValidFolderName(directory){
  if (!directory) throw new Error('No directory supplied');

  return /^[a-zA-Z0-9\-\_]+$/g.test(directory);
}

module.exports = {
  isValidFolderName
};
