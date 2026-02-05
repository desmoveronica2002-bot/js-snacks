let p1 = prompt('parola1');
let p2 = prompt('parola2');

if(p1.length<p2.length){
    console.log(p1)
    console.log(p2)
}
else if(p1.length>p2.length){
    console.log(p2)
    console.log(p1)
}
else {
    console.log(p1,p2)
}