const nums = [1, 2, 1, 1, 5, 4]

// Reducer que sume los numeros
nums.reduce((acc, x) => acc + x, 0)

// Reducer que calcule cuantos numeros hay en el Array
nums.reduce((acc, x) => acc + 1 , 0)

// Reducer que calcule el numero de unos (1)
nums.reduce((acc, x) => {
    if (x === 1) {
        return acc+1
    } else {
        return acc+0
    }
}, 0)

nums.reduce ((acc, x) x === 1 ? acc + 1 : acc, 0)

// Reducer que encuentre el numero maximo 
nums.reduce((acc, x) => {
    if (x > acc) {
        return x
    } else {
        return acc
    }
}, -Infinity) 

// Reducer que elimine todos los unos
nums.reduce((acc, x) {
    if (x !== 1) {
        acc.push(x)
    }
    return acc
}, [])

// Reducer que sume 5 a todos los numeros 
nums.reduce((acc, x) => {
    let y= x+5
    acc.push(y)
    return acc
}, []) 

nums.reduce((acc, x) => {
    acc.push(x + 5)
    return acc
}, [])

