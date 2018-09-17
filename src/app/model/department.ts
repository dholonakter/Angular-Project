export class Department {
  static id:number=0;
  departmentname:string;
  departmentid:number;
  Ischange:boolean;
  
  constructor(name:string)
  {
    this.departmentid=++Department.id;
    this.departmentname=name;
  }
  
}
