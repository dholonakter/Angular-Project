import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import { Department } from '../model/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  /*here is list of departments*/
 @ViewChild('nameinput') nameinputRef:ElementRef;
  allownewdepartment=false;
  departmentcreation='no department is crated';
  departmentcreated=false;

  departments:Department[]=[
    new Department('Administration'),
  new Department('Finance'),
  new Department('Marketing'),
  new Department('IT')
];
  
   selectedDepartment:Department;

    /*here is below method */

    OnSelect(department:Department):void
    {
      this.selectedDepartment=department;    
    }
    //Adding the new department
    AddDepartment(nameInput:HTMLInputElement)
    {

    //    let temp:Department=new Department(name);
    //    this.departments.push(temp);
    //    this.selectedDepartment=temp;
    // 
    }
    //Update departement
    UpdateDepartment()
    {
        this.selectedDepartment.Ischange=true;
    }
   //Remove the selected object from the list
    DeleteDepartment()
    {
      let indexofdepartment=this.departments.indexOf(this.selectedDepartment);
      if(indexofdepartment>=0){
       this.departments.splice(indexofdepartment,1);
      }
    }
    
  constructor() 
  {
     setTimeout(() => {
       this.allownewdepartment=true;
     }, 2000);

  }
  

  ngOnInit() 
  {

  }
  OncreateDepartment(){
    this.departmentcreation="department is created";
    this.departmentcreated=true;
  }

}
