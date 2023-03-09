var x = 10

function hello() {
	var x = 100
	console.log(x)
}

function hello2() {
	x = 1000
	console.log(x)
}

hello()
hello2()
console.log(x)
