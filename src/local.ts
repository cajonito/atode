import { SlackBot } from './SlackBot';
import { OutputApiFactory } from './OutputApiFactory';

var main = () => {
  const outputApiFactory = new OutputApiFactory();
  const outputApiConsole = outputApiFactory.create('consle');
  const e = getTestData();
  const slackBot = new SlackBot(outputApiConsole, e);
  slackBot.run();
};

var getTestData = () => {
  const fs = require('fs');
  let contents = fs.readFileSync('./tests/data/mention.json');

  return {
    parameter: {},
    contextPath: '',
    contentLength: 0, //dummy
    queryString: '',
    parameters: {},
    postData: {
      type: 'application/json',
      length: 0, //dummy
      contents: JSON.stringify(JSON.parse(contents)),
      name: 'postData'
    }
  };
};

main();
