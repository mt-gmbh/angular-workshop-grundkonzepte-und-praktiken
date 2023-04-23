import { Component, Inject } from '@angular/core';
import { LoggerService } from "./core/logger.service";
import { APP_CONFIG } from "./config/config.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _logger: LoggerService,
              @Inject(APP_CONFIG) private _config: any
  ) {
    console.log(_config)
  }
}
