var fs = require('fs');// we are calling their modules so we can use them....
var family_members = fs.readdirSync('./Family/') // this line we are reading into the folder.... 
console.log(family_members);// prints text files inside Family folder

family_members.forEach(function(member){ // we use this soit can bed printed as a list not an array
	var content = fs.readFileSync('./Family/' + member, "utf8");// this will give the msg tht is inside the folder.
	

	console.log(content.split()); // content will be printed and then \n will give us number of each line after split.... 
});
 
console.log("------------------------------------------");

/*

var fs = require('fs');
var family_members = fs.readdir('./Family/', function(err, family_members){

	family_members.forEach(function(member){
		var content = fs.readFileSync('./Family/' + member, "utf8", function(err, content){
			console.log(content.split("\n"));	
		});
	});
});

*/

//console.log("done!");

//console.log(family_members);


