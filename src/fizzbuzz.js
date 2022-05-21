// TODO: Write your function in this file

function fizzBuzz(lower, upper) {

    // lower = 1
    // upper = 30

    let fizzBuzzArray = []


    for (let i = lower; i <= upper; i++) {
        
        fizzBuzzArray.push(i)
    
    }


    for (let j = 0; j < fizzBuzzArray.length; j++) {
        
        if (fizzBuzzArray[j] % 3 === 0 && fizzBuzzArray[j] % 5 !== 0) {

            fizzBuzzArray.splice(j, 1, "Fizz")

        }

        else if (fizzBuzzArray[j] % 5 === 0 && fizzBuzzArray[j] % 3 !== 0) {

            fizzBuzzArray.splice(j, 1, "Buzz")

        }

        else if (fizzBuzzArray[j] % 3 === 0 && fizzBuzzArray[j] % 5 === 0) {

            fizzBuzzArray.splice(j, 1, "FizzBuzz")
            
        }
        
    }        


    return fizzBuzzArray
}

console.log(fizzBuzz(51, 54))


// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
