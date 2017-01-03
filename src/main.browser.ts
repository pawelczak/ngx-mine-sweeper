// 3d party imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'

// app imports
import { AppModule } from './app/app.module';

declare var process: any;

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
