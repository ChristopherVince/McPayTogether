angular.module('menuApp', [])
  .controller('MenuController', ['$scope', function($scope) {
    // Datos iniciales
    $scope.pedidoHost = { cliente: 'Yo', productos: [{ nombre: 'Big Mac', precio: 89.00, cantidad: 1 }] };
    $scope.pedidos = [
      { nombre: 'Ana', productos: [{ nombre: 'McTrio Mediano', precio: 98.75, cantidad: 1 }] },
      { nombre: 'Luis', productos: [{ nombre: '2 Hamburguesas con queso', precio: 138.60, cantidad: 1 }, { nombre: 'Coca-Cola Grande', precio: 29.00, cantidad: 1 }] },
      { nombre: 'Laura', productos: [{ nombre: 'Papas fritas medianas', precio: 158.60, cantidad: 1 }, { nombre: 'Sundae de chocolate', precio: 42.00, cantidad: 1 }] }
    ];

    // Cambiar la cantidad de productos
    $scope.cambiarCantidadHost = function(i, d) { 
      const p = $scope.pedidoHost.productos[i]; 
      p.cantidad = Math.max(1, p.cantidad + d); 
      $scope.pedidoHost.total = $scope.calcularTotal($scope.pedidoHost.productos); 
    };
    
    // Borrar un producto del pedido del host
    $scope.borrarHost = function(i) { 
      $scope.pedidoHost.productos.splice(i, 1); 
      $scope.pedidoHost.total = $scope.calcularTotal($scope.pedidoHost.productos); 
    };

    // Cambiar la cantidad de productos en el pedido del grupo
    $scope.cambiarCantidadGrupo = function(p, i, d) { 
      const prod = p.productos[i]; 
      prod.cantidad = Math.max(1, prod.cantidad + d); 
      p.total = $scope.calcularTotal(p.productos); 
    };

    // Borrar un producto del pedido del grupo
    $scope.borrarProductoGrupo = function(p, i) { 
      p.productos.splice(i, 1); 
      p.total = $scope.calcularTotal(p.productos); 
      if (!p.productos.length) { 
        $scope.pedidos.splice($scope.pedidos.indexOf(p), 1); 
      }
    };

    // Seleccionar el método de pago
    $scope.seleccionarPago = function(m) { 
      $scope.metodoPago = m; 
    };

    // Calcular el total de los productos
    $scope.calcularTotal = function(l) { 
      return l.reduce((s, v) => s + v.precio * v.cantidad, 0); 
    };

    // Obtener el total general de todos los pedidos
    $scope.getTotalGeneral = function() { 
      let t = $scope.calcularTotal($scope.pedidoHost.productos); 
      $scope.pedidos.forEach(p => t += $scope.calcularTotal(p.productos)); 
      return t; 
    };

    // Inicialización del total del pedido
    $scope.pedidoHost.total = $scope.calcularTotal($scope.pedidoHost.productos);
    $scope.pedidos.forEach(p => p.total = $scope.calcularTotal(p.productos));

    // Funciones de menú, QR y carrito
    $scope.toggleMenu = function() {
      alert('Menú abierto');
    };

    $scope.toggleQR = function() {
      alert('QR abierto');
    };

    $scope.toggleCarrito = function() {
      alert('Carrito abierto');
    };

    // Función para continuar con el pago
    $scope.continuarMiPago = function() {

      if($scope.metodoPago == "efectivo"){
        window.location.href = 'Recibo.html';  // Cambia esta URL si es necesario
      } else if($scope.metodoPago == "tarjeta"){
        window.location.href = 'AgregarTarjeta.html';  // Cambia esta URL si es necesario
      }else{
              // Mostrar un mensaje de confirmación con el método de pago seleccionado
      alert('Escoja una opción de pago');
      }

    };
  }]);
