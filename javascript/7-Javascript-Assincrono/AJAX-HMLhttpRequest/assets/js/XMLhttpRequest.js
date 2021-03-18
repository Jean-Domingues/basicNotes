/*
NECESSÁRIO UTILIZAR LIVE SERVER, OU SEJA, UM SERVIDOR PARA QUE SEJA POSSIVEL
REALIZAR REQUISIÇÕES HTTP
*/
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //cria uma nova comunicação com o servidor via http
    xhr.open(obj.method, obj.url, true);
    //abre uma requisição passando o métôdo, url, e se será assincrono
    xhr.send();

    xhr.addEventListener('load', () => {
      //adiciona o evento de carregara os dados requisitados
      if(xhr.status >= 200 && xhr.status < 300) { 
        //caso o código http esteja entre 200 e 300 obtivemos sucesso, e 
        // mandaremos os dados da página, ou seja o html
        resolve(xhr.responseText); 
      } else {
        reject(xhr.statusText);
        //caso esteja errado mandaremos o status da requisição
      }
    });
  });
};

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
  const href = el.getAttribute('href');

  const objConfig = { //configura o objeto com o que estamos pedindo na requisição http
    method: 'GET',
    url: href
  };

  try {
    //tenta fazer a requisição a página
    const response = await request(objConfig);
    carregaResultado(response); //chama a função que irá carregar o html na index
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
  //atribui o html pego em outra página na div da nossa index
}
