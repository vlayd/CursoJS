const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
//Editar item
alunos[0] = 'Pedro';
console.log(alunos);
//Add item
// alunos[3] = 'Vladymir';
//Ou
// alunos[alunos.length] = 'Vladymir';
//Ou (add no final)
alunos.push('Vladymir');
alunos.push('Juvenil');
console.log(alunos);
//Add no início
alunos.unshift('Marcelo');
console.log(alunos);
//Remove o último e o salva em uma variável
const removidoFim = alunos.pop();
console.log(alunos);
console.log(removidoFim);
const removidoInicio = alunos.shift();
console.log(alunos);
console.log(removidoInicio);
//Exclui o índice 0, deixando-o vazio
delete alunos[0];
console.log(alunos);
//Mostra do elemento[1] 2 ao 4
console.log(alunos.slice(1, 4));
//Mostra o tipo como object
console.log(typeof alunos);
console.log(alunos instanceof Array);