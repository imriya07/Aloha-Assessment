import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterValue'
})
export class FilterValuePipe implements PipeTransform {

  transform(value:any,searchTerm:any): any {
    return value.filter(function(search:any){
      return search.title.indexOf(searchTerm) > -1
    });
  }

}
