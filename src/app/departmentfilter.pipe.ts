import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentfilter'
})
export class DepartmentfilterPipe implements PipeTransform {

  transform(departments: any, searchterm: any): any 
  {
    if(searchterm==undefined) return  departments;
     return departments.filter(function(department){
       return department.name.toLowerCase().includes(searchterm.toLowerCase());
     })
       
     }
    
  }


