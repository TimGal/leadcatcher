if (!navigator.cookieEnabled) {
	alert( 'У Вас отключены cookie, работа сайта ограничена' );
};

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

$(document).ready(function(){
	$('.modal').modal();
});

var leadShown = 0;

var instance = M.Modal.getInstance('#leadcatcher');          

//Наведение мыши на body
$( document.body ).mouseover(function () {
});

var currentDateOfLead = new Date(new Date().getTime() + 15 * 60 * 1000);
console.log(currentDateOfLead.toUTCString());

var checkShown = getCookie("Shown");

$( document.body ).mouseout(function () {
	if (checkShown != "yes" && leadShown != 1) {
		$('#leadcatcher').modal('open');
		leadShown = 1;
		document.cookie = "Shown=yes; path=/; expires=" + currentDateOfLead.toUTCString();
	}
});
