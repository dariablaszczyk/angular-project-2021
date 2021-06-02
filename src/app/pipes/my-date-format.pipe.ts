import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDateFormat',
})
export class MyDateFormatPipe implements PipeTransform {
  transform(isoDate: Date): string {
    let date = new Date(isoDate);
    let day = date.getDate().toString().padStart(2, '0');
    let month = date.getMonth().toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return day + '-' + month + '-' + year;
  }
}
