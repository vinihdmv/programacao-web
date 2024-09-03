function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario };
    var hora = agora.toLocaleTimeString('en-US', opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);

    // Atualiza a data e hora na página inicial
    document.getElementById('dataHora').textContent = data + ' ' + hora;

    // Atualiza a data e hora dentro do dialog
    var dialogDataHora = document.getElementById('dialogDataHora');
    if (dialogDataHora) {
        dialogDataHora.textContent = data + ' ' + hora;
    }
}

// Atualiza a data e hora imediatamente
atualizarDataHora();
setInterval(atualizarDataHora, 1000);
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);

// Obtenha o dialog
var dialog = document.getElementById("myDialog");

// Obtenha o botão que abre o dialog
var btn = document.getElementById("baterPontoBtn");

// Quando o usuário clicar no botão, abra o dialog e atualize a data e hora no dialog
btn.onclick = function() {
    atualizarDataHora(); // Atualiza a data e hora antes de abrir o diálogo
    dialog.style.display = 'block'; // Torna o diálogo visível
}

// Obtenha o botão que fecha o dialog
var closeBtn = document.getElementById("closeDialogBtn");

// Quando o usuário clicar no botão de fechar, feche o dialog
closeBtn.onclick = function() {
    dialog.style.display = 'none'; // Torna o diálogo invisível
}
