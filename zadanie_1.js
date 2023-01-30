let value = +prompt('enter value');

if ((typeof value) !== "number" || isNaN(value) === true){
    console.log("oops looks like you make a mistake");
} else {
    if(value % 2 === 0){
        console.log("number is Even");
    } else if (value % 1 === 0){
        console.log("number is Odd");
    }
}

let x = NaN;
console.log(isNaN(x));
