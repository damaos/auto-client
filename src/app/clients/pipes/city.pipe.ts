import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCityPipe',
  pure: false
})
export class CityPipe implements PipeTransform {
  tmp = [];
  transform(items: any[], filter: Object): any {
    this.tmp.length = 0;
    if (!items || !filter) {
      return items;
    }

    const arr = items.filter(item => item.city.indexOf(filter) !== -1);
    this.tmp.push(...arr);
    return this.tmp;
  }
}
