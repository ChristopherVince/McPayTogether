angular.module('menuApp', [])
  .controller('MenuCtrl', function($scope) {
    $scope.searchQuery = '';

    $scope.toggleMenu = function () {
      alert("Menú desplegable (simulado)");
    };

    $scope.skipSurvey = function () {
      alert("Encuesta omitida. ¡Gracias por tu pedido!");
    };

    $scope.continuar = function () {
      window.open("InicioSeccion.html", "_blank");
    };
  });
