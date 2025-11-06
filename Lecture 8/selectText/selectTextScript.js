let h1 = document.getElementsByTagName("h1")[0];

function whoClickedMe(thing) { //thing will be the select tag that is chosen at a given time
    switch (thing.value) {//this will highlight the value of the selected option
        case "saab":
            h1.innerHTML = "Saab";//this will set the h1 tag with t
            break;
    
        default:
            break;
    }
}