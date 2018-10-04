import { Employee } from "../employee";

export class Department  {
 
//typscript provide the shorthand syntax to reduce the code
  constructor(
  public  id: number=0,
  public  name: string='',
  public  building: string='',
  public  employees:Employee[]=[]
    ) 
   {

   }
}
export interface IDepartment{
 id: number;
 name: string;
 building: string;
 employees:Employee[];
}
  

