$(document).ready(function(){
  $('.loading').fadeOut()
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
  });
  var heightNav = $('nav').height()
  $('body > .slider').css('padding-top', heightNav)
  if($(document).scrollTop(0)){
    $('li.home-nav').addClass('active')
  }
});
////////////////
// when user clicked pars-menu
$('.menu-phone li a').click(function(){
  $('.menu-phone').css('transform', 'translateY(-700px)')
})

///////////////////////////
// When user Clicked on pars-menu
$('.pars-menu').click(function(){
  $('.menu-phone').css('transform', 'translateY(0)')
})
$('.menu-phone i.close').click(function(){
  $('.menu-phone').css('transform', 'translateY(-700px)')
})
///////////////////////
// When user clicked on any image from prouducts
$('.card').click(function(){
  $('#up').fadeIn('slow')
  $('.pop .description').hide()
  var srcImage = $(this).find('.image').css('background-image')
  $('.img-pop').css('background-image', srcImage)
})
// when user clicked on any image from Gallery
$('.image').click(function(){
  $('#up').fadeIn('slow')
  $('.pop .description').hide()
  var srcImage = $(this).css('background-image')
  $('.img-pop').css('background-image', srcImage)
})
// when user clicked any place outside img-pop
$(document).mouseup(function(e){
    var container = $(".pop");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('#up').fadeOut()
    }
});

///////////////////////////////
$('.card:has(p)').click(function(){
  // var textInP = $(this).find('p').text()
  // $('.pop .description').text(textInP)
  $('.pop .description').show()
})





// CODE SOURCE: https://codepen.io/joxmar/pen/NqqMEg?editors=1010
// Cache selectors
var lastId,
topMenu = $("nav > ul"),
topMenuHeight = topMenu.outerHeight()+1,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
   if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
 var href = $(this).attr("href"),
     offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
 $('html, body').stop().animate({
     scrollTop: offsetTop
 }, 850);
 e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter(`[href="#${id}"]`).parent().addClass("active");
  }
});
