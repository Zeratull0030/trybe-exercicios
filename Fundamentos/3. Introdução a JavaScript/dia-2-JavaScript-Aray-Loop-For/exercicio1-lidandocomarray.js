let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
console.log([numbers])


//Some todos os valores contidos no array e imprima o resultado.
let resultado = 0;


for(let index = 0; index < numbers.length; index += 1){
resultado += numbers[index]
}
console.log(resultado);

//Calcule e imprima a média aritmética dos valores contidos no array.
let soma = 0
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index]
    }

    let media = soma / numbers.length
    
    console.log(media);


//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, 
//caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if(media > 20){
   console.log("Valor maior que 20") 
}
else {
    console.log("Valor menor ou igual a 20")
}




//Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorvalor= numbers[0]

for(let index = 1; index < numbers.length; index += 1){

if (numbers[index] > maiorvalor){
    maiorvalor = numbers[index]
}

}

console.log(maiorvalor)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}


console.log("essa eu não consegui fazer")

//Utilizando for, descubra o menor valor contido no array e imprima-o.

let menorvalor = numbers[0]

for(let index = 1; index < numbers.length; index += 1){

if (numbers[index] < menorvalor) {
    menorvalor = numbers[index];
}
}
console.log(menorvalor);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let teste = [];
for(let index =1; index<= 25; index += 1){

teste.push(index);

}

console.log(teste)
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for(let index =0; index< numbers.length; index += 1){
    console.log(teste[index]/2)};

