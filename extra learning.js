// Parse Float
// method converts a string to a number
var num1="5";
var num2="8"
// var num3=parseFloat(num1+num2)
// istrhan aik saath nahin krna
// var num3 = parseFloat(num1 + num2); // Concatenates "5" and "8" to "58" and then parses to 58
var num3=parseFloat(num1)+parseFloat(num2)//alag alag krna hai num mein convert
alert(num3);
// ParseFloat returns NAN if 
// alert(parseFloat("hi 2345"))nan
// and if
// alert(parseFloat("456 years")) output 456 as a number
