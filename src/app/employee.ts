export class Employee 
{
    static id: number = 0;

    employeeId: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;

    constructor(firstName: string, lastName: string, phone: string, email: string) 
    {
        // Assign a unique id to the employee.
        this.employeeId = ++Employee.id;

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }

    displayBasicInformation()
    {
        return `ID: ${ this.employeeId }, ${ this.firstName } ${ this.lastName }`;
    }

    displayDetailedInformation()
    {
        return `${ this.displayBasicInformation() }, phone: ${ this.phone }, e-mail: ${ this.email }`;
    }
}