// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
    

    let fizzBuzzArray = []


    for (let i = lower; i <= upper; i++) {

        if (i % 3 === 0 && i % 5 !== 0) {

            fizzBuzzArray.push("Fizz")

        }

        else if (i % 5 === 0 && i % 3 !== 0) {

            fizzBuzzArray.push("Buzz")

        }

        else if (i % 3 === 0 && i % 5 === 0) {

            fizzBuzzArray.push("FizzBuzz")

        }
        
        else fizzBuzzArray.push(i)
    
    }

    return fizzBuzzArray    
}      

console.log(fizzBuzz(3, 30))


// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
