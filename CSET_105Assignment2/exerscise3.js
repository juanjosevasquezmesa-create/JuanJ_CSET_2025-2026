let num = 8;
let grid = "";

for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {//odd rows
        for (let j = 0; j < num; j++) {
            if (j % 2 != 0) {//odd columns
                grid = grid + " ";
            } else {//even columns
                grid = grid + "#";
            }
        }
    }else{//even rows
        for (let j = 0; j < num; j++) {
            if (j % 2 != 0) {//odd columns
                grid = grid + "#";
            } else {//even columns
                grid = grid + " ";
            }
        }
    }
    grid = grid + "\n";
}
console.log(grid);