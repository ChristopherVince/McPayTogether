var app = angular.module('telefonoApp', []);

app.controller('TelefonoCtrl', ['$scope', '$http', function($scope, $http) {
  
  $scope.numero = "";
  $scope.numero = '2721825443'; // O el número que quieras como valor inicial


  $scope.continuar = function() {
    if (!$scope.numero) {
      alert("Por favor ingresa un número de teléfono.");
      return;
    }

    var data = {
      phone: $scope.numero
    };

    $http.post('http://3.141.45.45/my-payment/sign-in', data)
      .then(function(response) {
        // Maneja el éxito
        console.log("Respuesta del servidor:", response.data);
        window.location.href = 'VerificacionNum.html';
        alert("Inicio de sesión exitoso.");
        
      }, function(error) {
        // Maneja errores
        console.error("Error en el login:", error);
        alert("Error al iniciar sesión. Intenta nuevamente.");
      });
  };

  $scope.regresar = function() {
    window.history.back();
  };

}]);
