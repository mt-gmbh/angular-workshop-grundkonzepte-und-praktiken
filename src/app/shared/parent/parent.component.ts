import { Component } from '@angular/core';
import { LoggerService } from "../../core/logger.service";
import { BetterLoggerService } from "../../core/better-logger.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  viewProviders: [
    {provide: LoggerService, useClass: BetterLoggerService}
  ],
  providers: [
    {provide: LoggerService, useClass: LoggerService}
  ],
})
export class ParentComponent {

  constructor(protected logger: LoggerService) {
  }

}
