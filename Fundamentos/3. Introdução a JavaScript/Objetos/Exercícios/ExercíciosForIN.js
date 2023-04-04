/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',

  };

  console.log('Bem vinda,'+' ', info.personagem) */

// PARTE 3 -- Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. 
//Então, o valor esperado no console é:

/* let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

  for (keys in info2)
  {
    console.log(keys);

  } */
 
  //PARTE 4 -  Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:
  /*  let info3 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

  for (keys in info3)
  {
    console.log(info3[keys]);
}  */

//PARTE 5 Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
let info3 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };


let info4 = {
personagem: 'Tio Patinhas',
origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
nota: 'O último MacPatinhas',
recorrente: 'sim' 
}
console.log(info3.personagem +' e',info4.personagem);
console.log(info3.origem +' e',info4.origem);
console.log(info3.personagem +' e',info4.personagem);
if(info3.recorrente === info4.recorrente){
    console.log('Ambos recorrentes')
}
else console.log('Não recorrentes');
