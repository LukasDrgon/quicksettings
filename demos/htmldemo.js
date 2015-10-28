window.onload = function() {


	var model = {
		title: document.title,
		bgColor: "#ffffff",
		header: "Hello world",
		p_fontSize: 10,
		fontFamily: "serif"
	}


	var settings = QuickSettings.create(300, 0, "HTML demo");

	settings.addInfo("info", "Since all the previous demos were canvas-based, I just wanted to show that there's no dependency on canvas here.");
	settings.addInfo("info2", "Most of this is done through direct binding on the HTML objects.");
	settings.addInfo("info3", "The fontSize control needs a callback because we have to add a unit (px or whatever)");
	settings.bindText("title", document.title, document);
	settings.bindColor("backgroundColor", "#ffffff", document.body.style);
	settings.bindText("innerHTML", "Hello world", document.getElementsByTagName("h1")[0]);
	settings.bindDropDown("fontFamily", ["serif", "sans-serif", "monospace", "cursive"], document.body.style);

	settings.addRange("fontSize", 1, 40, 10, 1, function(value) {
		// can't bind directly, because we need to add "px" or other unit :(
		document.getElementsByTagName("p")[0].style.fontSize = value + "px";
	});


}
