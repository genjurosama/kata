// FizzBuzz Logic
const fizzBuzz = (number) => {
  let value = ''
  if (number % 3 === 0) {
    value = 'fizz'
  }
  if (number % 5 === 0) {
    value += 'buzz'
  }
  if (number % 3 !== 0 && number % 5 !== 0) {
    value = number
  }
  return value
}

// Wrapper Test Function
const main = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(fizzBuzz(i))
  }
}

main(36)
