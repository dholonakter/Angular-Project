import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    // Check if term is undefined
    if (term === undefined) 
      return employees;
    
    // Return updated employees array
    return employees.filter(function(employee) {
      return employee.first_name.toLowerCase().includes(term.toLowerCase());
    })
  }

}