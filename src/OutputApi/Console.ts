import { OutputApi } from '../OutputApi'

export class Console extends OutputApi {
  send(text: string) {
    console.log(text);
  }
}