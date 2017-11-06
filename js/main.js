let page_key = {
	"#about": 1,
	"#skills": 2,
	"#projects": 3
};

let current_page = "#about";

$(document).ready(function() {
	$('body').show();
	$('ul.tabs').tabs();
	//$('.tabs').tabs({swipeable: true});
	$('.tab a').click(assign_animation)
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel.carousel-slider').css("height", "calc(100% - 4px)");
	$('keyboard').css("animation-name", "none");
});

function assign_animation(e) {
	let page = e.target.getAttribute("href");

	if(page_key[page] > page_key[current_page]) {
		$(page).css("animation-name", "appear-left");
		$(current_page).css("animation-name", "disappear-left");
	}
	else if(page_key[page] < page_key[current_page]) {
		$(page).css("animation-name", "appear-right");
		$(current_page).css("animation-name", "disappear-right");
	}

	current_page = page;
}