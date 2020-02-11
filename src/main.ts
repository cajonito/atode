import { SlackBot } from './SlackBot';
import { OutputApiFactory } from './OutputApiFactory';

declare var global: any;

global.doPost = function (e: any) {
	const outputApiFactory = new OutputApiFactory();
	const outputApiSlack = outputApiFactory.create('slack');
	const slackBot = new SlackBot(outputApiSlack, e);
	slackBot.do();
};