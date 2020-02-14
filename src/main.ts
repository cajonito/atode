import { SlackBot } from './SlackBot';
import { OutputApiFactory } from './OutputApiFactory';

declare var global: any;

global.doPost = function (e: any) {
	const outputApiFactory = new OutputApiFactory();
	const outputApiSlack = outputApiFactory.create('slack');
	const slackBot = new SlackBot(outputApiSlack, e);
	slackBot.do();
};

var postByIncomingHook = (text: string) => {
	let url: string | null = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
	if (url === null) return;
	let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
		"method": 'post',
		"contentType": 'application/json',
		"payload": JSON.stringify({ "text": text })
	};
	UrlFetchApp.fetch(url, options);
}