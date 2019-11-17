const array = [1, 2, 3, [4, 5, [6, 7, 8], 9], 10]

const flatArray = array => array.reduce(
  (result, item) => result.push(...(Array.isArray(item) ? flatArray(item) : [item])) && result,
  [],
)

console.log(flatArray(array))
