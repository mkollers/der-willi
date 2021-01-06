import { Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/app';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: firebase.User | undefined): string {
    if (!value) {
      return '';
    }

    if (value.displayName) {
      return value.displayName;
    }
    return value.email;
  }
}
