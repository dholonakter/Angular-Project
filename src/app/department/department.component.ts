import { Component, OnInit } from '@angular/core';

import { Department } from '../model/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  /*here is list of departments*/
  departments:Department[]=[
    new Department('Administration'),
  new Department('Finance'),
  new Department('Marketing'),
  new Department('IT')
];
  
   selectedDepartment:Department;//Memebers
   change:boolean=false;

    /*here is below method */

    OnSelect(department:Department):void
    {
      this.selectedDepartment=department;    
    }
    
    AddDepartment()
    {
       let temp:Department=new Department("");
       this.departments.push(temp);
       this.selectedDepartment=temp;
    }
    //Update departement
    UpdateDepartment()
    {
        this.selectedDepartment.Ischange=false;
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

  }
  

  ngOnInit() 
  {

  }

}
