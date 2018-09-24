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
depmodel: Department;
showNew:boolean=false;
kindofsumbmit:string="save";
selectedDepartment:Department;

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
addNewDepartment(name: HTMLInputElement)
    {
      console.log(name.value);

       //let temp:Department=new Department(this.departments.length+1,name.value,building.value);
       //this.departments.push(temp); 

    }

Onsave(){
  if (this.kindofsumbmit==="save") 
  {
    // Push department model object into department list.
    this.departments.push(this.depmodel);
    
    }
     else 
     //update the existing property values based on model
     {
      this.departments[this.selectedrow].id = this.depmodel.id;
      this.departments[this.selectedrow].name = this.depmodel.name; 
     }
     //hide department entry section
     this.showNew=false;
    
}
// This method associate to Edit Button.
onEdit(index: number) 
{
// Assign selected table row index.
this.selectedrow = index;
// Initiate new department.
this.depmodel = new Department();
// Retrieve selected department from list and assign to model.
this.depmodel = Object.assign({}, this.departments[this.selectedrow]);//intersting one
// Change submitype to Update.
this.kindofsumbmit = 'Update';
// Display department entry section.
this.showNew = true;
}
//
onDelete(index: number) {
  // Delete the corresponding department entry from the list.
  this.departments.splice(index, 1);
} 
onCancel() {
  // Hide department entry section....
  this.showNew = false;
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
