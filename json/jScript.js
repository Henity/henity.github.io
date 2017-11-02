var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://henity.github.io/json/people.json'); 
myRequest.onload = function(){
	console.log(myRequest.responseText);
	var myData = myRequest.responseText;
	console.log(myData[0]);
};
myRequest.send();
