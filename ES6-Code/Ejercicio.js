
function fusionar(arreglo1, arreglo2){
    const arreglo3 = [...arreglo1, ...arreglo2]
    const resultado = [...arreglo3].sort((a,b)=> a-b);
    return resultado
  }
  
  console.log (fusionar([3,2,4,5,67,833,56,86], [ 3,4,100,-100, -83])
  )