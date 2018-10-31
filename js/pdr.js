if($(window).width() > 767) {
  $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
                $("#aside_container").addClass("fixed_aside");
            } else {
                $("#aside_container").removeClass("fixed_aside");
            }
      });
  });
}

else {
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
              $("#aside_container").removeClass("fixed_aside");
            }
            });
        });

}

$(window).on('resize', function(e) {

  if ($(window).width() > 833) {
    $(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
                  $("#aside_container").addClass("fixed_aside");
              } else {
                  $("#aside_container").removeClass("fixed_aside");
              }
        });
    });
  }

});

$(window).on('resize', function(e) {

  if ($(window).width() < 833) {
    $(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
                  $("#aside_container").removeClass("fixed_aside");
                }
                });
            });
  }

});
