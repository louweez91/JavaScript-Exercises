
    var degFahren = Number(prompt("Enter the degrees Fahrenheit", " "));

	var degCent = 0;

	degCent = 5/9 * (degFahren - 32);
	document.write(degFahren + " Fahrenheit is " + degCent + " Centigrade<br />");

	if (degCent <= 0)
	{
		document.write("That's the freezing point of water or colder.");
	}
	if (degCent >= 100)
	{
		document.write("That's the boiling point of water or hotter.");
	}
document.write("That's still liquid");

