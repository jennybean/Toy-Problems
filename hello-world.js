// Hello, World! 
// Write a Hello World! function that can greet someone given their name. The function should return the appropriate greeting.
// For an input of "Alice", the response should be "Hello, Alice!".
// If a name is not given, the response should be "Hello, World!"

function sayHello (name) {
	// If no name is given, return Hello, World!"
	if (!name) return "Hello, World!"
	// Else, greet by name provided 
	else return "Hello, " + name
}