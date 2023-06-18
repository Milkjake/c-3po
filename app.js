const { validateSlackRequest } = require("./security");
const { processRequest } = require("./processor");

const signingSecret = process.env.SLACK_SIGNING_SECRET;

exports.handler = (event, context, callback) => {
  if (validateSlackRequest(event, signingSecret)) {
    const body = JSON.parse(event.body);
    switch (body.type) {
      case "url_verification":
        callback(null, body.challenge);
        break;
      case "event_callback":
        processRequest(body, callback);
        break;
      default:
        callback(null);
    }
  } else {
    callback("verification failed");
  }
};
