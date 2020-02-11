import { SlackPost } from './SlackPost';
import { OutputApi } from './OutputApi';

export class SlackBot {
	outputApi: OutputApi;
	slackPost: SlackPost;
	constructor(outputApi: OutputApi, parameter: object) {
		this.outputApi = outputApi;
		this.slackPost = new SlackPost(parameter);
	}

	do() {
		if (this.slackPost.isBotPost()) return;
		let contents = this.slackPost.getContents();
		let text = this.slackPost.getText();
		this.postText(text);
		this.postText(JSON.stringify(contents, null, '    '));
	}

	postText(text: String) {
		this.outputApi.send(text);
	}
}
