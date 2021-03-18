import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  transform(snake:string): string {

    return snake.includes("_") ? snake.split("_").join(" ") : snake;
  }

}
