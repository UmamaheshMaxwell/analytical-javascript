/*
    What is NaN, why do we need it, and when can it break the page?

    NaN stands for “not a number.” and it can break your table of 
    numbers when it has an arithmetic operation that is not allowed.
*/

console.info(Math.sqrt(-5))
console.info(Math.log(-1))
console.info(parseFloat("foo"))

console.info(NaN === NaN)
console.info(NaN < 2)
console.info(NaN > 2)
console.info(NaN === 2)