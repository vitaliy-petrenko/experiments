const deepPick = (prop, object) => {
  const
    propList = prop.split('.')

  let
    i         = 0
    , resProp = object[propList[i++]]

  while (i < propList.length && resProp) {
    resProp = resProp[propList[i++]]
  }

  return resProp
}

const deepPickRecursion = (prop, object) => {
  const
    [first, ...rest] = Array.isArray(prop) ? prop : prop.split('.')
    , resProp        = object[first]

  return rest.length ? deepPickRecursion(rest, resProp) : resProp
}

const testPerformance = (fn = n => n, iterations = 1000) => {
  const
    runner   = () => {
      for (let i = 0; i < iterations; i++) {
        fn()
      }
    }
    , logger = ms => console.log(`${ms} milliseconds`)

  if (typeof process !== 'undefined' && typeof process.hrtime === 'function') {
    const t0 = process.hrtime()
    runner()
    const t1 = process.hrtime(t0)
    logger(t1)
  } else {
    const t0 = performance.now()
    runner()
    const t1 = performance.now()
    logger(t1 - t0)
  }
}

const
  object    = {
    type: 'person',
    data: {
      gender: 'male',
      info: {
        id: 22,
        fullname: {
          first: 'Dan',
          last: 'Deacon',
        },
      },
    },
  }
  , deepKey = 'data.info.fullname.last'

console.log('------- START TESTING -------')

console.log('Simple deep pick:')
console.log(deepPick(deepKey, object))
console.log('performance:')
testPerformance(() => deepPick(deepKey, object))

console.log('-----------------------------')

console.log('Deep pick with recursion:')
console.log(deepPickRecursion(deepKey, object))
console.log('performance:')
testPerformance(() => deepPickRecursion(deepKey, object))

console.log('-------- END TESTING --------')
