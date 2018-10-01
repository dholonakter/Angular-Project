import { Component, OnInit } from '@angular/core';
import { Employee, IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})

export class EmployeesComponent implements OnInit {

  isCollapsed = true;

  employees = [];
  sortSelection;

  selectedEmployee: Employee;
  copyOfSelected: Employee;
  
  // Keep track of the array index of the selected employee.
  selectedEmployeeArrayIndex: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() : void
  {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  sortById(): void
  {
    if (this.sortSelection == 0)
    {
      this.sortByIdAsc();
    }
    else
    {
      this.sortByIdDesc();
    }
  }

  sortByIdAsc(): void
  {
    this.employees.sort((x: Employee, y: Employee) => {
    if (x.id < y.id)
    {
      return -1;
    }
    if (x.id > y.id)
    {
      return 1;
    }
    return 0;
    }
  }

  sortByIdDesc(): void
  {
    this.employees.sort((x: Employee, y: Employee) => {
    if (x.id < y.id)
    {
      return 1;
    }
    if (x.id > y.id)
    {
      return -1;
    }
    return 0;
    }
  }

  sortByName(): void 
  {
    if (this.sortSelection == 0)
    {
      this.sortByLastNameAsc();
    }
    else
    {
      this.sortByLastNameDesc();
    }
  }

  sortByLastNameAsc(): void
  {
    this.employees.sort((x: Employee, y: Employee) => {
      if (x.last_name < y.last_name)
      {
        return -1;
      }
      if (x.last_name > y.last_name)
      {
        return 1;
      }
      else
      {
       if (x.first_name < y.first_name)
       {
         return -1;
       }
       if(x.first_name > y.first_name)
       {
         return 1;
       }
       return 0;
      }
    })
  }

  sortByLastNameDesc(): void
  {
    this.employees.sort((x: Employee, y: Employee) => {
      if (x.last_name < y.last_name)
      {
        return 1;
      }
      if (x.last_name > y.last_name)
      {
        return -1;
      }
      else
      {
       if (x.first_name < y.first_name)
       {
         return 1;
       }
       if(x.first_name > y.first_name)
       {
         return -1;
       }
       return 0;
      }
    })
  }

  onSelect(employee: Employee)
  {
    if (this.selectedEmployee != null)
    {
      // Check if the original object has been changed with respect to it's copy.
      if (this.hasBeenChanged(this.selectedEmployee, this.copyOfSelected))
      {
        this.cancelChanges();
      }
    }
    // Switch to the other employee.
    this.selectedEmployee = employee;
    this.copyOfSelected = new Employee(employee.id, employee.department_id, employee.first_name, employee.last_name, employee.birth_date);

    // As well as keep track of the array index again.
    this.selectedEmployeeArrayIndex = this.employees.indexOf(this.selectedEmployee);
  }

  deleteSelectedEmployee(employee: Employee)
  {
    let currentIndex = this.employees.indexOf(this.selectedEmployee);

    // Remove the selected employee from the list.
    this.employees.splice(currentIndex, 1);
    
    // Change selection to being one employee earlier in the array or null if none remains. 
    if (this.employees.length > 0)
    {
      if (currentIndex - 1 < 0)
      {
        this.selectedEmployee = this.employees[currentIndex];
        this.copyOfSelected = new Employee(this.selectedEmployee.id, this.selectedEmployee.department_id, this.selectedEmployee.first_name, this.selectedEmployee.last_name, this.selectedEmployee.birth_date);
      }
      else
      {
        this.selectedEmployee = this.employees[currentIndex - 1];
        this.copyOfSelected = new Employee(this.selectedEmployee.id, this.selectedEmployee.department_id, this.selectedEmployee.first_name, this.selectedEmployee.last_name, this.selectedEmployee.birth_date);
      }
    }
    else
    {
      this.selectedEmployee = null;
      this.copyOfSelected = null;
    }
  }

  createEmployee()
  {
    let emp: Employee = new Employee( 0, 0, "First Name", "Last Name", null);
    this.employees.push(emp);

    this.selectedEmployee = emp;
    this.copyOfSelected = new Employee(emp.id, emp.department_id, emp.first_name, emp.last_name, emp.birth_date);
  }

  changeEmployeeDetails()
  {
    // Update the copy's values to match the current such that the
    // logic upon selection will not revert changes.
    this.copyOfSelected.birth_date = this.selectedEmployee.birth_date;
    this.copyOfSelected.first_name = this.selectedEmployee.first_name;
    this.copyOfSelected.last_name = this.selectedEmployee.last_name;
    this.copyOfSelected.department_id = this.selectedEmployee.department_id;
  }

  cancelChanges()
  {
    // Revert changes.
    this.employees[this.selectedEmployeeArrayIndex] = this.copyOfSelected;
  }

  hasBeenChanged(emp1: Employee, emp2: Employee): Boolean
  {
    // Check if all object's data are equal to eachother, if not, the object has been changed.
    return !((emp1.id == emp2.id) && (emp1.department_id == emp2.department_id) && (emp1.first_name == emp2.first_name) && (emp1.last_name == emp2.last_name) && (emp1.birth_date == emp2.birth_date));
  }
}
