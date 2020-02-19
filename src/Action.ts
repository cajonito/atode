import { Json } from './Json'
import { OutputApi } from './OutputApi';

export abstract class Action {
  outputApi: OutputApi;
  isMatched: boolean;

  constructor(outputApi: OutputApi) {
    this.outputApi = outputApi;
    this.isMatched = false
  }
  abstract match(parameter: Json): boolean;
  abstract do(): void;
}