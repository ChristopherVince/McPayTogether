let segundos = 105; // 1 minuto y 45 segundos
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");
const tiempoLabel = document.getElementById("tiempo-label");

function actualizarContador() {
  const minutos = Math.floor(segundos / 60);
  const restoSegundos = segundos % 60;
  contador.textContent = `${String(minutos).padStart(2, '0')}:${String(restoSegundos).padStart(2, '0')}`;

  if (segundos <= 0) {
    tiempoLabel.textContent = "Tiempo agotado";
    contador.textContent = "00:00";
    mensaje.textContent = "Tu pedido ha sido cancelado por inactividad";
    clearInterval(intervalo);
  }

  segundos--;
}

actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);
