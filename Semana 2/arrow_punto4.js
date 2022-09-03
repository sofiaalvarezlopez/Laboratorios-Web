// Esta funcion recibe dos numeros enteros positivos a,b y retorna su MCD.
const mcd = (a, b) => (a === b) ? a : (mcd(Math.min(a, b), Math.abs(a - b)));
console.log(mcd(45, 100)); //Prints 5