import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DepartmentComponent]
})
export class DashboardComponent implements OnInit {

  public selectedMenu: string;
  public selectedTask: Task;
  public allTasks:Task[];
  
  selectedEmployee: Employee;
  employees: Employee[];

  public all
  constructor(private taskService: TasksService, private employeeService: EmployeeService, private dept: DepartmentComponent) { }

  ngOnInit() {
    this.onSelectMenu("Dashboard");
    this.getAllTasks();
    this.getEmployees();
  }

  onSelectMenu(menu:string){
    this.selectedMenu = menu;
  }
  onSelectTask(task:Task){
    this.selectedTask = task;
  }
  getAllTasks(): void{
    this.taskService.getAllTasks()
    .subscribe(data => this.allTasks = data);
  }

  getEmployees(): void
  {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  onSelectEmployee(emp: Employee)
  {
    this.selectedEmployee = emp;
  }
}
