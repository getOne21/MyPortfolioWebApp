import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en-GB';
import { App } from './app/app';
import { config } from './app/app.config.server';

registerLocaleData(localeDe, 'de');
registerLocaleData(localeEn, 'en-GB');

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
