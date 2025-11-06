let images = document.body.getElementsByTagName("img");// this looks at the parent container not the text container
//makes an array composed of every img element
let node = document.createTextNode(images[0].alt);
//this will make the node variable a node with the value of the alt attribute of the first 'img'
//a node is an element we can put into the html file to make it able to be shown to the user.
//text node is the actual text shown on screen
//tags are containers and the text inside of them are the textNodes
/*
<p> Hello World </p>
// p is a container, while "Hello World" is the textNode
*/

if (images[0].alt) {
    images[0].parentNode.replaceChild(node, images[0]);
    //the parentNode is the element or container that contains the child tag/element in this example this looks at the image tag inside of the 'p' tag
    //so the parentNode is the p
    /*
    Another way to do this:
    let img = document.querySelector("img");      // <img ...> ie teh cat image
    let parent = img.parentNode;                  // <p>...</p> the p tag the contians the cat image
    let textNode = document.createTextNode(img.alt); // "A cute cat" this will delete the cat iamge and put the alt text in it's place

    parent.replaceChild(textNode, img);
    */
}

/*this will replace images[0] (the first image in the page) with the node (ie the alt text attribute of the first image)

//to do this for all do this

//my way

//
for (let i = images.length - 1; i >= 0; i--) {
  let node = document.createTextNode(images[0].alt);
  if (images[0].alt) {
      images[0].parentNode.replaceChild(node, images[0]);
  }
}
//

 for (let i = 0; i < images.length; i++) {
     node = document.createTextNode(images[i].alt);
     //this will make the node variable a node with the value of the alt attribute of the first 'img'
     images[i].parentNode.replaceChild(node, images[i]);
 }

/*
The correct way to do this would be:

//
let images = Array.from(document.body.getElementsByTagName("img"));
//Array.from() makes a snapshot copy, so the loop doesn’t skip anything.

for (let i = 0; i < images.length; i++) {
  let node = document.createTextNode(images[i].alt);
  images[i].parentNode.replaceChild(node, images[i]);
}
//

or

//
let images = document.querySelectorAll("img");

for (let img of images) {
  let node = document.createTextNode(img.alt);
  img.parentNode.replaceChild(node, img);
}

//

*/

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length-1; i < images.length - 1; i++) {
        
        
    }
}