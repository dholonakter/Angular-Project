import { Component, OnInit, Input } from '@angular/core';

import { Department, IDepartment } from '../model/department';
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
  
departments:IDepartment[]=[];

//employees:Employee[]=[];

selectedrow:number;

selectedDepartment:IDepartment;
selectedDepName:string;
selectedDepBuilding:string;
searchterm:string;

constructor(private employeeService: EmployeeService,private departmentService: DepartmentService) {
  departmentService.createAllDepartments();
  //this.getDepartments();
  this.employeeService.createAllEmployees();
  //this.getEmployees();
}

addEmployeesToDepartment():void{

  var index:number=0;
  for(index=0; index < this.departmentService.allDepartments.length;index++)
  {


    this.departmentService.allDepartments[index].employees=[];

    for(let emp of this.employeeService.allEmployees)
    {
      if(emp.department_id==this.departmentService.allDepartments[index].id){
        
       this.departmentService.allDepartments[index].employees.push(emp);
      }
    }
   
  }
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
      
       let temp:Department = new Department(this.departmentService.allDepartments.length+1, name1.value, building1.value);
       this.departmentService.add(temp);
        name1.value="";
        building1.value="";

    }

    
    updateDepartment(name1: HTMLInputElement,building1:HTMLInputElement)
    {
      if(this.selectedDepartment!=null){
        //removing old ones
        const index=this.departmentService.allDepartments.indexOf(this.selectedDepartment,0);
        if(index>-1){
          let depNumber:number=this.selectedDepartment.id;
          this.departmentService.remove(this.selectedDepartment);
          //adding updated one
          let temp:Department=new Department(depNumber, name1.value, building1.value);
          this.departmentService.add(temp);
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
this.selectedDepartment =this.departmentService.allDepartments[this.selectedrow];
this.selectedDepName=this.selectedDepartment.name;
this.selectedDepBuilding=this.selectedDepartment.building;
}
//
onDelete(index: number) {
  
  this.departmentService.remove(this.selectedDepartment);
} 
onCancel() {
  // Hide department entry section....
  this.selectedDepartment=null;
}

departmentName(department_id: number): string
{
  for (let department of this.departmentService.allDepartments)
  {
    if (department_id == department.id)
    {
      return department.name;
    }
  } 
}
}
