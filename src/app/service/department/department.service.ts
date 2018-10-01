import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../model/department';
import { HttpClient } from '@angular/common/http';
import { IDepartment } from '../../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url: string = 'http://i875395.hera.fhict.nl/api/231896/department';

  //old Service -----------------------------------
  /*getAllDepartments(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this.url);
  }*/

  constructor(private http: HttpClient) { }

  //new Service -------------------------------
  private data : Observable<IDepartment[]>;
  public allDepartments : Department[];

  private getObservableFromAPI(): Observable<IDepartment[]> {
    this.data = this.http.get<IDepartment[]>(this.url);
    console.log("Department data received from API");
    return this.data;
  }

  createAllDepartments(): void{
    if(this.data == undefined){
      this.getObservableFromAPI()
    .subscribe(data => this.allDepartments = data);
    console.log("allDepartments created");
    }
  }

  add(department: Department){
    this.allDepartments.push(department);
    console.log("Department has been added, ID:" + department.id);
  }

  remove(department: Department): boolean{
    let index: number = this.allDepartments.indexOf(department, 0);
      if(index > -1){
        this.allDepartments.splice(index, 1);
        console.log("Department has been removed, ID: " + department.id);
        return true;
      }
      else{
        console.log("Department removal failed, ID: " + department.id);
        return false;
      }  
  }
}
