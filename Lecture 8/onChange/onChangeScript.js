function whoClickedMe(thing) { //thing will be the select tag that is chosen at a given time
    console.log(thing);//this will print the html code (the select tag whole)
    console.log(thing.id);// this will print the id of the select tag's id 
    // -> cars
    console.log(thing.attributes);// this will return the atttributes in an object format

    console.log(thing.value);// this will return the value of the selected object (the options inside of the slect tag)
    // Ie: if Saab is picked the value would be -> saab
}