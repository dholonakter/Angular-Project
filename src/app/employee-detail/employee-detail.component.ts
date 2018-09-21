import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [DepartmentComponent]
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private dept: DepartmentComponent) { }

  ngOnInit() {
  }

}
