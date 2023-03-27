// console.log('this works');
/*
function sayHello() {
   document.write("Hello, my name is Naumika")
}

sayHello();
*/

/*
const students = ["Alice", "Han", "Chi Chi", "Brent"]

for(let index = 0; index < students.length; index++) {
    console.log('Name of student is: '+ index + " " + students[index])
}

*/

console.log ('this works')

let nouns = ["heart", "rabbit", "ocean"];
let verbs = ["look", "run", "make"];
let adjectives = ["good", "possible", "different"];

let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]
   
console.log(noun)
console.log(verb)
console.log(adjective)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`

console.log(sentence)
document.write(sentence)


// string interpolation
console.log(` My ${noun}`)

// console.log("My" + noun + "leaps" + adjective) //concatenation