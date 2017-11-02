var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://henity.github.io/master/people.json');
myRequest.onload = function(){
	console.log(myRequest.responseText);
};
myRequest.send();
