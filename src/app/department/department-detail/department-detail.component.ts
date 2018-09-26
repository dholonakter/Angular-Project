import { Component, OnInit,Input } from '@angular/core';
import { Department } from '../../model/department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  @Input() departmentDetail: Department;

  constructor() { }

  ngOnInit() {
  }

}
