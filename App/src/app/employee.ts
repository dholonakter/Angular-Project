export class Employee {
    // Properties
    static id: number = 0;
    
    employeeId: number;
    firstName: string; 
    lastName: string;
    phone: string;
    email: string;

    // Constructor
    constructor(firstName: string, lastName: string, phone: string, email: string) {
        
        this.employeeId = ++Employee.id;

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }
}