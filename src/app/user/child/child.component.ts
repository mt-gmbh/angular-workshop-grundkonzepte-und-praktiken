import { Component } from '@angular/core';
import { LoggerService } from "../../core/logger.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor(protected logger: LoggerService) {
  }

}
