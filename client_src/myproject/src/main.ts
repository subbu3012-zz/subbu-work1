    import { platformBrowserDynamic } from '../../node_modules/@angular/platform-browser-dynamic';
    import { enableProdMode } from '../../node_modules/@angular/core';
    import { AppModule } from './app/app.module';
   
    if (process.env.ENV === 'production') {
    enableProdMode();
    }
    platformBrowserDynamic().bootstrapModule(AppModule);