import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }