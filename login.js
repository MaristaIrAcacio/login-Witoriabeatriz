//Bloco de verificação de preenchimento de campos
function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!user || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher!");

    } else {
        window.location.href = "aula2.html";
     }}

      var dadosLista = [];
      function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    if(nomeUser){
        dadosLista.push(nomeUser);
    console.log(dadosLista) }}
    