import { SlackPost } from './SlackPost';
import { OutputApi } from './OutputApi';
import { Mention } from './Action/Mention';
import { SetAtode } from './Action/SetAtode';
import { Json } from './Json';

export class SlackBot {
	outputApi: OutputApi;
	parameter: Json;
	constructor(outputApi: OutputApi, parameter: Json) {
		this.outputApi = outputApi;
		this.parameter = parameter;
	}

	run() {
		const actions = [
			new Mention(this.outputApi),
			new SetAtode(this.outputApi)
		]

		actions.forEach((v) => {
			if (v.match(this.parameter)) {
				v.do();
			}
		})

		// this.postText(JSON.stringify(this.parameter.object, null, '    '));
		// const contents = JSON.parse(this.parameter.get('postData.contents'));
		// this.postText(JSON.stringify(contents, null, '    '));

	}

	postText(text: String) {
		this.outputApi.sendMessage(text);
	}

	postEphemeral(text: String, userId: String) {
		this.outputApi.sendEphemeral(text, userId);
	}
}
