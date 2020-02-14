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
		if (!this.slackPost.hasMention()) return;
		let contents = this.slackPost.getContents();
		this.postText(JSON.stringify(contents, null, '    '));
	}

	postText(text: String) {
		this.outputApi.sendMessage(text);
	}
}
