import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { DepartmentService } from '../service/department/department.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentComponent } from '../department/department.component';
import { Department } from '../model/department';

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

  selectedDepartment:Department;
  SelectedDepartmentEmployees:Employee[]=[];
  SelectedDepartmentTasks:Task[]=[];
  departments:Department[];

  public all
  constructor(private taskService: TasksService, private employeeService: EmployeeService,private departmentService:DepartmentService, private dept: DepartmentComponent) { }

  ngOnInit() {
    this.onSelectMenu("Dashboard");
    this.getAllTasks();
    this.getEmployees();
    this.getAllDepartments();
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


  onSelectDepartment(dep: Department)
  {
    this.selectedDepartment = dep;
    this.getEmployeesOfSelectedDepartment(this.selectedDepartment);
    this.getTasksOfSelectedDepartment(this.selectedDepartment);
  }

  getEmployeesOfSelectedDepartment(department:Department){
    if(department!=null){
      
    for(let emp of this.employees)
    {
      if(emp.department_id==department.id){
        this.SelectedDepartmentEmployees.push(emp);
      }
    }
    }
  }

  getTasksOfSelectedDepartment(department:Department){
    if(department!=null){
      
    for(let task of this.allTasks)
    {
      if(task.department_id==department.id){
        this.SelectedDepartmentTasks.push(task);
      }
    }
    }
  }

  getAllDepartments():void{

    
    this.departmentService.getAllDepartments()
    .subscribe(dep => this.departments = dep);
    
  }
}
