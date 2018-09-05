import { Component, OnInit } from '@angular/core';

import { Department } from '../model/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  departments=[];

  constructor() {

    this.departments=
    [
      new Department('Administration'),
      new Department('Finance'),
      new Department('Marketing'),
      new Department('IT')
    ];
  }

  ngOnInit() {
  }

}
