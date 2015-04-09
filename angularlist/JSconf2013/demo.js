function DemoCtrl($scope) {

  $scope.text = "";

  $scope.list = [];

  $scope.script = 
"for(var i=0; i<5000; i++){\n"+
"  $scope.list.push(i);\n"+
"}";
  
  $scope.execute = function() {
  	eval($scope.script);
  	    var end = new Date().getTime();
  };
}
