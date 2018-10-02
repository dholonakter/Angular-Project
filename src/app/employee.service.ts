import { Injectable } from '@angular/core';
import { Employee, IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = 'http://i875395.hera.fhict.nl/api/231896/employee';

  //old Service! ---------------------------------
  /*getEmployees(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url);
  }*/

  constructor(private http: HttpClient) { }

  //new Service! -----------------------------------
  private data : Observable<IEmployee[]>;
  public allEmployees : Employee[];

  private getObservableFromAPI(): Observable<IEmployee[]> {
    this.data = this.http.get<IEmployee[]>(this.url);
    console.log("Employee data received from API");
    return this.data;
  }

  createAllEmployees(): void{
    if(this.data == undefined){
      this.getObservableFromAPI()
    .subscribe(data => this.allEmployees = data);
    console.log("allEmployees created");
    }
  }

  add(employee: Employee){
    this.allEmployees.push(employee);
    console.log("Employee has been added, ID:" + employee.id);
  }

  remove(employee: Employee): boolean{
    let index: number = this.allEmployees.indexOf(employee, 0);
      if(index > -1){
        this.allEmployees.splice(index, 1);
        console.log("Employee has been removed, ID: " + employee.id);
        return true;
      }
      else{
        console.log("Employee removal failed, ID: " + employee.id);
        return false;
      }  
  }

}