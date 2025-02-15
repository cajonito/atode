import { SlackPost } from './SlackPost';
import { OutputApi } from './OutputApi';
import { Mention } from './Action/Mention';
import { SetAtode } from './Action/SetAtode';
import { Json } from './Json';
import { Config } from './Config';

export class SlackBot {
	parameter: Json;
	outputApi: OutputApi;
	config: Config;
	constructor(parameter: Json, outputApi: OutputApi, config: Config) {
		this.parameter = parameter;
		this.outputApi = outputApi;
		this.config = config;
	}

	run() {
		const actions = [
			new Mention(this.outputApi, this.config),
			new SetAtode(this.outputApi, this.config)
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
