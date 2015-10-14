angular.module("modulocliente.controllers", ["ionic", "firebase"])

.controller("contenido", function($scope, $ionicSideMenuDelegate, $firebaseArray){
	
	//Se consultan los primeros 4 productos de la general
	//var OFProductos = new Firebase("https://licoresgeneral.firebaseio.com/1");
	//$scope.Productos = $firebaseArray(OFProductos);

	var OFProductos = new Firebase("https://licoresgeneral.firebaseio.com/1");
	//var scrollRef = new Firebase.util.Scroll(OFProductos, 'popularidad');
  	
  	OFProductos.orderByChild("popularidad").startAt(83).endAt(2444443)
  	.on("child_added", function(snapshot) {
	  console.log("Key: "+snapshot.key() + " - Pdad: " + snapshot.val().popularidad);
	});


  	//scrollRef.scroll.next(3);

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