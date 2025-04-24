// Permite solo dígitos en un campo
function soloNumeros(input) {
    input.value = input.value.replace(/\D/g, '');
  }
  
  // Actualiza nombre (solo letras y espacios)
  function actualizarNombre(valor) {
    document.getElementById('nombre-vis').textContent =
      valor.replace(/[^a-zA-Z\s]/g, '').toUpperCase() || 'NOMBRE APELLIDO';
  }
  
  // Formatea y actualiza número en bloques de 4
  function actualizarNumero(valor) {
    const formateado = valor
      .replace(/\D/g, '')
      .replace(/(.{4})(?=.)/g, '$1 ')
      .trim();
    document.getElementById('numero-vis').textContent =
      formateado || 'XXXX XXXX XXXX XXXX';
  }
  
  // Actualiza mes y año juntos
  function actualizarFecha() {
    const mes = document.getElementById('mes-input').value.replace(/\D/g, '');
    const anio = document.getElementById('anio-input').value.replace(/\D/g, '');
    document.getElementById('mes-vis').textContent =
      mes.padEnd(2, 'M');
    document.getElementById('anio-vis').textContent =
      anio.padEnd(2, 'Y');
  }
  
  // Actualiza CVV
  function actualizarCVV(valor) {
    document.getElementById('cvv-vis').textContent =
      valor.replace(/\D/g, '') || 'XXX';
  }
  