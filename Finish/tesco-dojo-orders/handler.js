'use strict';

var AWS = require('aws-sdk');  
AWS.config.region = 'eu-west-1';
var sns = new AWS.SNS();
const request = require("request-promise-native");
const GetItems = (arr) => arr.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 1)

module.exports.order = async (event, context, callback) => {
  const cafe = await request({url:process.env.MENU_JSON_URL, json:true});
    
  const order = {
    coffee: GetItems(cafe.menu.coffee),
    cake: GetItems(cafe.menu.cake)
  }

  await sns.publish({
    TopicArn: process.env.TESCO_DOJO_ORDERS_TOPIC_ARN,
    Message: JSON.stringify(order)
  }).promise();

  callback(null, { message: 'Order Sent!', event });
};
