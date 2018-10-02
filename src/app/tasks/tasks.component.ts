import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { TasksFilterPipe } from '../tasks-filter.pipe';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  
  
})
export class TasksComponent implements OnInit {
selectedTask: Task;
selectedTaskSave: Task;
IsNewTask: boolean = false;
SearchValue: string;
  
   //allTasks = [];

  constructor(private taskService: TasksService, private employeeService: EmployeeService) {
    
   }

  ngOnInit() {
    this.taskService.createAllTask();
    this.employeeService.createAllEmployees();
  }
 
  /*getAllTasks(): void{
    this.taskService.getAllTasks()
    .subscribe(data => this.allTasks = data);
  }*/

  onSelect(task: Task): void{
    if(this.selectedTask != null){
      this.cancelClick();
    }
    this.selectedTask = task;
    this.selectedTaskSave = new Task(task.id, task.department_id, task.name, task.employees, task.due_date);
  }
  newTaskClick(): void{   
    if(this.selectedTask != undefined){this.saveClick();} 
    let temp: Task = new Task(this.getHighestID()+1, 0, "", [0], null);
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
      this.deleteClick();
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
  deleteClick(): void{
    this.deleteTask(this.selectedTask);
    this.setDefaultValues();
  }
  deleteTask(task: Task){
    /*let index: number = this.allTasks.indexOf(task, 0);
      if(index > -1){
        this.allTasks.splice(index, 1);
        console.log("task deleted2: " + task.id)
      }*/
    this.taskService.remove(task);
  }
  setDefaultValues(): void{
    this.selectedTask = null;
    this.selectedTaskSave = null;
    this.IsNewTask = false;
  }
  getHighestID(): number{
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
  public getEmployeeNames(task: Task) : string{
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
