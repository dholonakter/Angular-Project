import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public selectedMenu: string;
public selectedTask: Task;
public allTasks:Task[];

public all
  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.onSelectMenu("Dashboard");
    this.getAllTasks();
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

}
