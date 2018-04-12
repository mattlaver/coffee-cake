'use strict';

const SplunkLogger = require("./splunkLogger");

module.exports.receipt = (event, context, callback) => {
  const order = parseMessage(event);

  let cakeTotal = 0;
  order.cake.forEach(cake => {  
    cakeTotal += +cake.price;
  });

  console.log(`Cake Total: ${cakeTotal}`);


  let coffeeTotal = 0;
  order.coffee.forEach(coffee => {  
    coffeeTotal += +coffee.price;
  });

  console.log(`Coffee Total: ${coffeeTotal}`);
  

  const receipt = {
    operatorId: "Matt Wibble",
    total: coffeeTotal + cakeTotal
  }

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