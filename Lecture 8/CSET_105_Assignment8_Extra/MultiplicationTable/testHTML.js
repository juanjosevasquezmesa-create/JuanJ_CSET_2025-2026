const { createElement } = require("react");

// let row = "";
let num = 12;

// let exampleRow = "";
let btn = document.getElementById("btn");

let table = document.createElement("table");
//when creating its best to put the pathfinding to where you want to add the element 
//this will also ensure that it works correctly
let tableRow0 = document.createElement("tr");

for (let i = 0; i <= num; i++) {
    const itemTd = document.createElement("td");
    itemTd.textContent = String(i) + " ";
    tableRow0.appendChild(itemTd);
    // exampleRow += String(i) + " ";
}

table.appendChild(tableRow0);

for (let i = 1; i <= num; i++) {
    const tableRow = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = String(i) + ": ";
    tableRow.appendChild(td); // 

    for (let j = 1; j <= num; j++) {
        const numTd = document.createElement("td");
        numTd.textContent = String(j * i) + " ";

        tableRow.appendChild(numTd);
        // let element = String(j * i) + " ";
        // row += element;
    }
    // console.log(row);
    // row = "";

}
document.body.appendChild(table);
//body is addd because <body> is visible to the user