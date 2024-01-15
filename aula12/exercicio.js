let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);

// varSu = varA;
// varA = varB;
// varB = varC;
// varC = varSu;
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);