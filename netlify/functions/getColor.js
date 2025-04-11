const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  try {
    // This works everywhere
    const filePath = path.join(process.cwd(), 'color.json');
    const colorData = JSON.parse(fs.readFileSync(filePath));
    
    return {
      statusCode: 200,
      body: JSON.stringify(colorData)
    };
  } catch (error) {
    return {
      statusCode: 200, // Still return 200 but with fallback
      body: JSON.stringify({
        name: "rubio",
        color: "#FFD700"
      })
    };
  }
};