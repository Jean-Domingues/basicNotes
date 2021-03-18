const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const caixa = document.querySelector('div#caixa');
/*
PRIMEIRA MANEIRA DE FAZER O EXERCICIO
for(let i = 0; i<4; i++){
    const novoElemento = document.createElement(elementos[i].tag);
    caixa.appendChild(novoElemento);
    novoElemento.innerHTML = elementos[i].texto;
}
*/
//SEGUNDA MANEIRA
for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let novoElemento = document.createElement(tag);
    let textoNovoElemento = document.createTextNode(texto);
    novoElemento.appendChild(textoNovoElemento);
    caixa.appendChild(novoElemento);
}