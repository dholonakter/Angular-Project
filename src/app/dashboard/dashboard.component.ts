import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { DepartmentService } from '../service/department/department.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentComponent } from '../department/department.component';
import { Department } from '../model/department';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DepartmentComponent, TasksComponent]
})
export class DashboardComponent implements OnInit {

  public selectedMenu: string;
  public selectedTask: Task;
  public selectedTaskSave: Task;
  public IsNewTask: boolean;
  //public allTasks:Task[];
  
  selectedEmployee: Employee;
  //employees: Employee[];

  selectedDepartment:Department;
  selectedDepartmentEmployees:Employee[]=[];
  SelectedDepartmentTasks:Task[]=[];
  //departments:Department[];

  public all
  constructor(private taskService: TasksService, private employeeService: EmployeeService,private departmentService:DepartmentService, private dept: DepartmentComponent, private tas: TasksComponent) { }

  ngOnInit() {
    this.onSelectMenu("Dashboard");
    this.taskService.createAllTask();
    this.employeeService.createAllEmployees();
    this.departmentService.createAllDepartments();
    //this.getAllTasks();
    //this.getEmployees();
    //this.getAllDepartments();
  }

  onSelectMenu(menu:string){
    this.selectedMenu = menu;
    
  }

  onSelectTask(task:Task){
    this.selectedTask = task;
  }
  /*getAllTasks(): void{
    this.taskService.getAllTasks()
    .subscribe(data => this.allTasks = data);
  }*/

  /*getEmployees(): void
  {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }*/

  onSelectEmployee(emp: Employee)
  {
    this.selectedEmployee = emp;
    console.log("On Select employee");
  }


  onSelectDepartment(dep: Department)
  {

    this.selectedDepartment = dep;
    this.getEmployeesOfSelectedDepartment(this.selectedDepartment);
    this.getTasksOfSelectedDepartment(this.selectedDepartment);
  }

  //making a new task part -----------------------------------
  newTaskClick(): void{   
    //if(this.selectedTask != undefined){this.saveClick();} 
    let temp: Task = new Task(this.getHighestTaskID()+1, 0, "", [0], null);
    this.taskService.add(temp);
    //this.allTasks.push(temp);
    this.selectedTask = temp;
    this.IsNewTask = true;   
  }
  saveClick():void {
    if(this.getTaskByID(this.selectedTask.id) != null){
      alert("This ID has already been used! (Save Failed)"); 
      console.log("Save Failed!"); return;
    }
    if(this.selectedTask.name == ""){
      alert("Please give your task a name! (Save Failed)"); 
      console.log("Save Failed!"); return;
    }
    console.log("Save succeeded!");
    this.setDefaultValues();
  }
  cancelClick(): void{
    if(this.IsNewTask){
      this.taskService.remove(this.selectedTask);
    }
    else{
    this.selectedTask.id = this.selectedTaskSave.id;
    this.selectedTask.department_id = this.selectedTaskSave.department_id;
    this.selectedTask.name = this.selectedTaskSave.name;
    this.selectedTask.employees = this.selectedTaskSave.employees;
    this.selectedTask.due_date = this.selectedTaskSave.due_date;
    }       
    this.setDefaultValues();
  }
  setDefaultValues(): void{
    this.selectedTask = null;
    this.selectedTaskSave = null;
    this.IsNewTask = false;
  }
  getHighestTaskID(): number{
    let max = 0;
    this.taskService.allTasks.forEach(task => {
      if(task.id > max){max = task.id;}
    });
    return max;
  }
  getTaskByID(ID: number): Task{
    let temp: Task = null;
    this.taskService.allTasks.forEach(task => {
      if(task.id === ID && this.selectedTask !== task){console.log("Task found (by ID)!"); temp = task; return;}
    });
    if(temp == null){
      console.log("task not found (by ID)!");
      return temp;
    }
    else{return temp;}      
  }
  //End of making a new task part -----------------------------------

  getEmployeesOfSelectedDepartment(department:Department):void{
    if(department!=null){
      this.selectedDepartmentEmployees = [];//assign the empty list to avoid to add the new elemeents
    for(let emp of this.employeeService.allEmployees)
    {
      if(emp.department_id==department.id){
        this.selectedDepartmentEmployees.push(emp);
      }
    }
    }
  }

  getTasksOfSelectedDepartment(department:Department){
    
    if(department!=null){
      this.SelectedDepartmentTasks = [];

    for(let task of this.taskService.allTasks)
    {
      if(task.department_id==department.id){
        this.SelectedDepartmentTasks.push(task);
      }
    }
    }
  }

  getEmployeesFromDepartmentId(departmentId:Number):Employee[]{
    this.selectedDepartmentEmployees = [];
    if(departmentId>0){
  //assign the empty list to avoid to add the new elemeents
    for(let emp of this.employeeService.allEmployees)
    {
      if(emp.department_id==departmentId){
        this.selectedDepartmentEmployees.push(emp);
      }
    }
    }
    return this.selectedDepartmentEmployees;
  }

  getTasksFromDepartmentId(departmentId:Number):Task[]{
    this.SelectedDepartmentTasks = [];

    if(departmentId>0){


    for(let task of this.taskService.allTasks)
    {
      if(task.department_id==departmentId){
        this.SelectedDepartmentTasks.push(task);
      }
    }
    }
    return this.SelectedDepartmentTasks;
    
  }
  getEmployeeNames(task: Task): string{
    let names: string = "";
    this.employeeService.allEmployees.forEach(employee => {
      task.employees.forEach(num => {
        if(employee.id == num){names += employee.first_name + " " + employee.last_name+", ";}
      })     
    });
    if (names == ""){names = "No Employees";}
    return names;
  }

  /*getAllDepartments():void{

    
    this.departmentService.getAllDepartments()
    .subscribe(dep => this.departments = dep);
    
  }*/
}
