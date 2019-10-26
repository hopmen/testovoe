document.addEventListener("DOMContentLoaded", function () {

  let widthTabs = document.querySelector(`#myTab`).offsetWidth;
  let countTabs = document.querySelectorAll(`#myTab .nav-item`).length;
  let widthLine = document.querySelector(`.line-position`).offsetWidth;
  let tabs = $('.tabs .nav-item');
  let positionActive = (widthTabs / countTabs - widthLine) / 2;
  $('.line-position').css({'left': positionActive});

  tabs.click(function () {
    let positionTabs = (widthTabs / countTabs * $(this).index()) + (widthTabs / countTabs - widthLine) / 2;
    $('.line-position').css({'left': positionTabs, 'background': `#dbd9d2`});
    positionActive = positionTabs;
  });

  tabs.mouseover(function () {
    if (!this.querySelector('a.active')) {
      let positionTabs = (widthTabs / countTabs * $(this).index()) + (widthTabs / countTabs - widthLine) / 2;
      $('.line-position').css({'left': positionTabs, 'background': `#f60fb3`});
    }
  });

  tabs.mouseout(function () {
    $('.line-position').css({'left': positionActive, 'background': `#dbd9d2`});
  });


});
