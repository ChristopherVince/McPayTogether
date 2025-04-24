angular.module('miApp', [])
.controller('FormularioCtrl', function($scope, $timeout, $http) {
  // Lista de campos del formulario
  $scope.campos = [
    {
      label: 'Selecciona sucursal',
      texto: '',
      mostrar: true,
      opciones: ['Centro','orizaba', 'Norte', 'Sur', 'Sucursal Playa', 'Sucursal Plaza']
    },
    {
      label: 'Forma de pago',
      texto: '',
      mostrar: false,
      opciones: ['Efectivo', 'Tarjeta', 'Transferencia']
    },
    {
      label: 'Ingresa Número de personas',
      texto: '',
      mostrar: false,
      opciones: ['2', '3', '4', '5', '6','7','8','9','10']
    },
    {
      label: 'Consumidor a pagar',
      texto: '',
      mostrar: true,
      opciones: ['Individual', 'Entre todos']
    },
    
  ];

  // Función para verificar si todas las respuestas están seleccionadas
  $scope.checkContinuar = function() {
    return $scope.campos.every(function(campo) {
      return campo.texto !== '';
    });
  };

  // Función para continuar al siguiente paso
  $scope.continuarPg = function() {
    if (!$scope.checkContinuar()) {
      alert('Por favor, selecciona una opción en cada pregunta.');
      return;
    }
  
    const userID = localStorage.getItem('userID');
    if (!userID) {
     // alert('No se encontró el ID de usuario. Por favor inicia sesión nuevamente.');
    //  return;
    }
  
    const data = {
      userID: userID,
      location: $scope.campos[0].texto,
      methodOfPaymant: $scope.campos[1].texto,
      numberOfGuests: parseInt($scope.campos[2].texto),
      accountSplitWays: $scope.campos[3].texto
    };
  
    $http.post('http://3.141.45.45/my-payment/menu/specifications/car-shopping', data)
      .then(function(response) {
        console.log("Datos enviados correctamente:", response.data);
        window.location.href = "PersoCarroPaso2.html";
      }, function(error) {
        console.error("Error al enviar los datos:", error);
       // alert("Hubo un error al guardar la información. Intenta de nuevo.");
      });
      
        window.location.href = "PersoCarroPaso2.html";
      
      
  };

  // Función para seleccionar una opción
  $scope.seleccionar = function(campo, opcion) {
    campo.texto = opcion;
    campo.mostrar = false;
  };

  // Función para ocultar las opciones después de un pequeño retraso
  $scope.ocultar = function(campo) {
    $timeout(function() {
      campo.mostrar = false;
    }, 200);
  };
});


