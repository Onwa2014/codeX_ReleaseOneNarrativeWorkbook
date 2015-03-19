var fs = require('fs'); // calling modules

module.exports = function(filePath){
	
	this.productNames = function(callback) {

		var filesInFolder = fs.readFileSync(filePath, "utf8");

		//split the content of the file into rows
		var rows = filesInFolder.split('\n');

		console.log("===> " + rows.length);	

		//now use each row and split it up tp find each product

        //
        var listOfProducts = [];

        var productMap = {};

        rows.forEach(function(row){
        	//console.log(row.split(',')[1]);
        	var productName = row.split(',')[1];
        	
        	if( productMap[productName] === undefined ){
        		listOfProducts.push(productName);
        		productMap[productName] = 0;
        	}
 
        });

		//now create a unique lis, lucts
        callback(null, listOfProducts);

    };
}




		/*
		var products = new products(filePath){

		};
		*/

		/*filesInFolder.forEach(function(fileName){
			var fileCont = fs.readFileSync('./files/' + fileName, "utf8");
			   var lines = fileCont.split('\n');
			    lines.forEach(function(line){
			    	products.push(line[1].length);
				});
		});

		//return products;
		callback(null, products);
	};
}
	/*this.productsSold = function(err, callback){
		return
	}
}
*/






















	//var listInFolder = fs.readdirSync(folderName); // this should return flder(week1) and file products csv

	/*
	var list = [] // empty array we will push our list here
	listInFolder.forEach(function(prd) {
	 	var fileCont = fs.readFileSync('./files/' + prd ,"utf8"); //read list tht is in the file
	 	var lines = fileCont.split('\n').length;
	 	lines.forEach(function(line){
	 		list.push(line);
	 	});
	});
	*/

	 //return list[1].length;

//};

/*
exports.productNamesAsync = function(folderName, callback) {
	var list = products(folderName);
	callback(null, list);

};
*/
/*
exports.linesInFilesAsync = function(folderName, callback) {

	var linesInFiles = findLines(folderName);
	callback(null, linesInFiles);

}; */
/*
var fs = require('fs');// we are calling their modules so we can use them....
var fileList = fs.readdirSync('./files') // this line we are reading into the folder.... 
console.log(fileList);// prints text files inside Family folder

var list = []
fileList.forEach(function(member){ // we use this soit can bed printed as a list not an array
	var content = fs.readFileSync('./files/' + member, "utf8");// this will give the msg tht is inside the folder.
	

	console.log(content.split('\n')); // content will be printed and then \n will give us number of each line after split.... 
	list.push(content[1]);
});

console.log("list");*/