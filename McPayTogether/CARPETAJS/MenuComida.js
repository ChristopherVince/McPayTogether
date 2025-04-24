angular.module('menuApp', [])
  .controller('MenuController', function($scope) {
    $scope.seccionActual = 'recomendacion';

    $scope.menu = {
      recomendacion: [
        { nombre: 'Big Mac', precio: 89, imagen: 'CARPETAIMAGENES/BigMac.png' },
        { nombre: 'McNuggets', precio: 75, imagen: 'CARPETAIMAGENES/Nuggets.jpg' }
      ],
      completo: [
        { nombre: 'Big Mac', precio: 89, imagen: 'CARPETAIMAGENES/BigMac.png' },
        { nombre: 'McNuggets', precio: 75, imagen: 'CARPETAIMAGENES/Nuggets.jpg' },
        { nombre: 'McPollo', precio: 79, imagen: 'CARPETAIMAGENES/McPollo.png' },
        { nombre: 'Papas Grandes', precio: 49, imagen: 'CARPETAIMAGENES/papasGrd.png' }
      ]
    };

    $scope.mostrar = function(seccion) {
      $scope.seccionActual = seccion;
    };

    $scope.toggleMenu = function () {
      window.open("CarritoCompartido.html", "_blank");
    };


    // ➕ Modal: selección de platillos y opciones
    $scope.condimentos = ['Catsup', 'Mostaza', 'Mayonesa', 'Pepinillos'];
    $scope.extras = ['Tocino', 'Queso extra', 'Carne doble'];

    $scope.condimentosSeleccionados = {};
    $scope.extrasSeleccionados = {};

    $scope.cerrarModal = function() {
      $scope.modalAbierto = false;
    };
    
    $scope.platilloSeleccionado = {};

    $scope.abrirModal = function(platillo) {
      $scope.platilloSeleccionado = platillo;
      $scope.modalAbierto = true;
    };
  });