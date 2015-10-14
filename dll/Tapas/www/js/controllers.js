angular.module("modulocliente.controllers", ["ionic"])

.controller("contenido", function($scope, $ionicSideMenuDelegate){

	


	var ob = [	{"id":"333", "imgproducto":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQ_DaRnpmI36m5jkTO5XtDuYhcoBpAE5hkqOYA3k7Jv2MfRBY8zw","popularidad":"2"},
				{"id":"222", "imgproducto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCm_lecJMWbmXNV2zJmwyRFA6oxrh0lTNBW7oYWseapLvZ_sT9_g","popularidad":"23"},
				{"id":"888", "imgproducto":"http://www.3cordilleras.com/images/3c_blanca.png","popularidad":"34"},
				{"id":"111", "imgproducto":"http://www.exito.com/images/products/413/0000311465277413/0000311466835404_lrg_a.jpg","popularidad":"44"}]

	$scope.Productos = ob;
	$scope.popularidad = 0;
	$scope.cantidad = 0;
	$scope.imgproducto = "";

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