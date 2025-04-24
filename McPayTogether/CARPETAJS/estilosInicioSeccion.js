angular.module('loginApp', [])
  .controller('LoginCtrl', function($scope) {

    // Función para manejar el inicio de sesión con distintos métodos
    $scope.login = function(metodo) {
      switch(metodo) {
        case 'facebook':
          alert('Iniciar sesión con Facebook\nOpción aun no disponible.');
          break;
        case 'google':
          alert('Iniciar sesión con Google\nOpción aun no disponible.');
          break;
        case 'apple':
          alert('Iniciar sesión con Apple\nOpción aun no disponible.');
          break;
        case 'email':
          alert('Iniciar sesión con Correo Electrónico\nOpción aun no disponible.');
          break;
        default:
          alert('Método de inicio de sesión no reconocido');
          break;
      }
    };

    // Función para continuar con Telefono
    $scope.ContinuarConTelefono = function() {
      window.location.href = "ContinuarConTelefono.html"; // Aquí cambia a la URL de tu otro archivo HTML
    };

    // Función para continuar como visitante
    $scope.continuarComoVisitante = function() {
      window.location.href = "Paso3Qr.html"; // Aquí cambia a la URL de tu otro archivo HTML
    };
  });
