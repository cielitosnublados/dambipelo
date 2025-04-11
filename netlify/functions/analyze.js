const cloudinary = require('cloudinary').v2;

exports.handler = async (event) => {
  // Configure with environment variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  try {
    // Parse the uploaded file
    const data = JSON.parse(event.body);
    const file = data.file; // Base64-encoded image
    
    // Upload to Cloudinary with AI detection
    const result = await cloudinary.uploader.upload(file, {
      detection: 'adv_face',
      categorization: 'google_rekognition_face_detection'
    });

    // Extract hair color (simplified example)
    const hairColor = result.detection.face.attributes.hair_color[0].color;
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        name: hairColor.name,
        color: hairColor.hex
      })
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};