import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private taskJsonUrl: string = 'http://i875395.hera.fhict.nl/api/231896/task';
  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.taskJsonUrl);
  }
}
