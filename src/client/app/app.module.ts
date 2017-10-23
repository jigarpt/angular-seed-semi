import { HttpAuthInterceptor } from './shared/http/http-auth.interceptor';
import { HttpErrorInterceptor } from './shared/http/http-error.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

//AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule
    , HttpModule
    , AppRoutingModule
    , AboutModule
    , HomeModule
    , SharedModule.forRoot()
    , HttpClientModule
    , TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: (httpLoaderFactory),
         deps: [HttpClient]
       }
    })
    , NgProgressModule
    , BrowserAnimationsModule
    , ToastrModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' }
    , { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
    , { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
    , { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
