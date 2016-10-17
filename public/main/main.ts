import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//Start the app here
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);