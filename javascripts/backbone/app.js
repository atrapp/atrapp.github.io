var App = {
  Router: null,
  initialize: function(){   
    this.router = new App.Router();   
    Backbone.history.start();
  }
}

App.Router = Backbone.Router.extend({
 
  routes : {
    ''          : 'intro', 
    'home'      : 'home',
    'about'     : 'about',
    'projects'  : 'projects',
    'resume'    : 'resume',
    'contact'   : 'contact'
  },

  intro: function(){  
      removeActiveClass();
      $(".intro-menu").addClass("active");   
      // scrollToAnchor('intro');  
      $("html, body").animate({ scrollTop: 0 }, "slow");
  },

  home: function(){  
      removeActiveClass();
      $(".home-menu").addClass("active");   
      scrollToAnchor('intro');   
  },

  about: function(){   
      removeActiveClass();
      $(".about-menu").addClass("active");   
      scrollToAnchor('about');  
  },

  projects: function(){   
      removeActiveClass();
      $(".projects-menu").addClass("active");   
      scrollToAnchor('projects');   
  },

  resume: function(){   
      removeActiveClass();
      $(".resume-menu").addClass("active");   
      scrollToAnchor('resume');    
  },

  contact: function(){  
      removeActiveClass();
      $(".contact-menu").addClass("active");   
      scrollToAnchor('contact');   
  }

})
 
function removeActiveClass(){
  $(".home-menu").removeClass("active");
  $(".about-menu").removeClass("active");
  $(".projects-menu").removeClass("active");
  $(".resume-menu").removeClass("active");
  $(".contact-menu").removeClass("active");
}

function scrollToAnchor(anchor){  
  var aTag = $("#"+ anchor +"-block");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');   
}


$(function(){
  App.initialize();

  $("#circle1").hide();
  $("#circle2").hide();
  $("#circle3").hide();
  $("#circle4").hide();  
  $("#bg2").hide();
  $("#bg1-circle-text").hide();   
  $("#bg1-circle-text").delay(1000).fadeIn(1000); 
  $("#bg1").delay(2000).fadeOut(3000);
  $("#bg2").delay(5000).fadeIn(3000);
  $("#circle1").delay(5000).fadeIn(2000);
  $("#circle3").delay(6000).fadeIn(2000);
  $("#circle4").delay(7000).fadeIn(2000);
  $("#circle2").delay(8000).fadeIn(2000);
  
})

