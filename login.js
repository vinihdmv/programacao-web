
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
    
    let soma = 0; 

    for (let i = 1; i<=9; i++){

        //console.log(cpf.charAt(i-1));
        soma = soma + (cpf.chatAt(i-1)*(10-(i-1)));
    }

    console.log(soma);
    let resto = soma % 11;

    if (resto < 2){
        if (cpf.charAt(9)!= 0){
            alert("cpf invalido");
            return false;
        }
        return true
    }

    let digitVerficador = 11 - resto;
    if (digitVerficador < 10 && cpf.charAt(9) != digitVerficador) {
        alert("CPF inválido");
        return false;
    }
    
    //multiplicar cada digito do cpf até o 1º digito verificador
    //por 11, 10, 98 , 8 ... 2
    //recuperar o resto da divisao da soma de todas as multiplicações
    //por 11. Se o resto for menor que 2, o 2º digitoverificador deve ser 0. Caso contrario deve ser igual aon resto
    //o segundo digito verfificador é o cpf.chatAt(10)
    //o  primeiro digito verificador é o cpf.charAt(9)

    let soma2 = 0;

    for (let i = 1; i <= 10; i++) {
        soma2 = soma2 + (cpf.charAt(i - 1) * (11 - i));
    }

    let resto2 = soma2 % 11;

    if (resto2 < 2) {
        if (cpf.charAt(10) != 0) {
            alert("CPF inválido");
            return false;
        }
        return true;
    }

    let digitVerficador2 = 11 - resto2;
    if (digitVerficador2 < 10 && cpf.charAt(10) != digitVerficador2) {
        alert("CPF inválido");
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

   
