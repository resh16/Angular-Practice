import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StartModule } from './start/start.module';
platformBrowserDynamic().bootstrapModule(StartModule)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map