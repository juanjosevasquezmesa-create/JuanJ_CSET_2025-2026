let link = document.body.getElementsByTagName("a")[0]; //this will look at the document Object, the body tag inside of it, and it will look for the tag that is named inside of the arguement // the[0] i think means the first instance of that occurence
//link is a single value
//link is index 0 of an array
console.log(link.href + " This will show the link of the first 'a' tag"); //herf is an object variable inside of the link object, which the link object is the a tag so it would be (a[0].herf)

//let link = document.body.getElementsByTagName("a"); //this will look at evey 'a' tag and put it into an array (link will hold every instance of an a tag)
//console.log(link.herf); //this will not work becuase it's looking at the whole array
//but this will work 
//console.log(link[#].herf);

let ostrich = document.getElementById("gertrude"); //in the senario in which there are multiple simular IDs it will only look at the first instance and ignore the rest making it into a single object instead of an array of objects
//ostrich is a single value
console.log(ostrich.src +" This will show the source name of the ostrich image");

let paragraph = document.body.getElementsByTagName("p");//this will look at the 'p' tags inside of the body element
//paragraph is an array of objects
document.body.insertBefore(paragraph[2], paragraph[0]);
