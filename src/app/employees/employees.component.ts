import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[];
  //employees: Observable<Employee[]>;
  selectedEmployee: Employee;
  
  // Keep track of the array index of the selected employee.
  selectedEmployeeArrayIndex: number;

  // Keep track of the initial values of the variables (before user changes)
  // Such that we do not have to deal with artificially increasing static
  // employee IDs.
  selectedEmployeeOriginalFirstName: string;
  selectedEmployeeOriginalLastName: string;
  selectedEmployeeOriginalPhone: string;
  selectedEmployeeOriginalEmail: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() : void
  {
    this.employees = this.employeeService.getEmployees();
  }

  onSelect(employee: Employee)
  {
    if (this.selectedEmployee != null)
    {
      // If changes were made but not commited, revert changes
      // and set the changed flag back to false.
      if (this.selectedEmployee.detailsChanged)
      {
        this.cancelChanges();
      }
    }
      // Switch to the other employee.
      this.selectedEmployee = employee;

      // As well as keep track of the array index again.
      this.selectedEmployeeArrayIndex = this.employees.indexOf(this.selectedEmployee);
    
      // Store the information of the selected employee into variables.
      this.selectedEmployeeOriginalFirstName = this.selectedEmployee.firstName;
      this.selectedEmployeeOriginalLastName = this.selectedEmployee.lastName;
      this.selectedEmployeeOriginalPhone = this.selectedEmployee.phone;
      this.selectedEmployeeOriginalEmail = this.selectedEmployee.email;
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
    let emp: Employee = new Employee("First Name", "Last Name", "Phone", "E-mail");
    this.employees.push(emp);

    this.selectedEmployee = emp;
  }

  changeEmployeeDetails()
  {
    // Set flag back such that details won't be reverted.
    this.selectedEmployee.detailsChanged = false;
  }

  cancelChanges()
  {
    // Revert changes.
    this.employees[this.selectedEmployeeArrayIndex].firstName = this.selectedEmployeeOriginalFirstName;
    this.employees[this.selectedEmployeeArrayIndex].lastName = this.selectedEmployeeOriginalLastName;
    this.employees[this.selectedEmployeeArrayIndex].phone = this.selectedEmployeeOriginalPhone;
    this.employees[this.selectedEmployeeArrayIndex].email = this.selectedEmployeeOriginalEmail;

    this.employees[this.selectedEmployeeArrayIndex].detailsChanged = false;
  }
}
