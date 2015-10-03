angular.module("modulocliente",["modulocliente.controllers","ionic","firebase"])

.run(function($ionicPlatform, $firebaseArray) {
  $ionicPlatform.ready(function() {
    	
    var OFProductos = new Firebase("https://licoresgeneral.firebaseio.com/");
    $firebaseArray(OFProductos);
    

  });
})
