import { Mention } from '../../src/Action/Mention';
import { Json } from '../../src/Json';
import { Console } from '../../src/OutputApi/Console'
import { Config } from '../../src/Config'

const config: Config = {
  'channelId': 'channel_id',
  'debugChannelId': null,
  'token': null,

}

const mention = new Mention(new Console, config);

test('match', () => {
  expect(mention.match(new Json({
    'postData': {
      'contents': JSON.stringify({
        'event': {
          'blocks': [{
            'elements': [{
              'elements': [
                {
                  'type': 'user',
                  'user_id': '1'
                }
              ]
            }]
          }],
          'channel': 'channel_id'
        }
      })
    }
  }))).toBe(true);
})