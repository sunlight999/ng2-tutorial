export class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

export class ActivStudent extends Student {
    constructor(public firstName, public middleInitial, public lastName,public mainCourse) {
        super(firstName, middleInitial,lastName);
   
    }
}


function greeterActiv(student : ActivStudent) {
    return "Hello, " + student.fullName +", student interested in   " + student.mainCourse;
}


let user = new ActivStudent("Jane", "M.", "User","Angular");

document.body.innerHTML = greeterActiv(user);