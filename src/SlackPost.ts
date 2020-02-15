export class SlackPost {
	parameter: any;
	constructor(parameter: any) {
		this.parameter = parameter;
	}

	isBotPost() {
		let contents = this.getContents();
		return contents['event']['subtype'] == 'bot_message';
	}

	isInterectiveMessage() {
		return Object.keys(this.parameter['parameter']).length > 0;
	}

	getRawJson() {
		return this.parameter;
	}

	getPayload() {
		return JSON.parse(this.parameter['parameter']['payload']);
	}

	getContents() {
		return JSON.parse(this.parameter['postData']['contents']);
	}

	getText() {
		let contents = this.getContents();
		return contents['event']['text'];
	}

	hasMention(): boolean {
		return this.getMentionTargets().length > 0;
	}

	getMentionTargets(): string[] {
		const contents = this.getContents();
		const richTextSection: any[] = contents["event"]["blocks"][0]["elements"][0]["elements"];
		const userIdList = richTextSection.filter((v) => {
			return v["type"] == 'user';
		}).map((v) => {
			return v["user_id"];
		})
		return Array.from(new Set(userIdList));
	}

	getValueSafelyFromObject(path: string, object: { [key: string]: any }): any {
		let lookup: any = Object.assign({}, object);
		const keys: string[] = path.split('.');
		for (let i = 0; i < keys.length; i++) {
			if (!(keys[i] in lookup)) return undefined;
			lookup = lookup[keys[i]];
		}
		return lookup;
	}
}
