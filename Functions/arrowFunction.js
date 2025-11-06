const horn = () => {
    console.log("Toot");
};
//same as
function horn2() {
    console.log("Toot");
}

horn();
horn2();

//Arrow function is best where there is only 1 function like this

const square1 = x => x*x;//the x after the equal sign is the parameter
const square2 = (x) => { x * x };
