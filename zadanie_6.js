let arr = [1,1,1,1,1,1,1,1,1,];
let check = arr.every(function(element,index,array){
    if (typeof element === "number"){
        return true;
    } else {
        return false;
    }
});
console.log(check);