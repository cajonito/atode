import { SetAtode } from '../../src/Action/SetAtode';
import { Json } from '../../src/Json';

const setAtode = new SetAtode();

test('match', () => {
  expect(setAtode.match(new Json({
    'parameter': {
      'payload': JSON.stringify({})
    }
  }))).toBe(true);
})