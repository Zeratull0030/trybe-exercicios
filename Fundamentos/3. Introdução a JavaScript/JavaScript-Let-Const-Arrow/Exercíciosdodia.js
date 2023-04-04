//Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
}
  imprimeIdade();

  //Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
       pessoa.nome = 'Luna',
       pessoa.idade = 19
       // Altere essa estrutura para corrigir o erro.

      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);


      //Modifique a variável para que não ocorra Erro.

      let favoriteFood = 'Lasanha';
       favoriteFood = 'Hambúrguer';
      console.log(favoriteFood);

      //Modifique as concatenações para template literals.
      /*  const name = 'Adriana';
      const lastName = 'Soares'; */
      
   /*   /console.log('Olá' + ',' + name + ' ' + lastName + '!');
      function soma(a,b) {
        let resultado = a + b;
        return resultado;
      }
      let a = 3;
      let b = 5;
      console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));  */

    //Modificado: 
    const name = 'Adriana';
    const lastName = 'Soares';
    console.log(`Olá ${name} ${lastName} !`)

    //-----------------------------------------
    let a = 3;
    let b = 5;
    console.log(`O resultado da soma de a + b é: ${a+b}`)

    //Transforme a função numeroAleatorio em uma arrow function.
    const numeroAleatorio = () => Math.random()
    /* function numeroAleatorio() {
        return Math.random()
      } */
      console.log(numeroAleatorio());

//Transforme a função hello em uma arrow function.
const hello =(nome) => `Olá,${nome}`
let nome = 'Ivan'
/*   function hello('nome) {
        return `Olá, ${nome}!`    } */
      console.log(hello(nome));


//Transforme a função nomeCompleto em uma arrow function.

const nomeCompleto = (nomex,sobrenomex) => `${nomex} ${sobrenomex}`
let nomex = 'Ivan';
let sobrenomex = 'Pires';
  
  console.log(nomeCompleto(nomex,sobrenomex));

  //Altere a expressão if/else utilizando ternary operator
  
  let speed = 90;
  const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`; 
  console.log(speedCar(speed));