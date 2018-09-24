import { Employee } from "../employee";

export class Department {
 
  /*
  id:number;
  name:string;
  building:string;

  */
  constructor(
    public id: number=0,
    public name: string = '',
    public building: string = '',
    public employees: Employee[]=[]
  ) 
  {

  }
  
  /*

  constructor(id: number, name: string, building: string) 
  {
      this.id=id;
      this.name=name;
      this.building=building
  }
*/

  }
  

