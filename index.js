
let cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function appendCat(name){
    const allCats = [...cats, name]
    return allCats;
}
function prependCat(name){
    const prependAllCats = [name, ...cats]
    return prependAllCats;
}
function removeLastCat(){
    const byeCat = cats.slice(0, 2)
    return byeCat;
}
function removeFirstCat(){
    const byeCats = cats.slice(1, 3)
    return byeCats;
}