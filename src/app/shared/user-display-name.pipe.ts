import { Pipe, PipeTransform } from '@angular/core';
import { User } from "../user/interfaces/user.interface";

@Pipe({
  name: 'userDisplayName'
})
export class UserDisplayNamePipe implements PipeTransform {

  transform(value: User): string {
    console.log('user pipe triggered');
    return value.firstName + ' ' + value.lastName;
  }

}
