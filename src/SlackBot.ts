import { SlackPost } from './SlackPost';
import { OutputApi } from './OutputApi';

export class SlackBot {
	outputApi: OutputApi;
	slackPost: SlackPost;
	constructor(outputApi: OutputApi, parameter: object) {
		this.outputApi = outputApi;
		this.slackPost = new SlackPost(parameter);
	}

	run() {
		if (this.slackPost.isInterectiveMessage()) {
			let payload = this.slackPost.getPayload();
			this.postText(JSON.stringify(payload, null, '    '));
		}
		if (this.slackPost.isBotPost()) return;
		let contents = this.slackPost.getContents();
		if (this.slackPost.hasMention()) {
			let userIds = this.slackPost.getMentionTargets();
			userIds.forEach((v) => {
				this.postEphemeral('hi', v);
			})
		}
		this.postText(JSON.stringify(contents, null, '    '));
	}

	postText(text: String) {
		this.outputApi.sendMessage(text);
	}

	postEphemeral(text: String, userId: String) {
		this.outputApi.sendEphemeral(text, userId);
	}
}
