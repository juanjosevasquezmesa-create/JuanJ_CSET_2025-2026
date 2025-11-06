//complex object that has arrays, objects inside of objects, and fucntions
let info = {
    name: ["Juan", "Jose"],
    age: 17,
    gender: "male",
    interests: ['music', 'gaming'],
    family: {
        mom: "Brigida",
        dad: "Juan V."
    },
    all: function () {
        console.log(person.name[0] + ' ' + person.name[1] + " is " + person.age)
    },
    greeting : function () {
        console.log('Hi I\'m ' + this.name[0] + '.');
    },
    community(){
        return (this.family.mom + " " + this.family.dad);
    },
    print: console.log("print")
};

//how to declare a varible with a fucntion and bypassing the missing infomation due to the (this.) keyword
let method = info.community.bind(info);//this will allow method() to see the information in the "info" function

console.log(method());

//accessing an object inside of another object
console.log(info.family.mom);
//Brigida

//calling an array index inside of an object
console.log(info.interests[1]); //this will call index 1 of the array atributed to the interests variable
// gaming

//You can change an array or a specific index
info.interests = ["Coding", "Cooking", "Math", "Anime"];//this will change the array tied to interests to ["Coding", "Cooking", "Math", "Anime"]
console.log(info.interests);
// ["Coding", "Cooking", "Math", "Anime"]

info.interests[3] = "JavaScript";
console.log(info.interests);
//["Coding", "Cooking", "Math", "JavaScript"]


//Changing the function inside of an object
function fnHelp() {
        return console.log("help");
    }
info.all = fnHelp;//this will replace the code inside of the all fucntion with the code inside fo the fnHelp function

info.all()
// help