let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

let Player= {
name:'Marta',
lastName: 'Silva',
age: 34,
medals:{golden:2, silver:3},
bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]

}

//console.log("A jogadora" +" ", Player.name + " ",Player.lastName + " ","tem " + Player.age + " anos de idade")



//Segundo Exercício ----------------------------------------

console.log("A jogadora" +" ", Player['name'] + " ",Player['lastName'] + " ", "Foi eleita a melhor do mundo por",+ Player.bestInTheWorld.length + " vezes.")