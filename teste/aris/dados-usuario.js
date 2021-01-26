var nomeUser = "";
var emailUser = "";
var ideiaUser = "";

function capturar () {
   nomeUser = document.getElementById('nome').value;
    document.getElementById('nome-post').innerHTML = nomeUser;
    emailUser = document.getElementById('email').value;
    document.getElementById('email-post').innerHTML = emailUser;
    ideiaUser = document.getElementById('ideia-usuario').value;
    document.getElementById('ideia-post').innerHTML = ideiaUser;
}
