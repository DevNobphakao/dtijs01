let myData1 = function() {
    console.log("Hello.")
}

let myData2 = function(a, b){
    console.log(a + b)
}

let myData3 = function(){
    return "Wow wow wow"
}

let myData4 = function(x, y, z){
    console.log(x,  y,  z)
    return x * y * z
}

myData1()
myData2(10, 20)
console.log(myData3() )
console.log(myData4(10, 20, 30))
