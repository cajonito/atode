import { SlackPost } from '../src/SlackPost';

const text = 'testtext';

const contents = {
  'event': {
    'subtype': 'bot_message',
    'text': text
  }
};
const parameter = {
  'postData': {
    'contents': JSON.stringify(contents)
  }
}
let slackPost = new SlackPost(parameter);

test('isBotPost', () => {
  expect(slackPost.isBotPost()).toBe(true);
})

test('getRawJson', () => {
  expect(slackPost.getRawJson()).toStrictEqual(parameter);
})

test('getContents', () => {
  expect(slackPost.getContents()).toStrictEqual(contents);
})

test('getText', () => {
  expect(slackPost.getText()).toBe(text)
})
