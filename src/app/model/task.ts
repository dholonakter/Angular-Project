export class Task {
public id: number;
public department_id: number;
public name: string;
public employees: number[];
public due_date: Date;

  constructor(ID: number, Department_id: number, Name: string, Employees: number[], Due_date: Date) {
    this.id = ID;
    this.department_id = Department_id;
    this.name = Name;
    this.employees = Employees;
    this.due_date = Due_date;
   }
}
export interface ITask{
id: number;
department_id: number;
name: string;
employees: number[];
due_date: Date;
}
