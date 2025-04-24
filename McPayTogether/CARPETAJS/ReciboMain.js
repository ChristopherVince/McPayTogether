angular.module('reciboApp', [])
.controller('ReciboController', function($scope) {
  $scope.usuarios = [
    {
      nombre: 'Usuario 1',
      expandido: false,
      productos: [
        { nombre: 'Big Mac', cantidad: 2, precio: 50 },
        { nombre: 'Papas', cantidad: 1, precio: 30 },
      ]
    },
    {
      nombre: 'Usuario 2',
      expandido: false,
      productos: [
        { nombre: 'McPollo', cantidad: 1, precio: 45 },
        { nombre: 'Coca-Cola', cantidad: 2, precio: 20 },
      ]
    },{
      nombre: 'Usuario 3',
      expandido: false,
      productos: [
        { nombre: 'McPollo', cantidad: 1, precio: 45 },
        { nombre: 'Coca-Cola', cantidad: 2, precio: 20 },
      ]
    }
  ];

  $scope.accionFinal = function (){
    window.location.href = 'PedidoExitoso.html';  // Cambia esta URL si es necesario
  };

  $scope.totalCantidad = function(productos) {
    return productos.reduce((sum, p) => sum + p.cantidad, 0);
  };

  $scope.totalPrecio = function(productos) {
    return productos.reduce((sum, p) => sum + (p.cantidad * p.precio), 0);
  };
  $scope.subtotalSinIVA = function() {
    let total = 0;
    $scope.usuarios.forEach(usuario => {
      total += usuario.productos.reduce((sum, p) => sum + (p.cantidad * p.precio), 0);
    });
    return total.toFixed(2);
  };
  
  $scope.calcularIVA = function() {
    return ($scope.subtotalSinIVA() * 0.16).toFixed(2);
  };
  
  $scope.cantidadTotalConIVA = function() {
    return (parseFloat($scope.subtotalSinIVA()) + parseFloat($scope.calcularIVA())).toFixed(2);
  };
  
});


