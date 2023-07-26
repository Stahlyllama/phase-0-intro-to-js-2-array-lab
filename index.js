const cats =["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  cats.push("Ralph");  
}

function destructivelyRemoveLastCat(){
 cats.pop(); 
}

function destructivelyPrependCat(name){
  cats.unshift ("Bob");
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  appendCat = cats.concat("Broom");  
 return appendCat;
}

function prependCat(name){
  prependCat = ["Arnold"].concat(cats);
  return prependCat;
}

function removeLastCat(){
 removeLastCat = cats.slice(0,-1);
 return removeLastCat;
}

function removeFirstCat(){
 removeFirstCat = cats.slice(1);
 return removeFirstCat;
}







  




