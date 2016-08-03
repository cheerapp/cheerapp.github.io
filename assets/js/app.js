$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#ebf0f4', '#ebf0f4', '#ebf0f4', '#ebf0f4'],
        anchors: ['home', 'aboutUs', 'hiring', 'contact'],
        navigationTooltips: ['CheerApp', '关于我们', '加入我们', '联系我们'],
        menu: '#headerMenu',
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        resize: false
    });
});

window.onload = function() {
	var timer = setInterval(changeOpacity, 15);
	var val = 0;
	var z = 0;
	function changeOpacity() {
		if(val <= 100)
		{
			var bigLogo = document.getElementById('bigLogo');
			z = Math.round(3000*Math.sin(val/16)/val);
			bigLogo.style.opacity = Math.min(val/50,1);
			bigLogo.style.marginTop = z +'px';
			val++;
		}
	}
}
