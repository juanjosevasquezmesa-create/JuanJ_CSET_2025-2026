//play around with this idea

const persons = [
    { name: 'Ashraf', age: 43 },
    { name: 'Awwab', age: 11 },
    { name: 'Mardiyyah', age: 7},
    { name: 'Mothimanna', age: 38 }
];

const fullAge = [];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {//this looks in each {} but to call the intger associated with the "age" variable you have you call (arrayName[indexOfContainer].variableName)
        fullAge.push(persons[i]);//if you call the index of the whole conatiner it will add the matched variable and value ie if you call index 0 it will return { name: 'Ashraf', age: 43 }
    }
    
}

console.log(fullAge);
//[ { name: 'Ashraf', age: 43 }, { name: 'Mothimanna', age: 38 } ]
