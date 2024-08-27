function atualizarDataHora() {
    var agora = new Date();
    var fusoHorario = document.getElementById('fusoHorario').value;
    var opcoes = { timeZone: fusoHorario };
    var hora = agora.toLocaleTimeString('en-US', opcoes);
    var data = agora.toLocaleDateString('en-US', opcoes);
    document.getElementById('dataHora').textContent = data + ' ' + hora;

    // Exibir as horas dos países escolhidos
    
}

setInterval(atualizarDataHora, 1000);

// Atualiza a hora imediatamente quando o fuso horário é alterado
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);

setInterval(atualizarDataHora, 1000);

// Atualiza a hora imediatamente quando o fuso horário é alterado
document.getElementById('fusoHorario').addEventListener('change', atualizarDataHora);