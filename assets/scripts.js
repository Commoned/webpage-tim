window.onscroll = function() {scrollFunction()};
function popfunction()
{
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	document.getElementById("nav").style.height = "30px";
	document.getElementById("logo").style.width = "20px";
	document.getElementById("logo").style.height = "20px";
	var list = document.getElementById("nav").getElementsByClassName("links");;
	for (let item of list) {
	console.log(item.id);
	item.style.padding="5px 20px";

	}

	} else {
	document.getElementById("nav").style.height = "80px";
	document.getElementById("logo").style.width = "80px";
	document.getElementById("logo").style.height = "80px";
	var list = document.getElementById("nav").getElementsByClassName("links");;
	for (let item of list) {
	console.log(item.id);
	item.style.padding="30px 20px";
	}
	}

}
function darkmode()
{
	var elements = [document.getElementById("tblspecs"),document.getElementById("stockphoto"),document.getElementById("banner"), document.body]
	for (let item of elements)
	{
		item.classList.toggle("darkmode");
	}
	var tables = document.getElementsByClassName("pic");
	for (let item of tables)
	{
		item.classList.toggle("picdarkmode");
	}
}

function  bewerben(){
	var element = document.getElementById("formcontainer");
	element.style.display = "block";
	document.addEventListener('keydown', function(event) {
		const key = event.key;
		if (key === "Escape") {
			var element = document.getElementById("formcontainer");
			element.style.display = "none";
		}
	});

}

function bewerbensubmit(){
	let x = document.forms["bewform"]["fullname"].value;
	var regex = new RegExp('[a-zA-Z\- ]+,[a-zA-Z\- ]+');
	if(regex.test(x))
	{
		x = document.forms["bewform"]["emailadress"].value;
		regex = new RegExp('[0-9a-zA-ZöüäÖÄÜ.,\-]+@[0-9a-zA-Z\-]+[.][a-z]{2,}');
		if(regex.test(x))
		{
			var element = document.getElementById("formcontainer");
			element.style.display = "none";
			return true;
		}
		else{
			alert("Fehler in Email!");
			return false;
		}
	}
	else{
		alert("Fehler in Name. Schema: Vorname,Nachname");
		return false;
	}
	
}

var wcounter = 0;
function windows_XP(){
	wcounter++;
	if(wcounter == 10 )
	{
		var audio = new Audio('assets/winxp.ogv');
		audio.volume = 0.5;
		audio.play();
		counter=0;
	}

}
var acounter = 0;
function apple(){
	acounter++;
	if(acounter == 10 )
	{
		var audio = new Audio('assets/apple.ogg');
		audio.volume = 0.5;
		audio.play();
		acounter=0;
	}

}