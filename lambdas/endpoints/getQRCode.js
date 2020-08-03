const Responses = require('../commons/API_Responses');
const QR_Code = require('../commons/QR_Code');

exports.handler = async event => {
  console.log('event', event);

  // if (!event.pathParameters || !event.pathParameters.ID) {
  //   // failed without an ID
  //   return Responses._400({ message: 'missing the ID from the path' });
  // }
  try {
    var code = ""
    await QR_Code.get(code)
  } catch (error) {
    console.error(error)
  }

  // if (!code) {
  //   return Responses._400({ message: "Could not get QR Code" });
  // }

  return Responses._200({ message: `${code}` });
};


var code = QR_Code.get().then(
  console.log(code)
)
