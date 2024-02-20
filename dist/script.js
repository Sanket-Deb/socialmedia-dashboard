"use strict";
for (
	var radioButtons = document.querySelectorAll(".toggle__wrapper input"),
		i = 0;
	i < radioButtons.length;
	i++
)
	radioButtons[i].addEventListener("click", function (t) {
		document.getElementById("dark").checked
			? (document.querySelector("body").classList = "light")
			: (document.querySelector("body").classList = "dark");
	});
//# sourceMappingURL=script.js.map