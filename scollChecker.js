let box = document.querySelector('body');
let height = box.offsetHeight;
let smallerHeight = height * .35;


$(window).scroll(function(e){ 
    var $el = $('.projTitle'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-30px'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      
    } 
  });

  $(window).scroll(function(e){ 
    var $el = $('.contactTitle'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-30px'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      
    } 
  });
  
  $(window).scroll(function(e){ 
    var $el = $('.container'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '20px'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      
    } 
  });