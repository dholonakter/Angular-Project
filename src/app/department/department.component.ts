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
  
//departments:Department[]=[];
sortSelection = "0";
//employees:Employee[]=[];

selectedrow:number;

selectedDepartment:Department;
selectedDepName:string;
selectedDepBuilding:string;
searchterm:string;

constructor(private employeeService: EmployeeService,private departmentService: DepartmentService) {
  this.departmentService.createAllDepartments();
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
/*getDepartments(): void {
  this.departmentService.getAllDepartments()
      .subscribe(dep => this.departments = dep);
    }*/

/*getEmployees(): void {
  this.employeeService.getEmployees()
      .subscribe(emps => this.employees = emps
        );
}*/


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
       //PROBLEM: Employees has not been specified!!! - Bas
       let temp:Department = new Department(this.departmentService.allDepartments.length+1, name1.value, building1.value, new Employee[0]);
       //this.departmentService.allDepartments.push(temp); 
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

          //this.departmentService.allDepartments.splice(index,1);
          this.departmentService.remove(this.selectedDepartment);
          //adding updated one

          //PROBLEM: Employees has not been specified!!! - Bas
          let temp:Department=new Department(depNumber, name1.value, building1.value, new Employee[0]);
          //this.departmentService.allDepartments.push(temp);
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
  // Delete the corresponding department entry from the list.
  //this.departmentService.allDepartments.splice(index, 1);
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

sortById(): void
{
  if (this.sortSelection == "0")
  {
    this.sortByIdAsc();
  }
  else
  {
    this.sortByIdDesc();
  }
}

sortByIdAsc(): void
{
  this.departmentService.allDepartments.sort((x: Department, y: Department) => {
    if (x.id < y.id)
    {
      return -1;
    }
    if (x.id > y.id)
    {
      return 1;
    }
    return 0;
  })
}

sortByIdDesc(): void
{
  this.departmentService.allDepartments.sort((x: Department, y: Department) => {
    if (x.id < y.id)
    {
      return 1;
    }
    if (x.id > y.id)
    {
      return -1;
    }
    return 0;
  })
}

sortByName()
{
  if (this.sortSelection == "0")
  {
    this.sortByNameAsc();
  }
  else
  {
    this.sortByNameDesc();
  }
}

sortByNameAsc(): void
{
  this.departmentService.allDepartments.sort((x: Department, y: Department) => {
    if (x.name < y.name)
    {
      return -1;
    }
    if (x.name > y.name)
    {
      return 1;
    }
     return 0;
  })
}

sortByNameDesc(): void
{
  this.departmentService.allDepartments.sort((x: Department, y: Department) => {
    if (x.name < y.name)
    {
      return 1;
    }
    if (x.name > y.name)
    {
      return -1;
    }
     return 0;
  })
}

}
