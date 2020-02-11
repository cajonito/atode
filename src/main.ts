import { SlackBot } from './SlackBot';
import { OutputApiFactory } from './OutputApiFactory';

declare var global: any;

global.doPost = function(e: any) {
	const outputApiFactory = new OutputApiFactory();
	const outputApiSlack = outputApiFactory.create('slack');
	const slackBot = new SlackBot(outputApiSlack, e);
	slackBot.do();
};

global.test = () => {
	const outputApiFactory = new OutputApiFactory();
	const outputApiConsole = outputApiFactory.create('consle');
	const e = getTestData();
	const slackBot = new SlackBot(outputApiConsole, e);
	slackBot.do();
};

var getTestData = () => {
	const fs = require('fs');
	let contents = fs.readFileSync('./tests/data/test.json');

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

global.test();
