import { Component, OnInit, Input  } from '@angular/core';
import { Task } from '../model/task';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {

  @Input() theTask: Task;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.createAllEmployees();
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
}
