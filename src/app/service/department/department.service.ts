import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../model/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url: string = 'http://i875395.hera.fhict.nl/api/231896/department';

  getAllDepartments(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
