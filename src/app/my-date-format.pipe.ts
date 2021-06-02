import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDateFormat'
})
export class MyDateFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
