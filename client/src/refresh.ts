import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

import {hmrBootstrap} from './hmr';
import {bootloader} from './bootloader';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled!');
  }
} else {
  bootloader(bootstrap);
}
