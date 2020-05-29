/* Kata1 creating an add function */
function addUp (value1, value2) {

    addTotal = value1 + value2

    return addTotal

}

// Click Event for Page //
const addButtonClick = document.querySelector('#addButton')
const addNumber1 = document.querySelector('.addNumber1')
const addNumber2 = document.querySelector('.addNumber2')
const results = document.querySelector('.addResults')

addButtonClick.addEventListener('click', function() {
    let value1 = Number(addNumber1.value)
    let value2 = Number(addNumber2.value)

    let returnResults

    returnResults = addUp(value1, value2)

    results.innerHTML = returnResults

})
console.log('Kata1: ', addUp(2, 4))

/* Kata2 create a multiplication function */
function myMultiply (firstNumber, secondNumber) {
    let multipleTotal = 0

    for (let count = 0; count < secondNumber; count += 1) {
        multipleTotal = addUp(firstNumber, multipleTotal)
    }
    return multipleTotal
}

// Click Event for Page //
const multiplyButtonClick = document.querySelector('#multiplyButton')
const multiplyNumber1 = document.querySelector('.multiplyNumber1')
const multiplyNumber2 = document.querySelector('.multiplyNumber2')
const results2 = document.querySelector('.multiplyResults')

multiplyButtonClick.addEventListener('click', function() {
    let firstNumber = Number(multiplyNumber1.value)
    let secondNumber= Number(multiplyNumber2.value)

    let returnResults2

    returnResults2 = myMultiply(firstNumber, secondNumber)

    results2.innerHTML = returnResults2

})

console.log('Kata2: ', myMultiply(6, 6))

/* Kata3 create a power/exponent function */
function myPower (myNumber, power) {
    let powerTotal = 1

    for (let count = 0; count < power; count += 1) {
        powerTotal = myMultiply(myNumber, powerTotal)
    }

    return powerTotal
}

console.log('Kata3 : ', myPower(2, 8))

/* Kata4 create a factorial function */
function myFactorial(myNumber2) {
    let factorialTotal = myNumber2

    for (let count = myNumber2; count > 0; count -= 1) {
        let myNextCount = (count - 1)

        if (myNextCount > 0) {

            factorialTotal = myMultiply(factorialTotal, myNextCount)

        }
    }

    return factorialTotal
}

console.log('Kata4 : ', myFactorial(5))

/* Kata5 create a Fibonacci number */
function myFibonacci(myNumber3) {
    let fibonacciTotal = 0
    let startFib = 1
    let myNextNumber

    let fibonacciArray = [fibonacciTotal, startFib]

    for (let count = 0; count < myNumber3; count += 1) {

        myNextNumber = startFib

        startFib = addUp(fibonacciTotal, startFib)

        fibonacciTotal = myNextNumber

        fibonacciArray.push(startFib)
        
    }

    return(fibonacciArray[myNumber3 - 1])
}

console.log('Kata5 : ', myFibonacci(8))