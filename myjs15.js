let person = {
    name: "Kanokwan", age: 20, gender: "male",
}

let student = [
    { id: 1111, name: "Sombat", gpa: 3.5 },
    { id: 2222, name: "Nattapong", gpa: 3.6 },
    { id: 3333, name: "Kanokwan", gpa: 3.7 },
    { id: 4444, name: "Nattapong", gpa: 3.8 },
]

student.map((item, index) => {
    console.log(`ID: ${item.id}`)
    console.log(`NAME: ${item.name}`)
    console.log(`GPA: ${item.gpa}`)
    console.log('------------------------------')
})

student.map(function (item, index) {
    console.log(`ID: ${item.id}`)
    console.log(`NAME: ${item.name}`)
    console.log(`GPA: ${item.gpa}`)
    console.log('------------------------------')
})