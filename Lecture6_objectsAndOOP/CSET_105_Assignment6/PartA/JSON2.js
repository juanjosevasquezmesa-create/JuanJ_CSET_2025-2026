//turning a string that looks like an object into an object

let objectString = '{"item" : "Beans", "job" : "CSET Major", "pants" : "Sweat Pants"}'

//You can turn these strings into objects via JSON.parse()
let object = JSON.parse(objectString);
console.log(object);
//{ item: 'Beans', job: 'CSET Major', Pants: 'Sweat Pants' }
//ie a normal object