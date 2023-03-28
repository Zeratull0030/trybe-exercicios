
//Crie uma variável para armazenar o status da pessoa candidata em um processo seletivo. As possibilidades são: 'aprovada', 'lista' ou 'reprovada'.
//Crie uma estrutura condicional com o switch/case para imprimir as seguintes mensagens:
//Caso 'aprovada', imprima “Parabéns, você está no grupo de pessoas aprovadas!”.
//Caso 'lista', imprima “Você está na nossa lista de espera.”.
//Caso 'reprovada', imprima “Infelizmente, você reprovou.”.
//Caso default, imprima a mensagem “Informação incorreta.”.


let variável = "lista";

switch(variável) {
case "aprovada":
    console.log("Parabéns, você está no grupo de pessoas aprovadas!") 

 break;

case "lista":
    console.log("Você está na nossa lista de espera.")

break;

case 'reprovada':

    console.log("Infelizmente, você reprovou");
break;

default:
console.log('Informação incorreta.');
}
