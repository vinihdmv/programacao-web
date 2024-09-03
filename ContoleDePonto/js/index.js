function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario };
    var hora = agora.toLocaleTimeString('en-US', opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);
    document.getElementById('dataHora').textContent = data + ' ' + hora;
}

setInterval(atualizarDataHora, 1000);
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);

// Obtenha o dialog
var dialog = document.getElementById("myDialog");

// Obtenha o botão que abre o dialog
var btn = document.getElementById("baterPontoBtn");

// Quando o usuário clicar no botão, abra o dialog
btn.onclick = function() {
    dialog.showModal();
}

var closeBtn = document.getElementById("closeDialogBtn");


closeBtn.onclick = function() {
    dialog.close();
}


