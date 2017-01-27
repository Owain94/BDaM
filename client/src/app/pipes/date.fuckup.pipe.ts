import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'DateFuckUp'})
export class DateFuckUp implements PipeTransform {
  transform(value:string, args:string[]) : any {
    if (typeof(value) === 'undefined') {
      return '';
    }

    const date = value.substring(0, 10).split('-')
    return date[2] + '-' + date[1] + '-' + date[0];
  }
}
