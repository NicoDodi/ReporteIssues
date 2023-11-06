

//   ESTA FUNCION DIVIDE A N ENTRE LA SUMA DE LOS ELEMENTOS DE N
function sumaDeLista(l, n){
   let suma = 0;
   for(let i = 0; i < l.length; i++){
        suma += l[i];
   }
   return n/suma;
}