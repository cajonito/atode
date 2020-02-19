import { Json } from '../Json'
import { Action } from '../Action'

export class SetAtode implements Action {
  isMatched: boolean = false;
  payload: Json = new Json({});
  match(parameter: Json): boolean {
    if (!parameter.get('parameter.payload')) return false;
    try {
      const payload = JSON.parse(parameter.get('parameter.payload'));
      this.payload = new Json(payload);
    } catch (e) {
      return false;
    }

    this.isMatched = true;
    return true;
  }
  do(): void {
    if (!this.isMatched) return;
  }
}