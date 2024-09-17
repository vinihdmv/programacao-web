function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario };
    var hora = agora.toLocaleTimeString('en-US', opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);

    document.getElementById('dataHora').textContent = data + ' ' + hora;

    var dialogDataHora = document.getElementById('dialogDataHora');
    if (dialogDataHora) {
        dialogDataHora.textContent = data + ' ' + hora;
    }
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);

var dialog = document.getElementById("myDialog");

// Obtenha o botão que abre o dialog
var btn = document.getElementById("baterPontoBtn");

// Quando o usuário clicar no botão, abra o dialog e atualize a data e hora no dialog
btn.onclick = function() {
    atualizarDataHora();
    dialog.style.display = 'block'; 
}


var closeBtn = document.getElementById("closeDialogBtn");

closeBtn.onclick = function() {
    dialog.style.display = 'none';
}


var registrosPontos = [];

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

var registrarPontoBtn = document.getElementById("registrarPontoBtn");


function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    
    // Define a imagem a ser exibida no pop-up
    popupImage.src = "./image/img.jpg";
    popup.classList.add("show");  // Mostra o pop-up

    // Esconde o pop-up após 3 segundos
    setTimeout(function() {
        popup.classList.remove("show");
    }, 2000);
}

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

            registrosPontos.push(registro);
            console.log('Ponto registrado:', registro);

            showPopup("caminho-para-sua-imagem.png");
        }
    });
};
