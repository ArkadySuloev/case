var num = [ 10, 11, 34, 2, 98, 101, 23]

var max = num[0]

for (var i = 1; i <= num.length; i++) {
	if (num[i] > max) {
		max = num[i]
	}
	alert(max)
}
