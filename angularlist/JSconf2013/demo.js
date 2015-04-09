function DemoCtrl($scope) {

  $scope.text = "";

  $scope.list = [];

  $scope.script = 
"for(var i=0; i<5000; i++){\n"+
"  $scope.list.push(i);\n"+
"}";
  
  $scope.execute = function() {
var beginning = new Date().getTime();
  	eval($scope.script);
  	    var end = new Date().getTime();
var time = end - beginning;
alert('Execution time: ' + time);
  };
}