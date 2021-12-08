import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithSpace'
})
export class NumberWithSpacePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

}
