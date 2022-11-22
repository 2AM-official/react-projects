// Destructing
const getCalculations = (a, b) => {
    // return {
    //     sum: a + b,
    //     diff: Math.abs(a - b),
    //     product: a * b,
    // }

    return [
        a + b, 
        Math.abs(a - b),
        a * b
    ]
}

const [ sum, product, diff ] = getCalculations(7, 9)

console.log(sum, product, diff)