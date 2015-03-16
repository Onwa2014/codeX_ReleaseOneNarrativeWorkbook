var fs = require('fs');
 var files = fs.readdirSync('./files/week1/')
  console.log(files);

//files.forEach (function(fls){
	//console.log(fls);

var linesInFiles = fs.readFileSync('./files/week1/')
  console.log(linesInFiles.split("\n").length);




/*
var fs = require('fs');
var files = fs.readdir('./files/week1/', function(err, files){

	files.forEach(function(fls){
		var linesInFilesAsync = fs.readFileSync('./files/week1/' + fls, "utf8", function(err, files){
			console.log(linesInFiles.split("\n"));	
		});
	});
});



console.log("done!");

console.log(files);

*/


 