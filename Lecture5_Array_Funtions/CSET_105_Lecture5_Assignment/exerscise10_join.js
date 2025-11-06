let array = ["a", "b", "c", "d"];


function fnJoin(array, joiner){
    let str = "";
    if (joiner == undefined) {
        joiner = '';
    }
    for (let i = 0; i < array.length; i++) {
        str = str + array[i] + joiner;//this combines each string elemnt one by one to an empty string to combine (concatenation)
        
    }
    return str;
}

console.log(fnJoin(array));

console.log(fnJoin(array, " "));


