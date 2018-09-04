import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  
  allTasks = [
    new Task('Shopping', 'Bring milk', 'Mother'),
    new Task('web-2', 'Implement tasks', 'Teacher'),
    new Task('Play', 'Play some fetch with me!', 'Dog'),
    new Task('tinkering', 'help me make a star out of paper', 'Sister')
  ];
  myFavoriteTask = this.allTasks[0];

  constructor() {
    
   }

  ngOnInit() {
  }

}
