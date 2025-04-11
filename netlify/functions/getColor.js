const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  try {
    // Correct path to color.json (go up one level from functions dir)
    const filePath = path.join(__dirname, '..', 'color.json');
    console.log('Looking for color.json at:', filePath); // Debug log
    
    const colorData = JSON.parse(fs.readFileSync(filePath));
    console.log('Found color data:', colorData); // Debug log
    
    return {
      statusCode: 200,
      body: JSON.stringify(colorData)
    };
  } catch (error) {
    console.error('Error in getColor:', error); // Debug log
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        stack: error.stack // Helps trace where error occurred
      })
    };
  }
};