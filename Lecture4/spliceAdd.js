//When you use the splice feature for an array you can also add elemnts as well

var companies = ["McDonald's", "Burger King", "Subway"]

var football= [ "nike", "puma", "air", "adidas"];
let football_Simple = football.splice (2,1, "New", "Newer");//this will remove the second index elemnt but add the strings "New" and "Newer" at index 2 puhing the following elemnts
console.log(football_Simple);

football.splice(2,1, ...companies);//this will add all elements in the companies array to the football array starting at index 2 after the element at index 2 is removed