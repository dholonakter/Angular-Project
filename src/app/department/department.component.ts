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
       let temp:Department=new Department("DepartmentName");
       this.departments.push(temp);
       this.selectedDepartment=temp;
    }
    //Update departement
    UpdateDepartment()
    {

    }
   //REMove the selected object from the list
    DeleteDepartment()
    {

    }
    


  constructor() 
  {

  }
  

  ngOnInit() 
  {

  }

}
