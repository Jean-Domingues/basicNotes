/*
FETCH API, já retorna como padrão uma promise, com os mesmos dados do XMLhttpRequest,
 porém de forma bem mais simples
  SINTAXE:

  fetch('url').then(response => {
    tratamento.............
  }).catch( erro =>{
    tratamento..........
  })
*/

document.addEventListener('click', e => {
  //Adiciona um evento de click em todos os links da page 
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault(); //previne o carregamento dos links
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href'); //pega a url do link

  try{
  const response = await fetch(href)
  if (response.status !== 200) throw new Error('ERRO 404!')

  const html = await response.text();
  carregaResultado(html)
    
  }catch(e){
    console.error(e)
  }

  /*
  //tratando sem utilizar async/await

  fetch(href)
    .then(response => { //pega o resultado da promise de fetch
      if (response.status !== 200) throw new Error('ERRO 404!')
      //verifica se há erro de requisição 
      return response.text() //retorna outra promise contendo o html
    })
    .then(html => carregaResultado(html)) //envia o html para a nossa função que irá carrega-lo
    .catch(erro => console.error(erro))
*/
}

function carregaResultado(html) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = html;
  //atribui o html pego em outra página na div da nossa index
}
