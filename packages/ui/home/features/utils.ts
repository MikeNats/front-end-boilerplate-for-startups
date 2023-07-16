import backstop, { Scenario } from 'backstopjs';
import { appsEnvConfig } from '../../../../config';
import { Environment } from '../../../../enums';
import { Apps, EnvConfig, Visual } from 'types/global';

const app = process.env.APP as Apps;

const env = process.env.NODE_ENV as Environment;
const visual = process.env.VISUAL as Visual;

const { domain, port, protocol } = appsEnvConfig[env || Environment.LOCAL][app];

export const envConfig: EnvConfig[Apps] = {
  domain,
  port,
  protocol,
};

export const visualRegression = async (
  id: string,
  scenarios: Scenario[],
  viewports?: { label: string }[],
): Promise<void> => {
  if (visual) {
    // tslint:disable-next-line:no-console
    console.log('backstop snapshot started');

    try {
      await backstop(visual, {
        config: {
          id,
          viewports: [
            {
              label: 'phone',
              width: 320,
              height: 480,
            },
            {
              label: 'tablet',
              width: 1024,
              height: 768,
            },
          ].filter(
            (viewport: { label: string }) =>
              !(viewports && viewports?.length) ||
              viewports.some(
                (v: { label: string }) => v.label === viewport.label,
              ),
          ),
          scenarios: scenarios.map((scenario: Scenario) => ({
            misMatchThreshold: 0,
            cookiePath: 'backstop_data/engine_scripts/cookies.json',
            ...scenario,
          })),

          paths: {
            bitmaps_reference: 'backstop_data/bitmaps_reference',
            bitmaps_test: 'backstop_data/bitmaps_test',
            engine_scripts: 'backstop_data/engine_scripts',
            html_report: 'backstop_data/html_report',
            ci_report: 'backstop_data/ci_report',
          },
          report: ['browser'],
          engine: 'puppeteer',
          engineOptions: {
            args: ['--headless=new'],
          },
          asyncCaptureLimit: 5,
          asyncCompareLimit: 50,
          debug: false,
          debugWindow: false,
        },
      });
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log('backstop faild', err);
    }
  } else {
    Promise.resolve();
  }
  // tslint:disable-next-line:no-console
  console.log('Report generated successfully.');
};
