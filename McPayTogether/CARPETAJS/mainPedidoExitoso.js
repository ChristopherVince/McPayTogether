angular.module('menuApp', [])
  .controller('MenuCtrl', function($scope, $window) {
    $scope.searchQuery = '';

    $scope.toggleMenu = function () {
      alert("Menú desplegable (simulado)");
    };

    $scope.responderEncuesta = function () {
      $window.location.href = "QuizIndex.html";
    };

    $scope.skipSurvey = function () {
      alert("Encuesta omitida. ¡Gracias por tu pedido!");
      $window.location.href = "https://www.mcdonalds.com";
    };
    
  });
