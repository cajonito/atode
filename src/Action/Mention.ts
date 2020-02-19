import { Json } from '../Json'
import { Action } from '../Action'

export class Mention extends Action {
  targetUserIds: string[] = [];

  match(parameter: Json): boolean {
    if (!parameter.get('postData.contents')) return false;
    const contents = new Json(JSON.parse(parameter.get('postData.contents')));
    if (contents.get('event.subtype') == 'bot_message') return false;
    if (contents.get('event.bot_id')) return false;

    const richTextSection: any[] | undefined = contents.get('event.blocks.0.elements.0.elements');
    if (!richTextSection) return false

    const userIdList = richTextSection.filter((v) => {
      return v.type == 'user';
    }).map((v) => {
      return v.user_id;
    })
    this.targetUserIds = Array.from(new Set(userIdList));
    if (this.targetUserIds.length == 0) return false;

    this.isMatched = true;
    return true;
  }

  do() {
    if (!this.isMatched) return;

    this.targetUserIds.forEach((v) => {
      this.outputApi.sendEphemeral('hi', v)
    })
  }
}