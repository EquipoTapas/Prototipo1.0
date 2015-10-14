angular.module("modulocliente.controllers", ["ionic"])

.controller("contenido", function($scope, $ionicSideMenuDelegate, $firebaseArray){
	
  	//$scope.Productos.scroll = scrollRef.scroll;

	$scope.popularidad = 0;
	$scope.cantidad = 0;

	//Evento clic Menú Superior Izq
	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	};

	$scope.AumentarPopularidad = function(){
		$scope.popularidad = $scope.popularidad  + 1;
	}
	
	$scope.AumentarCantidad = function(){
		$scope.cantidad = $scope.cantidad  + 1;
	}
	
	$scope.DisminuirCantidad = function(){
		if ($scope.cantidad > 0) {
			$scope.cantidad = $scope.cantidad  - 1;
		};
	}

	$scope.InformacionProducto = function(){
		alert("Información Producto");
	}
})

.controller("lizq", function($scope){




})