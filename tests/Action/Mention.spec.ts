import { Mention } from '../../src/Action/Mention';
import { Json } from '../../src/Json';

const mention = new Mention();

test('match', () => {
  expect(mention.match(new Json({
    'postData': {
      'contents': JSON.stringify({
        'event': {
          'subtype': 'bot_message',
          'blocks': [{
            'elements': [{
              'elements': [
                {
                  'type': 'user',
                  'user_id': '1'
                }
              ]
            }]
          }]
        }
      })
    }
  }))).toBe(true);
})