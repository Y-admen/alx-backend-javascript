interface Teacher{
    // readonly property can only be assigned a
    // value once during its initialization.
    readonly firstName:string,
    readonly lastName:string,
    fullTimeEmployee:boolean,
    // optional properties add a ? after the property name
    yearsOfExperience?:number,
    location:string,
    // use index signatures when the property names are not known in advance
    // (the property name):str /type of the value: any
    [index: string]: any,
}
interface Directors extends Teacher{
    numberOfReports:number,
}

function printTeacher(firstName:string, lastName:string):string{
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction{
    // Function Signature
    (firstName:string, lastName:string):string;
}
class StudentClass{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework (): string {
        return `Currently working`;
        
    }
    displayName(): string {
        return this.firstName;
    }

    
}
