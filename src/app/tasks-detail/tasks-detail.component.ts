import { Component, OnInit, Input  } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {

  @Input() theTask: Task;
  constructor() { }

  ngOnInit() {
  }
  
}
