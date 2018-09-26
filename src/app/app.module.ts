import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { TasksFilterPipe } from './tasks-filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    TasksComponent,
    DepartmentComponent,
    EmployeeDetailComponent,
    TasksDetailComponent,
    DepartmentDetailComponent,
    EmployeeFilterPipe,
    TasksFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
