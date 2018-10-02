import { Component, OnInit, Input  } from '@angular/core';
import { Task } from '../model/task';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../service/department/department.service';


@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {

  @Input() theTask: Task;
  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.employeeService.createAllEmployees();
    this.departmentService.createAllDepartments();
  }
  getEmployeeNames(task: Task){
    let names: string = "";
    this.employeeService.allEmployees.forEach(employee => {
      task.employees.forEach(num => {
        if(employee.id == num){names += employee.first_name + " " + employee.last_name+", ";}
      })     
    });
    if (names == ""){names = "No Employees";}
    return names;
  }
  departmentName(department_id: number): string
  {
    if (department_id == 0) return "No department";
    for (let department of this.departmentService.allDepartments)
    {
      if (department_id == department.id)
      {
        return department.name;
      }
    }
  }
}
