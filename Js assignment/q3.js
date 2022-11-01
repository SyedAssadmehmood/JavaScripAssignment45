// my name is Syed Asad. I worked on 30 /09/2022


var personName = "Syed Asad Mehmood"

console.log("Upper case", personName.toUpperCase());
console.log("Lower case", personName.toLowerCase());


var next = personName.split(' ');
var finalLetter = ''


next.map(word => {
    var firstLatter = word.slice(1, word.length);
    finalLetter += ' ' + (word[0].toUpperCase() + firstLatter.toLowerCase())
})
console.log("Title case",finalLetter);