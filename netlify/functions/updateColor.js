const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const { name, color } = JSON.parse(event.body);
  const filePath = path.join(__dirname, '..', 'color.json');
  fs.writeFileSync(filePath, JSON.stringify({ name, color }));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Updated!' })
  };
};