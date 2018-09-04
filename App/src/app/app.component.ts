import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { Task } from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-2 Task Managing App.';

  allTasks = [
    new Task('Shopping', 'Bring milk', 'Mother'),
    new Task('web-2', 'Implement tasks', 'Teacher'),
    new Task('Play', 'Play some fetch with me!', 'Dog'),
    new Task('tinkering', 'help me make a star out of paper', 'Sister')
  ];
  myTask = this.allTasks[0];
}
