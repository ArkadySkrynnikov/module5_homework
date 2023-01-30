let firstMap = new Map([
    ["Russia","Moscow"],
    ["Great Britan","London"],
    ["France","Paris"]
]);

for (let entry of firstMap){
    console.log(entry);
}

firstMap.forEach(function(value, key, map){
    console.log(`ключ - ${key} ,значение - ${value}`); 
});