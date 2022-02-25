var name = prompt("What is your name:");
var firstChar = name.slice(0,1);
var upperCaseFirst = firstChar.toUpperCase();
var restOfName = name.slice(1,name.lenght);
var restLower = restOfName.toLowerCase();
var finalName = upperCaseFirst + restLower;
alert("Hello, " + finalName);