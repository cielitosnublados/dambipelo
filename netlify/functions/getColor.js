const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  try {
    const filePath = path.join(__dirname, '..', 'color.json');
    const colorData = JSON.parse(fs.readFileSync(filePath));
    return {
      statusCode: 200,
      body: JSON.stringify(colorData)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};