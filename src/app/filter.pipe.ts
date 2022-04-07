import { Pipe, PipeTransform } from '@angular/core';
import { dropdownData } from './hcai-multi-select/hcai-multi-select.component';

@Pipe({
  name: 'filterDropDownList'
})
export class FilterPipe implements PipeTransform {

  transform(list: dropdownData[], searchTerm: string): dropdownData[] {
    if(!list || !searchTerm) return list;
    
    return list.filter((item) => {
      return item.Value.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }

}
