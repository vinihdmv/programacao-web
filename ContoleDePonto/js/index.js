// Função para atualizar a data e hora
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

// Objeto para armazenar os registros de pontos
var registrosPontos = [];

// Função para obter a localização do usuário
function obterLocalizacao(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            callback(position.coords.latitude, position.coords.longitude);
        }, function() {
            alert('Não foi possível obter a sua localização.');
            callback(null, null);
        });
    } else {
        alert('Geolocalização não é suportada por este navegador.');
        callback(null, null);
    }
}

// Obtenha o botão de registrar ponto
var registrarPontoBtn = document.getElementById("registrarPontoBtn");

// Quando o usuário clicar no botão "Registrar ponto"
registrarPontoBtn.onclick = function() {
    var agora = new Date();
    var data = agora.toLocaleDateString('en-US');
    var hora = agora.toLocaleTimeString('en-US');
    var selecionado = document.getElementById('actionSelect').value;
    
    obterLocalizacao(function(latitude, longitude) {
        if (latitude !== null && longitude !== null) {
            var registro = {
                data: data,
                hora: hora,
                select: selecionado, 
                latitude: latitude,
                longitude: longitude
            };

            // Adiciona o registro ao array
            registrosPontos.push(registro);
            console.log('Ponto registrado:', registro);
        }
    });
};
