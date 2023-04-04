/* function userInfo() {
  var userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  
}
userInfo();
console.log(userEmail); */

//----------------------------------------------------------------------------------------------*/
/* if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20 */
  // ------------------------------------------------------------------------------------------------------------
 /*  var userName = 'Isabella';
  var userName = 'Lucas';
  console.log(userName); // Resultado: Lucas
  //---------------------------------------------- */
/*   const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro */

/* let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition */

// ---------------------------------------------------------------------------
/* const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' } */
  //---------------------------------------------------------
  // Com o template literals
/* console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);
/* 
// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n'); */
/* 
console.log(`Olá Maria
Espero que esteja bem,
teste cabulosoooooo`) */

// -----------------------------------------------------------
/* const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName()); */

 /*  let nome = 'caio'

  if(nome === 'caio'){

    console.log(nome);
  }
 */

  const nome = "Gus";
const modulos = [1];
const empresa = {
  nome: "Trybe",
  nota: 8001,
};

modulos.push(3);
nome = "Batman";
empresa.nota = 8002;
  