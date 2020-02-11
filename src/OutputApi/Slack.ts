import { OutputApi } from '../OutputApi'

export class Slack extends OutputApi {
  send(text: string) {
    let url = 'https://hooks.slack.com/services/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';
    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ text: text })
    };
    UrlFetchApp.fetch(url, options);
    return;
  }
}