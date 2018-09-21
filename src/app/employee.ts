export class Employee implements IEmployee 
{
    birth_date: Date;
    department_id: number;
    first_name: string;
    id: number;
    last_name: string;


    constructor(employeeId: number, departmentId: number, firstName: string, lastName: string, dob: Date) 
    {
        this.birth_date = dob;
        this.department_id = departmentId;
        this.first_name = firstName;
        this.id = employeeId;
        this.last_name = lastName;
    }

    displayBasicInformation(): string
    {
        return `ID: ${ this.id }, ${ this.first_name } ${ this.last_name }`;
    }

    displayDetailedInformation(): string
    {
        return `${ this.displayBasicInformation() }, works at dept.: ${ this.department_id }`;
    }
}

export interface IEmployee
{
  id: number;
  department_id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;

  displayBasicInformation(): string;
  displayDetailedInformation(): string;
}