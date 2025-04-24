angular.module('persoApp', [])
.controller('PersoCtrl', function($scope, $http) {

  // Variables para almacenar las respuestas
  $scope.respuesta1 = null;
  $scope.respuesta2 = null;
  $scope.respuesta3 = null;

  // Función para verificar si todas las preguntas están respondidas
  $scope.checkContinuar = function() {
    return $scope.respuesta1 && $scope.respuesta2 && $scope.respuesta3;
  };

  // Función para continuar al siguiente paso
  $scope.continuarPg = function() {
    if (!$scope.checkContinuar()) {
      alert('Por favor, selecciona una opción en cada pregunta.');
      return;
    }

    const data = {
      mood: $scope.respuesta1,
      role: $scope.respuesta2,
      food_type: $scope.respuesta3
    };

    $http.post('http://3.141.45.45/my-payment/menu/specifications', data)
      .then(function(response) {
        console.log("Especificaciones enviadas:", response.data);
        // Redirige solo si la petición fue exitosa
        window.location.href = "Paso3Qr.html";
      }, function(error) {
        console.error("Error al enviar especificaciones:", error);
        alert("Error al enviar tus respuestas. Inténtalo de nuevo.");
      });
  };

  // Script JS puro para botones emoji (como ya lo tienes)
  setTimeout(() => {
    const botones = document.querySelectorAll(".emoji-btn");

    botones.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.querySelectorAll(".emoji-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        if (parent.classList.contains('opciones1')) {
          $scope.respuesta1 = btn.textContent.trim();
        } else if (parent.classList.contains('opciones2')) {
          $scope.respuesta2 = btn.textContent.trim();
        } else if (parent.classList.contains('opciones3')) {
          $scope.respuesta3 = btn.textContent.trim();
        }

        $scope.$apply();
      });
    });
  });

  $scope.continuarPg = function() {
    window.location.href = "Paso3Qr.html";
  }

})
