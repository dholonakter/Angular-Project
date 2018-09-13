import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
selectedTask: Task;
selectedTaskSave: Task;
IsNewTask: boolean = false;
  
  allTasks = [
    new Task('Shopping', 'Bring milk', 'Mother'),
    new Task('web-2', 'Implement tasks', 'Teacher'),
    new Task('Play', 'Play some fetch with me!', 'Dog'),
    new Task('tinkering', 'help me make a star out of paper', 'Sister')
  ];

  constructor() {
    
   }

  ngOnInit() {
  }
  onSelect(task: Task){
    if(this.selectedTask != null){
      this.cancelClick();
    }
    this.selectedTask = task;
    this.selectedTaskSave = new Task(task.title, task.description, task.author);
  }
  newTaskClick(){
    let temp: Task = new Task("empty","empty","empty");
    this.allTasks.push(temp);
    this.selectedTask = temp;
    this.IsNewTask = true;
  }
  saveClick(){
    this.setDefaultValues();
  }
  cancelClick(){
    if(this.IsNewTask){
      this.deleteClick();
    }
    else{
    this.selectedTask.title = this.selectedTaskSave.title;
    this.selectedTask.description = this.selectedTaskSave.description;
    this.selectedTask.author = this.selectedTaskSave.author;
    }       
    this.setDefaultValues();
  }
  deleteClick(){
    let index: number = this.allTasks.indexOf(this.selectedTask, 0);
      if(index > -1){
        this.allTasks.splice(index, 1);
      }
      this.setDefaultValues();
  }
  setDefaultValues(){
    this.selectedTask = null;
    this.selectedTaskSave = null;
    this.IsNewTask = false;
  }

}
