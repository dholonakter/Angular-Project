export class Employee 
{
    static id: number = 0;

    employeeId: number;
    _firstName: string;
    _lastName: string;
    _phone: string;
    _email: string;

    detailsChanged: boolean;

    constructor(firstName: string, lastName: string, phone: string, email: string) 
    {
        // Assign a unique id to the employee.
        this.employeeId = ++Employee.id;

        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._email = email;

        this.detailsChanged = false;
    }

    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName: string)
    {
        this._firstName = firstName;
        this.detailsChanged = true;
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName: string)
    {
        this._lastName = lastName;
        this.detailsChanged = true;
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone: string)
    {
        this._phone = phone;
        this.detailsChanged = true;
    }

    get email()
    {
        return this._email;
    }

    set email(email: string)
    {
        this._email = email;
        this.detailsChanged = true;
    }

    displayBasicInformation()
    {
        return `ID: ${ this.employeeId }, ${ this._firstName } ${ this._lastName }`;
    }

    displayDetailedInformation()
    {
        return `${ this.displayBasicInformation() }, phone: ${ this._phone }, e-mail: ${ this._email }`;
    }
}