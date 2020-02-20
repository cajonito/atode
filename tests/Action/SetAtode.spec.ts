import { SetAtode } from '../../src/Action/SetAtode';
import { Json } from '../../src/Json';
import { Console } from '../../src/OutputApi/Console';
import { Config } from '../../src/Config';

const config: Config = {
  'channelId': null,
  'debugChannelId': null,
  'token': null,
}


const setAtode = new SetAtode(new Console, config);

test('match', () => {
  expect(setAtode.match(new Json({
    'parameter': {
      'payload': JSON.stringify({})
    }
  }))).toBe(true);
})