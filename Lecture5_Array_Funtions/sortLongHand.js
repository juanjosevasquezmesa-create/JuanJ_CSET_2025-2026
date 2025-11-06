let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort(function (a, b) {// a = 0, b = 1, and so on
    if (a > b) {//if the current index is greater than the next it will move the current index forward in the function
        //If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first
        return 1;
    }
    if (a < b) {/*If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.*/
        return -1;
    }
/*If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.*/
    return 0;
});

console.log(numbers);



let num = [10, 4, 6, 7, 3, 4, 5, 4, 4, 7, 8];

num.sort();//this does not work as intended
//returns [10, 3, 4, 4, 4, 4, 5, 6, 7, 7, 8]


num.sort((a,b) => a-b);// acending order
//[ 0, 1, 2, 3, 10, 20, 30]

num.sort((a,b) => b-a);// decending order
//[10, 3, 4, 4, 4, 4, 5, 6, 7, 7, 8]


console.log(num);
