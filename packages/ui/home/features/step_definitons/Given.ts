const assert = require('assert');
const { Given, After } = require('@cucumber/cucumber');
const { remote, Browser } = require('webdriverio');

const { visualRegression, envConfig } = require('../../../../../utils');

const { domain, port, protocol } = envConfig;
let browser: typeof Browser;
let mainAppPath: string = '';

Given('I open home the browser with url {string}', async (path: string) => {
  mainAppPath = path;
  browser = (await remote({
    capabilities: { browserName: process.env.BROWSER || 'chrome' },
  })) as typeof Browser;
  console.log('I open home the browser with url');
  try {
    await browser.navigateTo(`${protocol}://${domain}:${port}${path}`);
    const title = await browser.getTitle();
    assert.equal(title, 'Hello');
  } catch (err: any) {
    if (browser) {
      await browser.deleteSession();
    }
    assert.fail(err);
  }
});

After(async () => {
  try {
    await visualRegression('main_app', [
      {
        label: 'home',
        url: `${protocol}://${domain}:${port}${mainAppPath}`,
      },
    ]);

    if (browser) {
      await browser.deleteSession();
    }
  } catch (err: any) {
    console.error(`Error in After hook: ${err}`);
  }
});
