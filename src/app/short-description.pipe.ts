import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})

export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(!value || value.length < 200){
      return value;
    }
    return value.substr(0,200) + "...";
  }
}