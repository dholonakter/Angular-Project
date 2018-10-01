import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask, Task } from './model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private taskJsonUrl: string = 'http://i875395.hera.fhict.nl/api/231896/task';
  constructor(private http: HttpClient) { }

  private data : Observable<ITask[]>;
  public allTasks : Task[];

  private getObservableFromAPI(): Observable<ITask[]> {
    this.data = this.http.get<ITask[]>(this.taskJsonUrl);
    console.log("Task data received from API");
    return this.data;
  }

  createAllTask(): void{
    if(this.data == undefined){
      this.getObservableFromAPI()
    .subscribe(data => this.allTasks = data);
    console.log("allTasks created");
    }
  }

  add(task: Task){
    this.allTasks.push(task);
    console.log("Task has been added, ID:" + task.id);
  }

  remove(task: Task): boolean{
    let index: number = this.allTasks.indexOf(task, 0);
      if(index > -1){
        this.allTasks.splice(index, 1);
        console.log("Task has been removed, ID: " + task.id);
        return true;
      }
      else{
        console.log("Task removal failed, ID: " + task.id);
        return false;
      }  
  }
}
