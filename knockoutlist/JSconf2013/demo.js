function TodoCtrl() {
  var self = this;

  this.text = ko.observable();

  this.list = ko.observableArray();

  this.selected = ko.observable("0");

  this.scripts = [ko.observable(
"var temporary = [];\n"+
"for(var i=0; i<5000; i++){\n"+
"  temporary.push(i);\n"+
"}\n"+
"this.list(temporary);"),
ko.observable(
"for(var i=0; i<5000; i++){\n"+
"  this.list.push(i);\n"+
"}")];

  this.toggle = function(){
    self.selected(self.selected() == 0 ? 1 : 0);
  };

  this.selectedScript = ko.computed({
    read: function(){
      return self.scripts[self.selected()]();
    },
    write: function(value){
      self.scripts[self.selected()](value);
    }
  });
  
  this.executionTime = ko.observable("");

  this.execute = function() {
    var beginning = new Date().getTime();
    var start = window.performance.now();
    eval(self.selectedScript());
    self.executionTime((window.performance.now() - start).toFixed() + "ms");
    var end = new Date().getTime();
var time = end - beginning;
alert('Execution time: ' + time);
  };
}
var todoCtrl = new TodoCtrl();

ko.applyBindings(todoCtrl);