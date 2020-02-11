import { SlackPost } from "../src/SlackPost";

var getContents = (text: string, blocks: any = null) => {
  let contents: any = {
    "event": {
      "subtype": "bot_message",
      "text": text,
    }
  };

  if (blocks) {
    contents["event"]["blocks"] = blocks;
  }

  return contents;
}

var getParameter = (contents: any) => {
  return {
    "postData": {
      "contents": JSON.stringify(contents)
    }
  };
}

test("isBotPost", () => {
  const text = "test";
  const contents = getContents(text);
  const parameter = getParameter(contents);
  let slackPost = new SlackPost(parameter);
  expect(slackPost.isBotPost()).toBe(true);
})

test("getRawJson", () => {
  const text = "test";
  const contents = getContents(text);
  const parameter = getParameter(contents);
  let slackPost = new SlackPost(parameter);
  expect(slackPost.getRawJson()).toStrictEqual(parameter);
})

test("getContents", () => {
  const text = "test";
  const contents = getContents(text);
  const parameter = getParameter(contents);
  let slackPost = new SlackPost(parameter);
  expect(slackPost.getContents()).toStrictEqual(contents);
})

test("getText", () => {
  const text = "test";
  const contents = getContents(text);
  const parameter = getParameter(contents);
  let slackPost = new SlackPost(parameter);
  expect(slackPost.getText()).toBe(text)
})
