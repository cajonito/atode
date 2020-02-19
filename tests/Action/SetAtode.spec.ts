import { SetAtode } from '../../src/Action/SetAtode';
import { Json } from '../../src/Json';
import { Console } from '../../src/OutputApi/Console'

const setAtode = new SetAtode(new Console);

test('match', () => {
  expect(setAtode.match(new Json({
    'parameter': {
      'payload': JSON.stringify({})
    }
  }))).toBe(true);
})