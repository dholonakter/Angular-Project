import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees = [];
  selectedEmployee: Employee;
  
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

  onSelect(employee: Employee)
  {
    if (this.selectedEmployee != null)
    {

    }
    // Switch to the other employee.
    this.selectedEmployee = employee;

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
      }
      else
      {
        this.selectedEmployee = this.employees[currentIndex - 1];
      }
    }
    else
    {
      this.selectedEmployee = null;
    }
  }

  createEmployee()
  {
    let emp: Employee = new Employee( 0, 0, "First Name", "Last Name", null);
    this.employees.push(emp);

    this.selectedEmployee = emp;
  }

  changeEmployeeDetails()
  {
    // To be implemented.
  }

  cancelChanges()
  {
    // Revert changes.
    // this.employees[this.selectedEmployeeArrayIndex].firstName = this.selectedEmployeeOriginalFirstName;
    // this.employees[this.selectedEmployeeArrayIndex].lastName = this.selectedEmployeeOriginalLastName;
    // this.employees[this.selectedEmployeeArrayIndex].phone = this.selectedEmployeeOriginalPhone;
    // this.employees[this.selectedEmployeeArrayIndex].email = this.selectedEmployeeOriginalEmail;
  }
}
