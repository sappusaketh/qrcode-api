const QRCode = require('qrcode');

const QR_Code = {
  async get(code) {
    return new Promise(function(resolve, reject) {
      QRCode.toDataURL(makeid(100), function(err, url) {
        code = url;
        resolve(code);
      });
    });
  }
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


module.exports = QR_Code;
