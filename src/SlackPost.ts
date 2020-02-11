export class SlackPost {
	parameter: any;
	constructor(parameter: any) {
		this.parameter = parameter;
	}

	isBotPost() {
		let contents = this.getContents();
		return contents['event']['subtype'] == 'bot_message';
	}

	getRawJson() {
		return this.parameter;
	}

	getContents() {
		return JSON.parse(this.parameter['postData']['contents']);
	}

	getText() {
		let contents = this.getContents();
		return contents['event']['text'];
	}
}
