let myArray01 = [10, 20, 30, 40, 50]

for (let i = 0; i < myArray01.length; i++) {
    console.log(myArray01[i] * 10)
}

myArray01.forEach(function (value, index) {
    console.log(value * 10, ` Index: ${index}`)
})

for (let value of myArray01) {
    console.log(value * 10)
}

myArray01.map(function (value, index) {
    console.log(value * 10, ` Index: ${index}`)
})