const { createElement } = require("react");

function numTable() {
    let num = Number(window.prompt("Enter a value: "));

    let btn = document.getElementById("btn");
    
    console.log(!isNaN(num) && (num != ''));//this will check whether 'num' is a number (if num is a number it will return true otherwise false) and if the user actually enters a value (because "" would count as the numeric value 0 making it true)
    
    while (isNaN(num) || (num == '' && num != 0 )) {//this keeps on running if num is not a number and it not empty
        //this checks whether or not the num variable is either an empty value or not a 0 and in that senario it will contiue otherwise it will prompt the user to enter it again
        //Just a reminder becuase somehow I forgot how reciprocal of logic works opposite of "&&" is "||" 
        num = Number(window.prompt("Enter a value: "));
    }
    
    // let row = "";
    // let num = 12;

    // let exampleRow = "";
    // let btn = document.getElementById("btn");

    let table = document.createElement("table");
    //when creating its best to put the pathfinding to where you want to add the element 
    //this will also ensure that it works correctly

    table.setAttribute('style', "border: 1px solid black; margin: 20px 0;");

    let tableRow0 = document.createElement("tr");

    for (let i = 0; i <= num; i++) {
        const itemTd = document.createElement("td");
        itemTd.setAttribute('style', "border: 1px solid black; padding 20px;");
        itemTd.textContent = String(i) + " ";
        tableRow0.appendChild(itemTd);
        // exampleRow += String(i) + " ";
    }

    table.appendChild(tableRow0);

    for (let i = 1; i <= num; i++) {
        const tableRow = document.createElement("tr");
        const td = document.createElement("td");
        td.setAttribute('style', "border: 1px solid black; padding 20px;");

        td.textContent = String(i) + ": ";
        tableRow.appendChild(td); // 

        for (let j = 1; j <= num; j++) {
            const numTd = document.createElement("td");
            numTd.setAttribute('style', "border: 1px solid black; padding 20px;");
            numTd.textContent = String(j * i) + " ";

            tableRow.appendChild(numTd);
            // let element = String(j * i) + " ";
            // row += element;
        }
        table.appendChild(tableRow);
        // console.log(row);
        // row = "";

    }
    btn.after(table);
    
    //body is addd because <body> is visible to the user

} 

    for (let i = 0; i <= numY; i++) {
        //I hate how dumb this is but numY is here becuase numY is how many items are in a column which is what we are showing in the top
        const itemTd = document.createElement("td");
        itemTd.setAttribute('style', "border: 1px solid black; padding 20px;");
        itemTd.textContent = String(i) + " ";
        tableRow0.appendChild(itemTd);
    }