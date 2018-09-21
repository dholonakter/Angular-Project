import { Injectable } from '@angular/core';
import { Employee, IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = 'http://i875395.hera.fhict.nl/api/231896/employee';

  getEmployees(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url);
  }

  constructor(private http: HttpClient) { }

}