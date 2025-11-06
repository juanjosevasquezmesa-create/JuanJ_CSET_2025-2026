
function numTable() {
    let numX = Number(window.prompt("Enter First value: "));

    let btn = document.getElementById("btn");

        
    while (isNaN(numX) || (numX == '' && numX != 0)) {
        numX = Number(window.prompt("Enter a value: "));
    }
        
    let numY = Number(window.prompt("Enter Second value: "));
    
    while (isNaN(numY) || (numY == '' && numY != 0 )) {
        numY = Number(window.prompt("Enter a value: "));
    }
    
    let table = document.createElement("table");

    table.setAttribute('style', "border: 1px solid black; margin: 20px 0;");

    let tableRow0 = document.createElement("tr");

    for (let i = 0; i <= numY; i++) {
        //I hate how dumb this is but numY is here becuase numY is how many items are in a column which is what we are showing in the top
        //ie numY is the width
        const itemTd = document.createElement("td");
        itemTd.setAttribute('style', "border: 1px solid black; padding 20px;");
        itemTd.textContent = String(i) + " ";
        tableRow0.appendChild(itemTd);
    }

    table.appendChild(tableRow0);

    for (let i = 1; i <= numX; i++) {
        const tableRow = document.createElement("tr");
        const td = document.createElement("td");
        td.setAttribute('style', "border: 1px solid black; padding 20px;");

        td.textContent = String(i) + ": ";
        tableRow.appendChild(td); // 

        for (let j = 1; j <= numY; j++) {
            const numTd = document.createElement("td");
            numTd.setAttribute('style', "border: 1px solid black; padding 20px;");
            numTd.textContent = String(j * i) + " ";

            tableRow.appendChild(numTd);
        }
        table.appendChild(tableRow);

    }
    btn.after(table);

} 