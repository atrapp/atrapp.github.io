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

  $("#firstshow").hide();  

  $("#firstshow").click(function(){
    $(".firsttext").slideToggle();
    $("#firsthide").show();
    $("#firstshow").hide();
  });
  $("#firsthide").click(function(){
    $(".firsttext").slideToggle();
    $("#firsthide").hide();
    $("#firstshow").show();
  });

  $("#secondshow").hide();
  
  $("#secondshow").click(function(){
    $(".secondtext").slideToggle();
    $("#secondhide").show();
    $("#secondshow").hide();
  });
  $("#secondhide").click(function(){
    $(".secondtext").slideToggle();
    $("#secondhide").hide();
    $("#secondshow").show();
  });

  $("#thirdshow").hide();
  
  $("#thirdshow").click(function(){
    $(".thirdtext").slideToggle();
    $("#thirdhide").show();
    $("#thirdshow").hide();
  });
  $("#thirdhide").click(function(){
    $(".thirdtext").slideToggle();
    $("#thirdhide").hide();
    $("#thirdshow").show();
  });

  $("#fourthshow").hide();
  
    $("#fourthshow").click(function(){
    $(".fourthtext").slideToggle();
    $("#fourthhide").show();
    $("#fourthshow").hide();
  });
  $("#fourthhide").click(function(){
    $(".fourthtext").slideToggle();
    $("#fourthhide").hide();
    $("#fourthshow").show();
  });

  $("#fifthshow").hide();
  
  $("#fifthshow").click(function(){
    $(".fifthtext").slideToggle();
    $("#fifthhide").show();
    $("#fifthshow").hide();
  });
  $("#fifthhide").click(function(){
    $(".fifthtext").slideToggle();
    $("#fifthhide").hide();
    $("#fifthshow").show();
  });

  $("#sixthshow").hide();
 
  $("#sixthshow").click(function(){
    $(".sixthtext").slideToggle();
    $("#sixthhide").show();
    $("#sixthshow").hide();
  });
  $("#sixthhide").click(function(){
    $(".sixthtext").slideToggle();
    $("#sixthhide").hide();
    $("#sixthshow").show();
  });

  $("#seventhshow").hide();
  
  $("#seventhshow").click(function(){
    $(".seventhtext").slideToggle();
    $("#seventhhide").show();
    $("#seventhshow").hide();
  });
  $("#seventhhide").click(function(){
    $(".seventhtext").slideToggle();
    $("#seventhhide").hide();
    $("#seventhshow").show();
  });

  $("#webdevshow").hide();
  
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

  $("#addskillsshow").hide();
 
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

  $("#interestsshow").hide();
 
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

  $("#languagesshow").hide();
 
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

  $("#faircardsshow").hide();
 
  $("#faircardsshow").click(function(){
    $(".faircardstext").slideToggle();
    $("#faircardshide").show();
    $("#faircardsshow").hide();
  });
  $("#faircardshide").click(function(){
    $(".faircardstext").slideToggle();
    $("#faircardshide").hide();
    $("#faircardsshow").show();
  });

  $("#volunteershow").hide();
 
  $("#volunteershow").click(function(){
    $(".volunteertext").slideToggle();
    $("#volunteerhide").show();
    $("#volunteershow").hide();
  });
  $("#volunteerhide").click(function(){
    $(".volunteertext").slideToggle();
    $("#volunteerhide").hide();
    $("#volunteershow").show();
  });

  $("#studyshow").hide();
  
  $("#studyshow").click(function(){
    $(".studytext").slideToggle();
    $("#studyhide").show();
    $("#studyshow").hide();
  });
  $("#studyhide").click(function(){
    $(".studytext").slideToggle();
    $("#studyhide").hide();
    $("#studyshow").show();
  });

  $("#certificatesshow").hide();
  
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

