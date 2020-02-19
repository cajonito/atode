import { Mention } from '../../src/Action/Mention';
import { Json } from '../../src/Json';
import { Console } from '../../src/OutputApi/Console'

const mention = new Mention(new Console);

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
          }]
        }
      })
    }
  }))).toBe(true);
})