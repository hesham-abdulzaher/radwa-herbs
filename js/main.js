$(document).ready(function(){
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

$(window).scroll(function(){
  var scrollTop         = $(document).scrollTop()
      heightNav         = $('nav').outerHeight(true)
      sliderHeight      = $('.slider').height()
      prouductsOffset   = sliderHeight - heightNav // 405
      prouductsHeight   = $('.prouducts').height() // 2560
      aboutOffset       = $('.about-us').offset().top - heightNav  // 3892
      aboutHeight       = $('.about-us').outerHeight(true) // 550
      contactOffset     = $('.contact').offset().top - heightNav // 550 + 3892 = 4442

  if( scrollTop < sliderHeight){
    $('li').removeClass('active')
    $('li.home-nav').addClass('active')
  } // addClass for li.home-nav
  else if( scrollTop > prouductsOffset && scrollTop < aboutOffset){
    $('li').removeClass('active')
    $('li.prouducts-nav').addClass('active')
  } // addClass for li.prouducts-nav
  else if( scrollTop > aboutOffset && scrollTop < contactOffset){
    $('li').removeClass('active')
    $('li.about-us-nav').addClass('active')
  } // addClass for li.about-us-nav
  else if( scrollTop > contactOffset){
    $('li').removeClass('active')
    $('li.contact-nav').addClass('active')
  } // addClass for li.contact-nav
})


// This function work when user clicked on (li.home-nav) and give him class active #1
$('li.home-nav').click(function(){
  $('html, body').animate({scrollTop: 0}, 1000)
  $('li').removeClass('active')
  $(this).addClass('active')
})
// This function work when user clicked on (li.prouducts-nav) and give him class active #2
$('li.prouducts-nav').click(function(){
  var scrollTop         = $(document).scrollTop()
      sliderHeight      = $('.slider').height()
      prouductsOffset   = sliderHeight // 405

  $('html, body').animate({scrollTop: prouductsOffset}, 1000)
  $('li').removeClass('active')
  $(this).addClass('active')
})
// This function work when user clicked on (li.about-us-nav) and give him class active #3
$('li.about-us-nav').click(function(){
  var scrollTop         = $(document).scrollTop()
      heightNav         = $('nav').outerHeight(true)
      aboutOffset       = $('.about-us').offset().top - heightNav // 3892

  $('html, body').animate({scrollTop: aboutOffset}, 1000)
  $('li').removeClass('active')
  $(this).addClass('active')
})
// This function work when user clicked on (li.contact-nav) and give him class active #4
$('li.contact-nav').click(function(){
  var scrollTop         = $(document).scrollTop()
      heightNav         = $('nav').outerHeight(true)
      contactOffset     = $('.contact').offset().top - heightNav // 550 + 3892 = 4442
  $('html, body').animate({scrollTop: contactOffset}, 1000)
  $('li').removeClass('active')
  $(this).addClass('active')
})
///////////////////////////
// When user Clicked on pars-menu
$('.pars-menu').click(function(){
  $(this).css({'transform': 'scale(3) scale(0)'})
  $('.menu-phone').css('transform', 'translateY(0)')
})
$('.menu-phone i.close').click(function(){
  $('.menu-phone').css('transform', 'translateY(-700px)')
  $('.pars-menu').css({'transform': 'scale(1)'})
})
