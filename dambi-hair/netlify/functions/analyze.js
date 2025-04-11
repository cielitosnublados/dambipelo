const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const result = await cloudinary.uploader.upload(data.file, { detection: 'adv_face' });
  const hairColor = result.detection.face.attributes.hair_color[0].color;
  
  fs.writeFileSync('color.json', JSON.stringify({
    name: hairColor.name,
    color: hairColor.hex
  }));

  return { statusCode: 200, body: 'Updated!' };
};