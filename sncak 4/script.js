let arr =[];


for(let i=0; i<7; i++){
   let num = Number(prompt("numero"));
   
   if(num%3==0){
     arr.push(num);  
   }
}

console.log(arr);