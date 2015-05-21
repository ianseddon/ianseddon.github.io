$(document).ready(function () {
  /*
   * Gallery script
   */
  $('.gallery-nav-right').click(function () {
    var $currentSlide = $(this).parents('.gallery-slide');
    var $nextSlide = $currentSlide.next('.gallery-slide');
    if($nextSlide.length) {
      $currentSlide.hide();
      $nextSlide.show();
    }
  });
  $('.gallery-nav-left').click(function () {
    var $currentSlide = $(this).parents('.gallery-slide');
    var $nextSlide = $currentSlide.prev('.gallery-slide');
    if($nextSlide.length) {
      $currentSlide.hide();
      $nextSlide.show();
    }
  });
});
