/*
Primitivos(imutáveis) - string, Number, boolean, undefined, null
(bigint, symbol) - Valores copiados
let nome = 'jean';
nome[1] = 'a'; //Não ira mudar nada, pois p dado é imutavel

Referência (mutável) - array, function, object - Passado por referência
let vetor = [1, 2, 3];
let vetor2 = vetor;
//vetor e vetor2 apontam para o mesmo lugar
//O MESMO VALE PARA OBJETOS 

//PASSANDO ARRAY POR VALOR
let vetor = [1, 2, 3];
let vetor2 = [...vetor]
//agora vetor2 aponta para um endereço diferente de vetor 
//O MESMO VALE PARA OBJETOS
*/
