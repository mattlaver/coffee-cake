'use strict';

const SplunkLogger = require("./splunkLogger");
const url = "https://input-prd-p-rz2fczzz6d9w.cloud.splunk.com:8088/services/collector/event";
const token = "3FC0D013-2F4B-4E6A-9229-95CA28A3C8CD";

module.exports.receipt = (event, context, callback) => {
 // const order = parseMessage(event);

  const receipt = {
    operatorId: "My Funky Name",
    total: 1.23
  }

  let logger = new SplunkLogger(token, url);

  logger.logWithTime(Date.now(), JSON.stringify(receipt), context);

  logger.flushAsync((error, response) => {
    if (error) {
      callback(error);
    } else {
      console.log(`Response from Splunk:\n${response}`);
      callback(null, receipt);
    }
  });
};

const parseMessage = snsMessage => {
  let record = snsMessage.Records[0];
  let message = record.Sns.Message;
  return JSON.parse(message);
};