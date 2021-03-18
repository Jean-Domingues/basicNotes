function verificaMaior(n){
  let maiorIdade = 0

   for( i of n) {
     if (i >= 18 ){
      maiorIdade ++;
     }
   }
   
   return maiorIdade
}

const nums = [80, 21, 26, 7];

console.log(verificaMaior(nums));