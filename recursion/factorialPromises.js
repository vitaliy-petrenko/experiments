const factorial = n => {
  if (n <= 1) return Promise.resolve(1)

  return factorial(n - 1).then(result => Promise.resolve(result * n))
}

factorial(0).then(console.log)
factorial(3).then(console.log)
factorial(5).then(console.log)
