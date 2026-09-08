let myData1 = () => {
    console.log("Hello.")
}

let myData2 = (a, b) => {
    console.log(a + b)
}

let myData3 = () => {
    return "Wow wow wow"
}

let myData4 = (x, y, z) => {
    console.log(x, y, z)
    return x * y * z
}

myData1()
myData2(10, 20)
console.log(myData3())
console.log(myData4(10, 20, 30))

let myData5 = xx => {
    console.log(xx)
}

myData5(100)

let myData6 = () => "Wow wow wow"

let myData7 = (x, y, z) => console.log("Hi...")

console.log(myData6())
myData7(11, 22, 33)