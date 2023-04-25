import { Component } from '@angular/core';
import { LoggerService } from "./core/logger.service";
import { ConfigService } from "./core/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _logger: LoggerService,
              protected _configService: ConfigService) {
  }
}
