'use strict';

var AWS = require('aws-sdk');  
AWS.config.region = 'eu-west-1';
var sns = new AWS.SNS();

module.exports.order = async (event, context, callback) => {
 
  // 1. Get the Menu from the url


  // 2. Populate an object with a selection of coffee & cake, e.g.
    
  const order = {
    coffee: // array of coffee,
    cake: // array of cake)
  }

  // post it to SNS
  await sns.publish({
    TopicArn: process.env.TESCO_DOJO_ORDERS_TOPIC_ARN,
    Message: JSON.stringify(order)
  }).promise();

  callback(null, { message: 'Order Sent!', event });
};
