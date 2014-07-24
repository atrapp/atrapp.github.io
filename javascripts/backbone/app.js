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
  $("#circle2").delay(6000).fadeIn(2000);
  $("#circle3").delay(7000).fadeIn(2000);
  $("#circle4").delay(8000).fadeIn(2000);

  $("#firstless").hide();
  $(".firsttext").hide();

  $("#firstmore").click(function(){
    $(".firsttext").slideToggle();
    $("#firstless").show();
    $("#firstmore").hide();
  });
  $("#firstless").click(function(){
    $(".firsttext").slideToggle();
    $("#firstless").hide();
    $("#firstmore").show();
  });

  $("#secondless").hide();
  $(".secondtext").hide();

  $("#secondmore").click(function(){
    $(".secondtext").slideToggle();
    $("#secondless").show();
    $("#secondmore").hide();
  });
  $("#secondless").click(function(){
    $(".secondtext").slideToggle();
    $("#secondless").hide();
    $("#secondmore").show();
  });

  $("#thirdless").hide();
  $(".thirdtext").hide();

  $("#thirdmore").click(function(){
    $(".thirdtext").slideToggle();
    $("#thirdless").show();
    $("#thirdmore").hide();
  });
  $("#thirdless").click(function(){
    $(".thirdtext").slideToggle();
    $("#thirdless").hide();
    $("#thirdmore").show();
  });

  $("#fourthless").hide();
  $(".fourthtext").hide();

  $("#fourthmore").click(function(){
    $(".fourthtext").slideToggle();
    $("#fourthless").show();
    $("#fourthmore").hide();
  });
  $("#fourthless").click(function(){
    $(".fourthtext").slideToggle();
    $("#fourthless").hide();
    $("#fourthmore").show();
  });

  $("#fifthless").hide();
  $(".fifthtext").hide();

  $("#fifthmore").click(function(){
    $(".fifthtext").slideToggle();
    $("#fifthless").show();
    $("#fifthmore").hide();
  });
  $("#fifthless").click(function(){
    $(".fifthtext").slideToggle();
    $("#fifthless").hide();
    $("#fifthmore").show();
  });

  $("#sixthless").hide();
  $(".sixthtext").hide();

  $("#sixthmore").click(function(){
    $(".sixthtext").slideToggle();
    $("#sixthless").show();
    $("#sixthmore").hide();
  });
  $("#sixthless").click(function(){
    $(".sixthtext").slideToggle();
    $("#sixthless").hide();
    $("#sixthmore").show();
  });

  $("#seventhless").hide();
  $(".seventhtext").hide();

  $("#seventhmore").click(function(){
    $(".seventhtext").slideToggle();
    $("#seventhless").show();
    $("#seventhmore").hide();
  });
  $("#seventhless").click(function(){
    $(".seventhtext").slideToggle();
    $("#seventhless").hide();
    $("#seventhmore").show();
  });

  $("#webdevhide").hide();
  $(".webdev").hide();

  $("#webdevshow").click(function(){
    $(".webdev").slideToggle();
    $("#webdevhide").show();
    $("#webdevshow").hide();
  });
  $("#webdevhide").click(function(){
    $(".webdev").slideToggle();
    $("#webdevhide").hide();
    $("#webdevshow").show();
  });

  $("#addskillshide").hide();
  $(".addskills").hide();

  $("#addskillsshow").click(function(){
    $(".addskills").slideToggle();
    $("#addskillshide").show();
    $("#addskillsshow").hide();
  });
  $("#addskillshide").click(function(){
    $(".addskills").slideToggle();
    $("#addskillshide").hide();
    $("#addskillsshow").show();
  });

  $("#interestshide").hide();
  $(".interests").hide();

  $("#interestsshow").click(function(){
    $(".interests").slideToggle();
    $("#interestshide").show();
    $("#interestsshow").hide();
  });
  $("#interestshide").click(function(){
    $(".interests").slideToggle();
    $("#interestshide").hide();
    $("#interestsshow").show();
  });

  $("#languageshide").hide();
  $(".languages").hide();

  $("#languagesshow").click(function(){
    $(".languages").slideToggle();
    $("#languageshide").show();
    $("#languagesshow").hide();
  });
  $("#languageshide").click(function(){
    $(".languages").slideToggle();
    $("#languageshide").hide();
    $("#languagesshow").show();
  });

  $("#faircardsless").hide();
  $(".faircardstext").hide();

  $("#faircardsmore").click(function(){
    $(".faircardstext").slideToggle();
    $("#faircardsless").show();
    $("#faircardsmore").hide();
  });
  $("#faircardsless").click(function(){
    $(".faircardstext").slideToggle();
    $("#faircardsless").hide();
    $("#faircardsmore").show();
  });

  $("#volunteerless").hide();
  $(".volunteertext").hide();

  $("#volunteermore").click(function(){
    $(".volunteertext").slideToggle();
    $("#volunteerless").show();
    $("#volunteermore").hide();
  });
  $("#volunteerless").click(function(){
    $(".volunteertext").slideToggle();
    $("#volunteerless").hide();
    $("#volunteermore").show();
  });

  $("#studyless").hide();
  $(".studytext").hide();

  $("#studymore").click(function(){
    $(".studytext").slideToggle();
    $("#studyless").show();
    $("#studymore").hide();
  });
  $("#studyless").click(function(){
    $(".studytext").slideToggle();
    $("#studyless").hide();
    $("#studymore").show();
  });

  $("#certificateshide").hide();
  $(".certificates").hide();

  $("#certificatesshow").click(function(){
    $(".certificates").slideToggle();
    $("#certificateshide").show();
    $("#certificatesshow").hide();
  });
  $("#certificateshide").click(function(){
    $(".certificates").slideToggle();
    $("#certificateshide").hide();
    $("#certificatesshow").show();
  });


})

