import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(data:Object) {
    return Object.keys(data)
    .map(key => ({ value: data[key], key: key }));
  }

}
