import { SlackBot } from './SlackBot';
import { OutputApiFactory } from './OutputApiFactory';
import { Json } from './Json';

declare var global: any;

global.doPost = function (e: any) {
	const outputApiFactory = new OutputApiFactory();
	const outputApiSlack = outputApiFactory.create('slack');
	const slackBot = new SlackBot(outputApiSlack, new Json(e));
	slackBot.run();
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