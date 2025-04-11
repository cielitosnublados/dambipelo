const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
console.log('Received update request with body:', event.body);
  try {
    // Parse the incoming data
    const { name, color } = JSON.parse(event.body);
    
    // Create the full file path
    const filePath = path.join(process.cwd(), 'color.json');
    
    // Write the new color data
    fs.writeFileSync(filePath, JSON.stringify({ name, color }));
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Color updated!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: error.message,
        receivedData: event.body // Helps debug what was received
      })
    };
  }
};