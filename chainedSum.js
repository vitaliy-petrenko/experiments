const sum = number => {
  let sum = number

  const buffer = number => {
    sum += Number.isFinite(number) ? number : 0
    return buffer
  }

  buffer.valueOf = buffer.toString = () => sum

  return buffer
}


console.log(+sum(2)())
console.log(+sum(5)(2))
console.log(+sum(1)(2)(3))
