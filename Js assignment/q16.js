// my name is Asad i worked on 26 oct 2022
var names = ["Asad", "Hammad", "Talha", "Abdul Rehman", "Abdullah"];
names.map(item => console.log(`Hi, ${item}, I invite you for dinner at my home`));
console.log(`${names[2]} could not attend dinner program`);
names[2] = 'salman';
var newGuest1 = ['Ali', 'Arsalan','Ammar'];
names.unshift(newGuest1[0]);
names.splice(3, 0, newGuest1[2]);
names.push(newGuest1[1]);

names.map(item => console.log(`HI, ${item}, I invite you for dinner at my home`));
