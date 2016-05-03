import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'profilePicture'})
export class ProfilePicturePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return 'http://127.0.0.1:8081' + value;
    }
    else {
      return '/img/avatar-default.png';
    }
  }
}