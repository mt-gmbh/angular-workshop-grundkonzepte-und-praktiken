import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import { CoreModule } from "./core/core.module";
import { API_URL } from "./core/api-url";
import { Config, CONFIG } from "./core/config";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { delay, tap } from "rxjs";
import { ConfigService } from "./core/config.service";
import { AddAccessTokenInterceptor } from "./core/add-access-token.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddAccessTokenInterceptor, multi: true},
    {provide: CONFIG, useValue: {isProd: true}},
    {
      provide: API_URL, useFactory: (config: Config) => {
        if (config.isProd) {
          return 'https://example.com';
        }

        return 'https://localhost:4200'
      },
      deps: [CONFIG]
    },
    {
      provide: APP_INITIALIZER, useFactory: (httpClient: HttpClient, configService: ConfigService) => {

        return () => httpClient.get('https://jsonplaceholder.typicode.com/users/1').pipe(
          delay(2000),
          tap(config => configService.config = config),
        )

      },
      deps: [HttpClient, ConfigService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
