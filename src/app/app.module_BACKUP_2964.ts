import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DepartmentComponent } from './department/department.component';
<<<<<<< HEAD
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
>>>>>>> employeeService

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TasksComponent,
    DepartmentComponent,
<<<<<<< HEAD
    TasksDetailComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
=======
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
>>>>>>> employeeService
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
