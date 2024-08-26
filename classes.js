class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printStudent(){
        console.log("Name of student: ",this.name);
        console.log("Age of student: ",this.age);
    }
}

const st = new Student("Atul", 21);
st.printStudent();
console.log(st);uu