// Data alvo
const dataAlvo = new Date("2025-02-09T00:00:00");

function atualizarContagemRegressiva() {
  const agora = new Date();
  const diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").innerHTML = "<h2>Chegou o grande dia!</h2>";
    clearInterval(intervalo); // Para o intervalo quando a data é atingida
    iniciarChuvaDeConfetes(); // Inicia os confetes
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza os elementos específicos sem remover o CSS
  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

// Atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagemRegressiva, 1000);

// Função para iniciar os confetes
function iniciarChuvaDeConfetes() {
  console.log("Iniciando a chuva de confetes...");

  // Gera a chuva de confetes
  confetti({
    particleCount: 600,
    spread: 360,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#ffcc00']
  });
}
