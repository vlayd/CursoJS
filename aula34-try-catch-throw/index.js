function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //Existem vário tipos Error, TypeError, etc
        throw new Error('x e y precisam se números.');
    }
    return x + y;
}
try {
    console.log(soma('6',7));
} catch(err){
    console.log(err);
}