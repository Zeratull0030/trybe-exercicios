//Crie uma variável chamada “currentHour” que receba um número entre 4 e 24, conforme sua escolha, para representar as horas do dia. - OK
//Crie uma variável chamada “message” que inicialmente seja uma string vazia.
//Implemente as seguintes condicionais:
//Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
//Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
//Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
//Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.
//Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
//Agora, imprima a variável message fora das suas condições.

let currentHour = 14.05
let message = ""

if (currentHour >= 22) 
{message= "Não deveríamos comer nada, é hora de dormir";}
else if (currentHour >= 18 && currentHour > 22) 
{message= "Rango da noite, vamos jantar :D";}
else if(currentHour >= 14 && currentHour > 18)
{message=  "Vamos fazer um bolo pro café da tarde?";}
else if(currentHour >= 11 && currentHour > 14)
{message= "Hmmm, cheiro de café recém-passado";}

else {
    message="Não é hora de nada";}

    console.log(message);