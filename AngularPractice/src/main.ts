

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StartModule } from './app/app.module';




platformBrowserDynamic().bootstrapModule(StartModule)
  .catch(err => console.error(err));
