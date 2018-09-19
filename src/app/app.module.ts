import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TasksComponent,
    DepartmentComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
