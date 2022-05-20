// TODO: Write your function in this file

function fizzBuzz(lower, upper) {

    // lower = 1
    // upper = 30

    let fizzBuzzArray = []


    for (let i = lower; i <= upper; i++) {
        
        fizzBuzzArray.push(i)
    
    }


    for (let j = fizzBuzzArray[0]; j <= fizzBuzzArray.length; j++) {
        
        if (j % 3 === 0 && j % 5 !== 0) {

            fizzBuzzArray.splice(j-1, 1, "Fizz")

        }

        else if (j % 5 === 0 && j % 3 !== 0) {

            fizzBuzzArray.splice(j-1, 1, "Buzz")

        }

        else if (j % 3 === 0 && j % 5 === 0) {

            fizzBuzzArray.splice(j-1, 1, "FizzBuzz")
            
        }
        
    }        


    return fizzBuzzArray
}

console.log(fizzBuzz(1, 30))


// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
