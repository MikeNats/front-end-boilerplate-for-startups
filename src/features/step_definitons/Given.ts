import assert from 'assert';
import { Given, After } from '@cucumber/cucumber';
import { remote } from 'webdriverio';
import { visualRegression, envConfig } from '../utils';

const { domain, port, protocol } = envConfig;
let browser: WebdriverIO.Browser;
let mainAppPath: string = '';

Given('I open the browser with url {string}', async (path: string) => {
  mainAppPath = path;
  browser = await remote({
    capabilities: { browserName: process.env.BROWSER || 'chrome' },
  });
  console.log('I open the browser with url');
  try {
    await browser.navigateTo(`${protocol}://${domain}:${port}${path}`);
    const title = await browser.getTitle();
    assert.equal(title, 'Hello');
  } catch (err: any) {
    browser.deleteSession();
    assert.fail(err);
  }
});

After(async () => {
  await visualRegression('main_app', [
    {
      label: 'home',
      url: `${protocol}://${domain}:${port}${mainAppPath}`,
    },
  ]);

  if (browser) {
    await browser.deleteSession();
  }
});
