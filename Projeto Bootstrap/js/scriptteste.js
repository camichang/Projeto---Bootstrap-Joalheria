$(document).ready(function () {


    $(window).scroll(function () {

        if ($(this).scrollTop() > 400) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });

    $('.backtotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    })

});
function valida_nome(x) {
    var nome = x.value
    if (isNaN(nome)) {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}

function maiuscula(x) {
    v = (x.value.toUpperCase());
    x.value = v;
}


function valida_telefone(x) {
    var telefone = document.getElementById("form_telefone").value;
    var validacao_temporaria = true;
    for (i = 0; i < telefone.length; i++) {
        if (telefone[i] == " " || isNaN(telefone[i])) {
            validacao_temporaria = false;
        }
    }
    if (validacao_temporaria == false || telefone.length != 11) {
        x.style.border = "2px solid lightpink";
    } else {
        x.style.border = "2px solid lightgreen";
    }
}

function valida_nome_empresa(x) {
    var nome_empresa = document.getElementById("form_nome_empresa").value;
    if (nome_empresa == null || nome_empresa == "") {
        x.style.border = "2px solid lightpink";
        return false;
    } else {
        x.style.border = "2px solid lightgreen"
        return true;
    }
}

function valida_nome_fantasia(x) {
    var nome_empresa = document.getElementById("form_nome_fantasia").value;
    if (nome_empresa == null || nome_empresa == "") {
        x.style.border = "2px solid lightpink";
        return false;
    } else {
        x.style.border = "2px solid lightgreen"
        return true;
    }
}

function valida_cnpj(x) {
    var cnpj = x.value;

    if (cnpj.length == 14) {
        x.style.border = "2px solid lightgreen"
        return true;
    }

    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}

function valida_end(x) {
    var end = x.value
    if (isNaN(end)) {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}


function valida_num_end(x) {
    var num = document.getElementById("form_num_casa").value;
    var validacao_temporaria = true;
    for (i = 0; i < num.length; i++) {
        if (num[i] == " " || isNaN(num[i])) {
            validacao_temporaria = false;
        }
    }
    if (validacao_temporaria == false || num.length < 1) {
        x.style.border = "2px solid lightpink";
    } else {
        x.style.border = "2px solid lightgreen";
    }
}

function valida_complemento(x) {
    var complemento = document.getElementById("form_complemento").value;
    if (complemento == null || complemento == "") {
        x.style.border = "2px solid lightpink";
        return false;
    } else {
        x.style.border = "2px solid lightgreen"
        return true;
    }
}

function valida_cidade(x) {
    var cidade = x.value
    if (isNaN(cidade)) {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}


function valida_cep(x) {
    var cep = document.getElementById("form_cep").value;
    var validacao_temporaria = true;
    for (i = 0; i < cep.length; i++) {
        if (cep[i] == " " || isNaN(cep[i])) {
            validacao_temporaria = false;
        }
    }
    if (validacao_temporaria == false || cep.length != 8) {
        x.style.border = "2px solid lightpink";
    } else {
        x.style.border = "2px solid lightgreen";
    }
}

function valida_email(x) {
    usuario = x.value.substring(0, x.value.indexOf("@"));
    dominio = x.value.substring(x.value.indexOf("@") + 1, x.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        x.style.border = "2px solid lightgreen";
    }
    else {
        x.style.border = "2px solid lightpink";
    }
}

function enviar_dados(){ 
	var nome_empresa = document.getElementById("form_nome_empresa").value; 
	var nome_fantasia = document.getElementById("form_nome_fantasia")
    var cnpj_completo = document.getElementById("form_cnpj").value;
	var end = document.getElementById("form_end").value;
    var num_casa = document.getElementById("form_num_casa").value;
    var email_completo = document.getElementById("form_email").value;
	var cidade = document.getElementById("form_cidade").value;
    var cep = document.getElementById("form_cep").value;
	var nome_completo = document.getElementById("nome_resp").value;
    var telefone = document.getElementById("form_telefone").value;	
	
    var formValido = true;

    //validando todos os dados do input segundo as funções valida

    if (!valida_nome(nome_completo)){
        formValido = false;
    }

    if (!valida_telefone(telefone)) {
        formValido = false;
    }

    if (!valida_nome_empresa(nome_empresa)) {
        formValido = false;
    }

    if (!valida_nome_fantasia(nome_fantasia)) {
        formValido = false;
    }

    if (!valida_cnpj(cnpj_completo)) {
        formValido = false;
    }

    if (!valida_end(end)) {
        formValido = false;
    }

    if (!valida_num_end(num_casa)) {
        formValido = false;
    }

    if (!valida_cidade(cidade)) {
        formValido = false;
    }

    if (!valida_cep(cep)) {
        formValido = false;
    }
    if (!valida_email(email_completo)) {
        formValido = false;
    }
    //se qualquer erro retorna falso e não envia o form

    if (!formValido) {
        alert("Preencha os campos vazios")
        return false;
    }
    else {
	document.getElementById("form_cadastro").reset(); // pega o form e reseta ele
}
}

