let paragraph = document.body.getElementsByTagName("p");//this will look at the 'p' tags inside of the body element
//paragraph is an array of objects
document.body.insertBefore(paragraph[2], paragraph[0]);
//this will remove the 3rd instance (index 2) of a 'p' tag and move that element before the 1st (index 0) 'p' tag
//this will make the order (Three, One, Two)

