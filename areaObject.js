let base = 5
let height = 7
let radio = 3
let side = 8

const triangleArea = (base, height) =>  base * height / 2
console.log(`El área de un triangulo de base
  ${base} y altura ${height} es :${triangleArea(base,height)}`)

// Area circulo
// Pi * r^2
const circuleArea = (radio) => Math.PI * Math.pow(radio,2)
// const circuleArea = (radio) =>  Math.PI * (radio*radio)
console.log(`El área de un círculo de radio ${radio} es :${circuleArea(radio)}`)


// Area cuadrado
// a^2
const squareArea = (side) =>  Math.pow(side,2)
console.log(`El área de un cuadrado de lado ${side} es :${squareArea(side)}`)

// Area Rectangulo
// base x height
const rectanguleArea = (base,height) =>  base * height
console.log(`El área de un rectágulo de base ${base} y altura ${height} es :${rectanguleArea(base,height)}`)
