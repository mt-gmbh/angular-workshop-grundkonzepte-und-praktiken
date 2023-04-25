import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { UserDisplayNamePipe } from './user-display-name.pipe';


@NgModule({
  declarations: [
    ParentComponent,
    UserDisplayNamePipe
  ],
  exports: [
    ParentComponent,
    UserDisplayNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
