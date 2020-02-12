import { OutputApi } from '../OutputApi'

export class Slack extends OutputApi {
  send(text: string) {
    let url: string | null = PropertiesService.getScriptProperties().getProperty('SLACK_POST_HOOK_URL');
    if (url === null) return;
    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ text: text })
    };
    UrlFetchApp.fetch(url, options);
    return;
  }
}