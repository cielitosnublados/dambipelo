const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const colorData = JSON.parse(fs.readFileSync(path.join(__dirname, 'color.json')));
  return { statusCode: 200, body: JSON.stringify(colorData) };
};
};