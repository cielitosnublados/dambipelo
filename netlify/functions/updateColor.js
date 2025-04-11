const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const { name, color } = JSON.parse(event.body);
  fs.writeFileSync(path.join(__dirname, 'color.json'), JSON.stringify({ name, color }));
  return { statusCode: 200, body: 'Updated!' };
};