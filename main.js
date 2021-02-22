//lvl1_1

let hello = "hello world"
for (let i = 0; i <= 10; i++) {
    console.log(hello + " " + i)
}

//lvl1_2

let numArray = []
for (let i = 0; i <= 10; i++) {
    numArray.push(i)
}
console.log(numArray)

//lvl1_4

let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
for (let i of names) {
    console.log(i)
}

//lvl1_6

let retArray = []
for (let i = 0; i <= 100; i++) {
    let image = "image_" + i + ".jpg"
    retArray.push(image)
}
console.log(retArray)

//lvl1_7

let x = 0
do {
    x += 1
    console.log("This is Number " + x)
} while (x < 5)

//lvl1_8
let y = 0
do {
    y += 2
    console.log(y)
} while (y < 18)

//lvl1_9

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

function checkWords() {
    let input = document.getElementById('input')
    let output = document.getElementById('output')
    result = words.filter(word => word.length <= Number(input.value))
    output.innerHTML = result
}