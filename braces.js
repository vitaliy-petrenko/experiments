const
  BRACES = ['{', '}', '(', ')', '[', ']'],
  isOdd = number => number % 2 === 1,
  makeBracePositionError = position => {
    throw Error(`wrong brace at position: ${position}`)
  }

const validateBraces = string => {
  if (typeof string !== 'string') throw new Error('Argument must be a string type')

  const
    stack = []

  for (let i = 0; i < string.length; i++) {
    const
      char = string[i]
      , braceIndex = BRACES.indexOf(char)

    if (!~braceIndex) continue

    if (isOdd(braceIndex)) {
      if (!stack.length) return makeBracePositionError(i)

      if (stack[stack.length - 1].brace === BRACES[braceIndex - 1]) {
        stack.pop()
      } else {
        return makeBracePositionError(i)
      }
    } else {
      stack.push({
        brace: BRACES[braceIndex],
        i,
      })
    }
  }

  return stack.length ? makeBracePositionError(stack.map(({ i }) => i).join(', ')) : true
}


const checkBraces = string => {
  try {
    console.log(`${string}: ${validateBraces(string)}`)
  } catch (e) {
    console.warn(`${string}: ${e}`)
  }
}

const
  string1 = 10,
  string2 = 'asda(())ki[{}]d',
  string3 = 'as[da(d(',
  string4 = 'asda({{]})d'

checkBraces(string1)
checkBraces(string2)
checkBraces(string3)
checkBraces(string4)
