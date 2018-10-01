import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';
import { TasksFilterPipe } from '../tasks-filter.pipe';


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
sortSelection;
  
   allTasks = [];

  constructor(private taskService: TasksService) {
    
   }

  ngOnInit() {
    this.getAllTasks();
  }
 
  getAllTasks(): void{
    this.taskService.getAllTasks()
    .subscribe(data => this.allTasks = data);
  }

  SearchClick(){
    console.log("you clicked search:" + this.SearchValue);
    let alltasks2:Task[] = []; 
    this.getAllTasks();
    for (let task of this.allTasks){
      if(task.name == this.SearchValue){
        this.deleteTask(task);
        console.log("task deleted: " + task.id);
      }
    };
    console.log("search finished");
  }
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
    this.allTasks.push(temp);
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
    let index: number = this.allTasks.indexOf(task, 0);
      if(index > -1){
        this.allTasks.splice(index, 1);
        console.log("task deleted2: " + task.id)
      }
  }
  setDefaultValues(): void{
    this.selectedTask = null;
    this.selectedTaskSave = null;
    this.IsNewTask = false;
  }
  getHighestID(): number{
    let max = 0;
    this.allTasks.forEach(task => {
      if(task.id > max){max = task.id;}
    });
    return max;
  }
  getTaskByID(ID: number): Task{
    let temp: Task = null;
    this.allTasks.forEach(task => {
      if(task.id === ID && this.selectedTask !== task){console.log("Task found (by ID)!"); temp = task; return;}
    });
    if(temp == null){
      console.log("task not found (by ID)!");
      return temp;
    }
    else{return temp;}      
  }

  sortById(): void
  {

  }

  sortByName(): void
  {

  }

}
