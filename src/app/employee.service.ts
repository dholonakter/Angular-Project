import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Employee[] 
  {
    return EMPLOYEES;
  }

  constructor() { }
}
