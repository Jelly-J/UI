import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';

import {FullLayoutComponent} from './layouts/full-layout.component';
import {APP_MODULES} from './common/app.module';
import {APP_COMPONENTS} from './common/app.component';

@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    APP_MODULES,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
