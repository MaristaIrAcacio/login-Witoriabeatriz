//Bloco de verificação de preenchimento de campos
function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!user || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher!");

    }else{ 
        alert("Campos preenchidos com sucesso!");


    }
        
    


}