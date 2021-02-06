// Revele on Scroll

var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("service");
var dark = 0;
                
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50,												 // start a little later
		triggerHook: 0.9,
		})
		.setClassToggle(revealElements[i], "visible") // add class toggle
		.addTo(controller);
}
        
var nIntervId = setInterval(navColorChange, 10);
function navColorChange(){
    if(dark === 0 )
    {
        if($(window).scrollTop() > 10) {
            $('nav').css('backgroundColor', '#white');

        }else{
            $('nav').css('backgroundColor', 'white');
        }
    }else{
        if($(window).scrollTop() > 10) {
            $('nav').css('backgroundColor', '#DA009F');
        }else{
            $('nav').css('backgroundColor', '#EC9CFF');
        }
    }
};



// Listen for a click on the button
$(".custom-switch").on("click", function(){
    if (document.getElementById('customSwitch1').checked){
        document.body.classList.add("dark-theme");
        dark=1;
    }else {
        document.body.classList.remove("dark-theme");
        dark =0;
    }
})

