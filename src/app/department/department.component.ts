import { Component, OnInit } from '@angular/core';

import { Department } from '../model/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  /*here is list of departments*/
  
departments:Department[]=[];
selectedrow:number;
depmodel: Department;
showNew:boolean=false;
kindofsumbmit:string="save";
constructor() {
  //adding default department data

  this.departments.push(new Department(10,"Administration"));
  this.departments.push(new Department(20,"IT"));
  this.departments.push(new Department(65, "Software Engineering"));
  this.departments.push(new Department(66, "Human Resources"));
  this.departments.push(new Department(67, "Student Administration"));
  this.departments.push(new Department(68, "ICT & Support"));
}
ngOnInit() {
}
//adding the value to the department...
Onnew() 
{
  this.depmodel=new Department();
  this.kindofsumbmit='save';
  this.showNew=true;
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
      this.departments[this.selectedrow].departmenId = this.depmodel.departmenId;
      this.departments[this.selectedrow].departmentname = this.depmodel.departmentname; 
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

departmentName(id: number): string
{
  for (let department of this.departments)
  {
    if (id == department.departmenId)
    {
      return department.departmentname;
    }
  } 
}

}
