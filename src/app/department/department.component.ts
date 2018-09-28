import { Component, OnInit, Input } from '@angular/core';

import { Department } from '../model/department';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../service/department/department.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  /*here is list of departments*/
  
departments:Department[]=[];

employees:Employee[]=[];

selectedrow:number;

selectedDepartment:Department;
selectedDepName:string;
selectedDepBuilding:string;
searchterm:string;

constructor(private employeeService: EmployeeService,private departmentService: DepartmentService) {

  this.getDepartments();
  this.getEmployees();
}

addEmployeesToDepartment():void{

  var index:number=0;
  for(index=0; index < this.departments.length;index++)
  {


    this.departments[index].employees=[];

    for(let emp of this.employees)
    {
      if(emp.department_id==this.departments[index].id){
        
        this.departments[index].employees.push(emp);
      }
    }
   
  }
}
getDepartments(): void {
  this.departmentService.getAllDepartments()
      .subscribe(dep => this.departments = dep);
    }

getEmployees(): void {
  this.employeeService.getEmployees()
      .subscribe(emps => this.employees = emps
        );
}


ngOnInit() {
}



Onselect(department:Department):void{

  this.addEmployeesToDepartment();
  this.selectedDepartment=department;
}

//

//adding the value to the department...
addNewDepartment(name1: HTMLInputElement,building1:HTMLInputElement)
    {
       console.log(name1.value+building1.value);
       let temp:Department=new Department(this.departments.length+1,name1.value,building1.value);
       this.departments.push(temp); 
        name1.value="";
        building1.value="";

    }

    
    updateDepartment(name1: HTMLInputElement,building1:HTMLInputElement)
    {
      if(this.selectedDepartment!=null){
        //removing old ones
        const index=this.departments.indexOf(this.selectedDepartment,0);
        if(index>-1){
          let depNumber:number=this.selectedDepartment.id;

          this.departments.splice(index,1);
          //adding updated one
          let temp:Department=new Department(depNumber,name1.value,building1.value);
          this.departments.push(temp);
          this.selectedDepartment=null;
          this.selectedDepName="";
          this.selectedDepBuilding="";
        }
       
      }

    }
// This method associate to Edit Button.
onEdit(index: number) 
{
// Assign selected table row index.
this.selectedrow = index;
// Initiate new department.
this.selectedDepartment =this.departments[this.selectedrow];
this.selectedDepName=this.selectedDepartment.name;
this.selectedDepBuilding=this.selectedDepartment.building;
}
//
onDelete(index: number) {
  // Delete the corresponding department entry from the list.
  this.departments.splice(index, 1);
} 
onCancel() {
  // Hide department entry section....
  this.selectedDepartment=null;
}

departmentName(department_id: number): string
{
  for (let department of this.departments)
  {
    if (department_id == department.id)
    {
      return department.name;
    }
  } 
}
}
