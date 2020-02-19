import { Json } from './Json'

export interface Action {
  isMatched: boolean;
  match(parameter: Json): boolean;
  do(): void;
}