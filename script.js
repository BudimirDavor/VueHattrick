var myObject = new Vue({
	el: '#app1',
	data: {message: 'Hello World'}
})

function myFunction() {
	myObject.message = "Input some text in text field down, thnx!";
}

var app2 = new Vue({
  el: '#app2',
  data: {
	message: ''
  }
})

		