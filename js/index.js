/*Start Home */
let divWidth = $(".box").innerWidth(); 
$(".nav-box").css('left',`-${divWidth}`)
$(".setting i").click(function(){
    if($(".nav-box").css('left') == '0px')
    {    
        $('.nav-box').animate({left: `-${divWidth}`}, 1000)
    }
    else
    {
        $('.nav-box').animate({left:'0px'}, 1000)
    }
})

$("#close").click(function(){
    $('.nav-box').css({left:`-${divWidth}`},3000)
})

/*End Home */

/* Start singers*/
$('#singers h3').click(function(){
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500);
})
/* End singers*/

/*Start countsec */

function countdown() {
    var now = new Date();
    var eventDate = new Date(2023, 10, 26);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("day").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("day").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("secounds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}
countdown()



/*End countsec */

/*Start char */
$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});
/*End char */
