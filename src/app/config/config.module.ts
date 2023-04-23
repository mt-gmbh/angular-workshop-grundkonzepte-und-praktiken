import { APP_INITIALIZER, Inject, InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
import { Observable, tap } from "rxjs";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

export const APP_CONFIG = new InjectionToken('');

const CONFIG_PATH = new InjectionToken<string>('');


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useValue: () => ConfigModule._isLoading, multi: true},
    {provide: APP_CONFIG, useFactory: () => ConfigModule._loadedConfig || {}}
  ]
})
export class ConfigModule {

  private static _isLoading: Observable<any>;

  private static _loadedConfig: any;

  constructor(@Inject(CONFIG_PATH) path: string, http: HttpClient) {

    ConfigModule._isLoading = http.get(path).pipe(
      tap(config => ConfigModule._loadedConfig = config)
    )
  }

  static loadConfig(path: string): ModuleWithProviders<ConfigModule> {

    return {
      ngModule: ConfigModule,
      providers: [
        {provide: CONFIG_PATH, useValue: path}
      ]
    };
  }


}
