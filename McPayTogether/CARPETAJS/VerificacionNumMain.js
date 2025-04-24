angular.module('verificacionApp', [])
  .controller('VerificacionCtrl', function($scope, $interval, $timeout) {
    $scope.telefono = localStorage.getItem('numeroTelefono') || 'No disponible';
    $scope.segundos = 30;
    $scope.reenviable = false;

    let timer;

    function iniciarTemporizador() {
      $scope.reenviable = false;
      $scope.segundos = 30;
      timer = $interval(() => {
        if ($scope.segundos > 0) {
          $scope.segundos--;
        } else {
          $interval.cancel(timer);
          $scope.reenviable = true;
        }
      }, 1000);
    }

    iniciarTemporizador();

    $scope.reenviarCodigo = function () {
      if ($scope.reenviable) {
        iniciarTemporizador();
        // Aquí iría la lógica real para reenviar el código
        alert('Código reenviado al número: ' + $scope.telefono);
      }
    };

    $scope.regresar = function() {
      window.history.back();
    };

    // Método para verificar si los campos de código están completos
    $scope.registrarse = function() {
      const inputs = document.querySelectorAll('.codigo-input input');
      let todoLleno = true;

      // Recorre todos los campos de entrada de código y verifica si están vacíos
      inputs.forEach(input => {
        if (!input.value) {
          todoLleno = false;
        }
      });

      // Si todos los campos están llenos, avanza al siguiente paso
      if (todoLleno) {
        window.location.href = "Paso1Carro.html"; // Asegúrate que este sea el nombre correcto
      } else {
        alert("Por favor, ingresa todos los códigos.");
      }
    };

    $timeout(() => {
      const inputs = document.querySelectorAll('.codigo-input input');
      inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
          if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
          }
        });
      });
    });
  });
