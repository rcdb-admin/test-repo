'use strict';

const qs = require('qs');

/*
 * Echo command for testing
 */
module.exports.echo = function (event, context, callback) {

  // Parse queryString body into JSON (Slack slash commands send body in queryString format)
  const jsonBody = qs.parse(event.body);

  // Construct a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(jsonBody, null, 2),
  };

  // Return response
  callback(null, response);
};

module.exports.ls = function (event, context, callback) {
  const commands = [
    { name: '/whitelist', description: 'How to get in the Santiment community whitelist' },
    { name: '/whitepaper', description: 'Displays the link to our latest whitepaper' },
  ]

  const stringifiedCommands = commands.map(i => `*${i.name}* — _${i.description}_`);
  const responseText = stringifiedCommands.join('\n');

  const response = {
    statusCode: 200,
    body: JSON.stringify({ text: responseText }, null, 2),
  };

  callback(null, response);
};

module.exports.whitelist = function (event, context, callback) {
  const string = `
The whitelisting process is now active. Refer to: 
<https://santiment.slack.com/archives/C425URBU2/p1498212088067568>
*WE WILL NOT ASK YOU TO SEND ETH TO US in the whitelisting process.* 
You will provide us an ETH address you own the private keys to and we will include it in.
  `;

  const responseJson = {
    text: string
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseJson, null, 2),
  };

  callback(null, response);
}

module.exports.whitepaper = function (event, context, callback) {
  const string = `
The latest version of our white paper can be found here: 
<https://docs.google.com/document/d/1hHmJQWrPrObSgCA8kTbk-4LgqGbYzukQAjtg5b8jwc0>
  `;

  const responseJson = {
    text: string
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseJson, null, 2),
  };

  callback(null, response);
}
