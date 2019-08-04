import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySearchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(client => {
        if (client.name.search(searchText) !== -1) {
          return client.name.search(searchText) !== -1;
        } else if (client.dealer.toString().search(searchText) !== -1) {
            return client.dealer.toString().search(searchText) !== -1;
        } else if (client.city.toString().search(searchText) !== -1) {
            return client.city.toString().search(searchText) !== -1;
        }
      });
    }
  }
}
