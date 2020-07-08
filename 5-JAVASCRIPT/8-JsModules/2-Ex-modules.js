/*

MODULOS SÃO ARQUIVOS

Módulos em js, são nada mais nada menos do que arquivos, e por meio destes arquivos
podemos exportar ou importar funções, classes, variaveis, etc... 

Para importar, primeiro precisamos exportar

*/

//COMO EXPORTAMOS?
let vouExportar = 'serei exportado'
export {vouExportar} 

//COMO IMPORTAMOS?
//(precisamos importar com o mesmo nome que foi exportado)
import {vouExportar} from './caminhoRelativo-NãoNecessario-aExtensão'

//COMO MUDAR O NOME DA VARIAVEL IMPORTADA?
import {vouExportar as importada} from './caminho';
//é só utilizar o as, isto vale tambem para o export
export {vouExportar as exportei};

/******************************************************* */

//OUTRA FORMA DE EXPORT
export let jean = 'jean'
export function exportada(){}
export class Pessoa{}

//IMPORTANDO TUDO 
import * as meuModuloImportado from './caminho'

/***************************************************** */

//EXPORT PADRÃO DE UM MÓDULO (se quem importar não utilizar chaves para pegar
// somente determinado export, o que ira por padrão será o default)
export default function soma(x,y){
    return x+y
}
//com variaveis funciona de outra maneira
/*
const myVar = 'algo'
export {myVar as default}
*/
//só podemos ter um default

//IMPORTANDO O DEFAULT
import arquivoDefault from './caminho'

/***************************************************** */

//DEFAULT COM ARROW FUNCTION
export default ()=> {console.log('alguma coisa')}