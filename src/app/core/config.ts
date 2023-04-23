import { InjectionToken } from "@angular/core";

export interface Config {
  isProd: boolean
}

export const CONFIG: InjectionToken<Config> = new InjectionToken<Config>('')
