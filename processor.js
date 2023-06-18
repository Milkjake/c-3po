const axios = require("axios");
const { getQuote } = require("./quote");

const token = process.env.SLACK_BOT_TOKEN;

exports.processRequest = (body, callback) => {
  switch (body.event.type) {
    case "app_mention":
      processAppMention(body, callback);
      break;
    default:
      callback(null);
  }
};

const processAppMention = (body, callback) => {
  const { text, channel, user } = body.event;
  const message = {
    channel: channel,
  };

  if (new RegExp("hello |hi ", "i").test(text)) {
    message.text = `A pleasure to meet you <@${user}>. I am C-3PO, Human-Cyborg Relations.`;
  } else {
    message.text = getQuote();
  }

  axios({
    method: "post",
    url: "https://slack.com/api/chat.postMessage",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    data: message,
  })
    .then((response) => {
      callback(null);
    })
    .catch((error) => {
      callback("failed to process app_mention");
    });
};
