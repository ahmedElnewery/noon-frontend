import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArr'
})
export class NumberToArrPipe implements PipeTransform {

  transform(value: number): number[] {
    return  Array.from({ length: value }, (_, i) => i + 1);
  }

}
