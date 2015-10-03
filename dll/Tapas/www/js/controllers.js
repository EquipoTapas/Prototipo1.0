angular.module("modulocliente.controllers", ["ionic"])

.controller("contenido", function($scope, $ionicSideMenuDelegate){
	
	//Evento clic Menú Superior Izq
	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	};

	$scope.cantidad = "0";
	var objeto = [
		{"id":"333","img":"https://goo.gl/jSyabg","popularidad":"221"},
		{"id":"444","img":"https://goo.gl/Appp1W","popularidad":"83"},
		{"id":"555","img":"http://goo.gl/GUKkTM","popularidad":"46"},
		{"id":"666","img":"http://goo.gl/7pfsBQ","popularidad":"23"},
		{"id":"777","img":"http://goo.gl/YmmiqQ","popularidad":"32"},
		{"id":"888","img":"https://goo.gl/zYeX26","popularidad":"11"}
	]

	$scope.popularidad = 0;
	$scope.cantidad = 0;

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