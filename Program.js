

//   ESTA FUNCION DIVIDE A N ENTRE LA SUMA DE LOS ELEMENTOS DE N
function sumaDeLista(l, n){
   let suma = 0;
   for(let i = 0; i < l.length; i++){
        suma += l[i];
   }
   return n/suma;
}

array1 = [2,2,2];
//array2 = [0,0];

console.log(sumaDeLista(array, 6));
//console.log(sumaDeLista(array2, 6));
