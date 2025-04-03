let teclado = require (`prompt-sync`)();

let nome: string = `José Mateus`; // nome, frase, 
let nascimento: number = 1900;
let atributo: string = `daltônico`;

console.log(`O meu nome é ${nome} nasci em ${nascimento} e sou ${atributo}.`);

if (nascimento > 1900){
    console.log(`Sim, executei essa linha`);    
}
else if (nascimento < 1900){
    console.log(`Sim, executei essa linha`);
}
else{
    console.log(`Sim, executei essa linha`);
}

nome = teclado (`Digite o seu nome: `);
nascimento = parseInt(teclado(`Digite o ano de nascimento: `));
atributo = teclado (`Digite um atributo: `);

console.log(`O meu nome é ${nome} nasci em ${nascimento} e sou ${atributo}.`);