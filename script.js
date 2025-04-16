function findMax(arr) {
    // Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr.length === 0) {
        return -Infinity;
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [8,9,8,10,9];
console.log(findMax(numbers)); // Salida esperada: 10

console.log(findMax([1])); // Salida esperada: 1
console.log(findMax([])); // Salida esperada: -Infinity
console.log(findMax([-1, -2, -3])); // Salida esperada: -1
