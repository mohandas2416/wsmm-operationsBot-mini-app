import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { WsmmMiniAppAngularSdkModule } from '@Willscotmobilemini/wsmm-mini-app-angular-sdk';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import awsconfig from '../aws-exports';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    WsmmMiniAppAngularSdkModule.forRoot({
      context: {
        appName: 'wsmm-operationsBot-mini-app'
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
