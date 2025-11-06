let student = {
    name: "juan",
    age: 17,
    course: "CSET",
    home: {
        newHome: "Reading",
        oldHome: "DR"
    }
}
console.log(typeof student);// prints the data type of the variable
console.log(student.name);//calls the value associated with the name variable in the object
console.log(student.age);

console.log(student["age"]);//this works the same as the one above because ["varName"] works like ObjName.varName

console.log(student.course);

student.greeting = "wsp"; //this will add a new variable in the object and a value to the variable

console.log(student.home.newHome);// you can have an object in an object and you just need to pathfind the value








