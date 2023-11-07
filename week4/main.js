var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://AbhijithPattali.github.io/week4/cities1.json');
ourRequest.onload = function() {
var ourData = ourRequest.responseText;
console.log(ourData[0]);
};
ourRequest.send();