
// ------------------ navbar start ---------------
src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
crossorigin="anonymous">

$(function() {
$(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } else {
        $(".item").addClass("active");
    }
});
});


        var menu = document.querySelector('.menu');
        var menuBtn = document.querySelector('.menu button');
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('opened')
        })
 // ------------------ navbar end ---------------

 // ------------------ event  start ---------------

        $(document).ready(function(){
            $('.thumbnails a').click(function(e){
              e.preventDefault();
        $('.image-gallery img').attr('src',$(this).attr('href'));
            })
          });

  // ------------------ event end ---------------