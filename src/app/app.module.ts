import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import { CoreModule } from "./core/core.module";
import { API_URL } from "./core/api-url";
import { Config, CONFIG } from "./core/config";
import { ConfigModule } from "./config/config.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    ConfigModule.loadConfig('https://jsonplaceholder.typicode.com/users/1')
  ],
  providers: [
    {provide: CONFIG, useValue: {isProd: true}},
    {
      provide: API_URL, useFactory: (config: Config) => {
        if (config.isProd) {
          return 'https://example.com';
        }

        return 'https://localhost:4200'
      },
      deps: [CONFIG]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
