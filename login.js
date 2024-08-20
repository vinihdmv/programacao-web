
function submeter() {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    //console.log(cpf);
    if (!validaCpf(cpf) || !validaridade(idade) || !validarnome(nome)) {
        return;
    }
    
    console.log ("todos os campos sao validos!");
}

function validaCpf(cpf) {

    if(cpf == "") {
        alert("Campo CPF não pode ser vazio.");
        return false;
    }

    cpf = cpf.trim(); /*Retira os espaços em branco*/

    //Verificar se é composto SOMENTE de números, "." ou "-"
    if(/[a-zA-Z]/.test(cpf)) {  /*Para procurar letras maiusculas e miniusculas no CPF*/
        alert("CPF não pode conter letras.");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {  /*Serve para validar número, '.' e  o '-' atravês do [\d.-] e para não validar os outros caracteres atraves do ^ +$*/
        alert("O CPF só pode ter números, '.' ou '-'");
        return false;
    }
    
    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido!");
        return false;
    }

    return true;

}

function validaridade(idade) {

    if(idade == "") {
        alert("Campo idade não pode ser vazio.");
        return false;
    }
    
    idade = parseInt(idade); /*Converte a idade (string) para inteiro*/

    if(idade <= 0 || idade > 120) {
        alert("Idade ser emtre 1 e 120 anos.");
        return false;
    }

    return true;

}
function validarnome(nome){
   if (nome.trim() === ""){
       showMessage("Nome não pode ser vazio");
       return false 
    }  

    if (!/^[a-zA-Z\s]+$/.test(nome)) {
        showMessage("Nome deve conter apenas letras.");
        return false;
    }

    if (nome.trim().length < 3) {
        showMessage("Nome deve ter pelo menos 3 caracteres.");
        return false;
    }

    return true;
}

   
