import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetterLoggerService {

  sayHello(): string {
    return 'Hallo von BetterLoggerService';
  }
}
