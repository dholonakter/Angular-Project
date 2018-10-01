import { Employee } from "../employee";

export class Department {
 
  id:number;
  name:string;
  building:string;
  employees: Employee[];

  constructor(
     id: number,
     name: string,
     building: string,
     employees: Employee[]
  ) 
  {
    this.id = id;
    this.name = name;
    this.building = building;
    this.employees = employees;
  }
}

//Here is your interface for Service - Bas
export interface IDepartment{
 id: number;
 name: string;
 building: string;
 employees: Employee[];
}
  

