import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

//changing locale of app
import localeES from '@angular/common/locales/es'
import localeFR from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeES)
registerLocaleData(localeFR)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule

  ],
  exports:[
    AppRouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en'} //sets local language globally
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
