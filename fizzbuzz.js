const makeOrderedArray = (to, from = 1) => {
  const
    _from = Math.min(to, from),
    _to = Math.max(to, from)

  return Array.from(Array(1 + _to - _from).keys()).map(i => i + _from)
}

const isMultipleOf = (n, m) => n === 0 ? false : !(n % m)

const checkNumberReplacement = ((rules = {}, accumulate = true) => {
  let
    str = ``

  Object.keys(rules).forEach(
    key => rules[key] && (accumulate ? str += key : str = key),
  )

  return str
})

const fizzBuzz = (to, from) => makeOrderedArray(to, from).map(
  i => checkNumberReplacement({
    fizz: isMultipleOf(i, 3),
    buzz: isMultipleOf(i, 5),
  }) || i,
)

console.table(fizzBuzz(20, -15))
console.table(fizzBuzz(-20, 15))
