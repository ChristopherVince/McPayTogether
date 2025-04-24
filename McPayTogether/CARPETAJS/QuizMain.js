angular.module('quizApp', [])
.controller('QuizController', function($scope) {
  const triviales = [
    {
      texto: "¿En qué año se fundó McDonald's?",
      opciones: ["1940", "1960", "1980", "2000"]
    },
    {
      texto: "¿Cómo se llama la mascota de McDonald's?",
      opciones: ["Ronald", "Clowny", "Big Mac", "Macky"]
    }
  ];

  const importantes = [
    {
      texto: "¿Prefieres papas normales o deluxe?",
      opciones: ["Normales", "Deluxe"]
    },
    {
      texto: "¿Qué bebida tomas más seguido?",
      opciones: ["Coca-Cola", "Agua", "Jugo", "Otro"]
    }
  ];

  const todasPreguntas = [...triviales, ...importantes];

  let indice = 0;

  $scope.preguntaActual = todasPreguntas[indice];
  $scope.tipoPreguntaActual = indice < triviales.length ? "Pregunta trivial" : "Pregunta importante";
  $scope.respuestasFinales = [];
  $scope.finalizado = false;

  $scope.responder = function(respuesta) {
    if (indice >= triviales.length) {
      $scope.respuestasFinales.push({
        pregunta: $scope.preguntaActual.texto,
        respuesta: respuesta
      });
    }

    indice++;

    if (indice < todasPreguntas.length) {
      $scope.preguntaActual = todasPreguntas[indice];
      $scope.tipoPreguntaActual = indice < triviales.length ? "Pregunta trivial" : "Pregunta importante";
    } else {
      $scope.preguntaActual = null;
      $scope.finalizado = true;
    }
  };

  $scope.calcularPuntos = function() {
    const count = $scope.respuestasFinales.length;
    
    if (count === 2) return 20;
    if (count === 3) return 50;
    if (count === 4) return 100;
    return 20;
  };
  $scope.salir = function() {
    // Aquí puedes redirigir a otra vista, cerrar modal, o simplemente recargar
     // Esto reinicia el quiz, o cámbialo por navegación si usas routing
  };
  
});
