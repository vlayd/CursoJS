let umaString = "Um texto texto texto";
//Exibe o quinto caracter 'e'
console.log(umaString[4]);
//Qual índice começa a primeira palavra 'texto'
console.log(umaString.indexOf('texto'));
/*Qual índice começa a palavra 'texto' a partir do índice 4
ou seja, a partir do caracter "e", vai cair na segunda palavra
*/
console.log(umaString.indexOf('texto', 4));
//Qual índice começa a última palavra 'texto'
console.log(umaString.lastIndexOf('texto'));
//A partir do índice 4 ao 8
console.log(umaString.slice(3, 8));
//A partir do índice 3 de trás para frente
console.log(umaString.slice(-3));