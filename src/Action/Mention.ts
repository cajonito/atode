import { Json } from '../Json'
import { Action } from '../Action'

export class Mention implements Action {
  isMatched: boolean = false;
  mentionTargets: string[] = [];

  match(parameter: Json): boolean {
    if (!parameter.get('postData.contents')) return false;
    const contents = new Json(JSON.parse(parameter.get('postData.contents')));
    if (contents.get('event.subtype') != 'bot_message') return false;

    const richTextSection: any[] | undefined = contents.get('event.blocks.0.elements.0.elements');
    if (!richTextSection) return false

    const userIdList = richTextSection.filter((v) => {
      return v.type == 'user';
    }).map((v) => {
      return v.user_id;
    })
    this.mentionTargets = Array.from(new Set(userIdList));

    this.isMatched = true;
    return true;
  }

  do() {
    if (!this.isMatched) return;


  }
}