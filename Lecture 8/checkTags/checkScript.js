// checks if target attribute is not set, If so prints true -
console.log(document.getElementsByTagName("a")[0].target === ""); // this checks if the first a tag has a target attribute

document.getElementsByTagName("a")[0].target = "_blank"; //this gives the first a tag the target attribute 

console.log(document.getElementsByTagName("a")[0].target);
// -> _blank


