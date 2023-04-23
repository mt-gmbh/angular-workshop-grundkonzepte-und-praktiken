import { Inject, Injectable } from '@angular/core';
import { API_URL } from "./api-url";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Inject(API_URL) private _apiUrl: string) {
    console.log(this._apiUrl);
  }
}
