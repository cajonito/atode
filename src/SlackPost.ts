export class SlackPost {
	parameter: { [key: string]: any };
	constructor(parameter: { [key: string]: any }) {
		this.parameter = parameter;
	}

	isBotPost(): boolean {
		let contents = this.getContents();
		return this.getValueSafelyFromObject('event.subtype', contents) == 'bot_message';
	}

	isInterectiveMessage(): boolean {
		return Object.keys(this.getValueSafelyFromObject('parameter', this.parameter)).length > 0;
	}

	getRawJson(): { [key: string]: any } {
		return this.parameter;
	}

	getPayload(): { [key: string]: any } {
		try {
			return JSON.parse(this.getValueSafelyFromObject('parameter.payload', this.parameter));
		} catch {
			return {}
		}
	}

	getContents(): { [key: string]: any } {
		try {
			return JSON.parse(this.getValueSafelyFromObject('postData.contents', this.parameter));
		} catch {
			return {}
		}
	}

	getText(): string {
		let contents = this.getContents();
		return this.getValueSafelyFromObject('event.text', contents);
	}

	hasMention(): boolean {
		return this.getMentionTargets().length > 0;
	}

	getMentionTargets(): string[] {
		const contents = this.getContents();
		const richTextSection: any[] = this.getValueSafelyFromObject('event.blocks.0.elements.0.elements', contents)
		const userIdList = richTextSection.filter((v) => {
			return v.type == 'user';
		}).map((v) => {
			return v.user_id;
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
