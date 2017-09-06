var fs = require('fs');

function mergeValues(values, content) {
	// Cycle over keys
	for(var key in values) {
		// Replace all {{key}} with teh value from the object
		content = content.replace("{{" + key + "}}", values[key]);
	}
	// Return merged content
	return content
}
function view(templateName, values, response){
	// Read teh template file 
	var fileContent = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
	fileContent = mergeValues(values, fileContent);
		// Write out the response
	response.write(fileContent);
};

module.exports.view = view;