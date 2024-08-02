interface DirectorInterface{
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}
interface TeacherInterface{
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}
class Director{
    workFromHome(): string{
        return `Working from home`;
    }
    getToWork(): string{
        return `Getting a coffee break`;
    }
    workDirectorTasks(): string{
        return `Getting to director tasks`;
    }
}
class Teacher{
    workFromHome(): string{
        return `Cannot work from home`;
    }
    getCoffeeBreak(): string{
        return `Cannot have a break`;
    }
    workTeacherTasks(): string{
        return `Getting to work`;
    }
}
function createEmployee(salary: (number | string)): (Director | Teacher){
    if (typeof salary === 'number' && salary < 500){
        return new Teacher();
    }
    return new Director();
}
export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}
