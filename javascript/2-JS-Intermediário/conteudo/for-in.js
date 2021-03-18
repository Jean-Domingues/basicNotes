//FOR IN, RETORNA OS INDICES DO ARRAY OU CHAVES(atributos) DO OBJETO
//DENTRO DO FOR, O I REPRESENTA CADA CHAVE DO OBJETO
const numeros = [1, 2, 3, 4, 5];
for (let i in numeros) {
   // console.log(i) //ESTE FOR IRÁ EXECUTAR ATÉ PERCORRER TODO O ARRAY
}

//COM OBJETOS 
const pessoa = {
    nome: 'jean',
    idade: 19,
    sobrenome: 'domingues'
};

for (let chave in pessoa) {
    console.log(pessoa[chave])
}