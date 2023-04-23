import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from "../shared/shared.module";
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    IndexComponent,
    ChildComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule {
}
