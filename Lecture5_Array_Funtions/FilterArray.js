const persons = [
    { name: 'Ashraf', age: 43 },
    { name: 'Awwab', age: 11 },
    { name: 'Mardiyyah', age: 7},
    { name: 'Mothimanna', age: 38 }
];

const all = [];// you have to declare the variable to an array becuase javaScript does not assume this 

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {//this looks in each {} but to call the intger associated with the "age" variable you have you call (arrayName[indexOfContainer].variableName)
        all.push(persons[i]);//if you call the index of the whole conatiner it will add the matched variable and value ie if you call index 0 it will return { name: 'Ashraf', age: 43 }
    }
    
}

console.log(all);
//[ { name: 'Ashraf', age: 43 }, { name: 'Mothimanna', age: 38 } ]

//Filter which acts like map but you can add a condition to highlight/ return an element instead of changing an element and returnign all of them into a new array

const fullAge2 = persons.filter(person => person.age >= 18);//this runs through every element and checks the .age variable to see if it is 18 and if it is it is added to the temperary array list then it is assigned to the final new array ie (fullAge2)


