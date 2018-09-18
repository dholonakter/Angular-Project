import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url='http://i875395.hera.fhict.nl/api/231896/employee';

  getEmployees(): Employee[] 
  {
    return EMPLOYEES;
    //return this.http.get<Employee[]>(this.url);
  }

  constructor(private http: HttpClient) { }

}