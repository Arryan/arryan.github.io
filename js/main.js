var page_key = {
	"#about": 1,
	"#education": 2,
	"#projects": 3,
	"#skills": 4
};

var current_page = "#about";

$(document).ready(function() {
	$('body').show();
	$('ul.tabs').tabs();
	//$('.tabs').tabs({swipeable: true});
	$('.tab a').click(assign_animation)
});

function assign_animation(e) {
	let page = e.target.getAttribute("href");

	if(page_key[page] > page_key[current_page]) {
		$(page).css("animation-name", "appear-left");
		$(current_page).css("display", "flex");
		$(current_page).css("animation-name", "disappear-left");
	}
	else if(page_key[page] < page_key[current_page]) {
		$(page).css("animation-name", "appear-right");
		$(current_page).css("display", "flex");
		$(current_page).css("animation-name", "disappear-right");
	}

	current_page = page;
}