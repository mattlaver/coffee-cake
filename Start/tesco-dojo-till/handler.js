'use strict';

const SplunkLogger = require("./splunkLogger");

module.exports.receipt = (event, context, callback) => {
  // parse the message received from SNS
  const order = parseMessage(event);

  // calculate the total price of the coffee and cake
  const theTotal = 0;


  const receipt = {
    operatorId: "<<enter a value that identifies you here>>",
    total: theTotal
  }

  // log to splunk
  let logger = new SplunkLogger(process.env.SPLUNK_TOKEN, process.env.SPLUNK_URL);

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