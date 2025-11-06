let row = "";
let num = 12;

let exampleRow = "";
for (let i = 0; i <= num; i++) {

    exampleRow += String(i) + " ";
        
}
console.log(exampleRow);

for (let i = 1; i <= num; i++) {
    row = i + ": ";

    for (let j = 1; j <= num; j++) {
        let element = String(j * i) + " ";
        row += element;
    }
    console.log(row);
    row = "";

}