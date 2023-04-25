import { Component } from '@angular/core';
import { LoggerService } from "./core/logger.service";
import { ConfigService } from "./core/config.service";
import { User } from "./user/interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User = {
    firstName: 'Alex',
    lastName: 'Niersmann'
  }

  constructor(private _logger: LoggerService,
              protected _configService: ConfigService) {

  }

  transform(value: User): string {
    console.log('user function triggered');
    return value.firstName + ' ' + value.lastName;
  }

  noop() {

  }
}
