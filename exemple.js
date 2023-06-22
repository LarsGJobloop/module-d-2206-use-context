/**
 * @param {number[]} numberArray
 * @returns 
 */
function sum(numberArray) {
  return numberArray.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log(sum([2, 3, 4, 5]))
console.log(sum([2, 3, 4, 5]))


/**
 * Connects you to the specified backend server
 * 
 * @param {{
 *  url: string,
 *  accessToken: string,
 *  userName?: string
 * }} options 
 */
function connectToBackend(options) {
  if (options.userName !== undefined) {
    options.userName
  }
}



connectToBackend({
  url: www.example.com,
  accessToken: "somesecretestring"
})

connectToBackend({
  url: www.example.com,
  accessToken: "somesecretestring",
  userName: "larsg"
})