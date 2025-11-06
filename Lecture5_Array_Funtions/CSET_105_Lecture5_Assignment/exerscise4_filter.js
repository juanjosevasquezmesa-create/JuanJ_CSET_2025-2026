let array = [1, 2, 3, 4, 5, 6];


function fnFilter(arr, num,logic) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        switch (logic) {
            case 1:
                if (arr[i] < num) {
                    newArray.push(arr[i]);
                }
                break;
        
            case 2:
                if (arr[i] > num) {
                    newArray.push(arr[i]);
                }

                break;

            case 3:
                if (arr[i] == num) {
                    newArray.push(arr[i]);
                }

                break;
            default:
                break;
        }
    }
    return newArray;
}

console.log(fnFilter(array, 2, 2));// array the number being compare