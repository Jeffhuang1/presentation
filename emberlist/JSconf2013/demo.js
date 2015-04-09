var App = Ember.Application.create();

App.Router.map(function(){
	this.route('demo', {path:'/'});
});

App.DemoController = Ember.ObjectController.extend({
  // initial value
  text: "",
  list: Ember.A([]),
  script: 
"for(var i=0; i<5000; i++){\n"+
"  this.list.pushObject(i);\n"+
"}",
  executionTime: "",
  execute: function() {
  	var start = window.performance.now();
    eval(this.get('script'));
    console.log(this.set('executionTime', (window.performance.now() - start).toFixed() + "ms"));
  }
});


Ember.TextField.reopen({
  attributeBindings: ['style']
});


Ember.TextArea.reopen({
  attributeBindings: ['style']
});
