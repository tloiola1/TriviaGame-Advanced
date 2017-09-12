  var minionsGif;
  var comeon;

  function hideQuestions1(){
    $("#gif").hide();
    $(".startButton").hide();
    $(".quiz1").show();
    $(".quiz1 .answer").show();
    $(".quiz2").hide();
    $(".quiz3").hide();
    $(".quiz4").hide();
  }
  function hideQuestions2(){
    $("#gif").hide();
    $(".quiz1").hide();
    $(".quiz2").show();
    $(".quiz2 .answer").show();
  }
  function hideQuestions3(){
    $("#gif").hide();
    $(".quiz2").hide();
    $(".quiz3").show();
    $(".quiz3 .answer").show();
  }
  function hideQuestions4(){
    $("#gif").hide();
    $(".quiz3").hide();
    $(".quiz4").show();
    $(".quiz4 .answer").show();
  }

  function getGiphy(){
    
    minionsGif = $("<iframe>");
    minionsGif.attr("src", "https://giphy.com/embed/11sBLVxNs7v6WA");
    minionsGif.attr("style", "border: none; pointer-events:none");

    comeon = $("<iframe>");
    comeon.attr("src", "https://giphy.com/embed/MwOuiiTfWfWgM");
    comeon.attr("style", "border: none; pointer-events:none");


    
  }
    
  function celebration1(){
    $("#gif").show();
    $("#gif").html(minionsGif);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions2, 5000);
  }
  function celebration2(){
    $("#gif").show();
    $("#gif").html(minionsGif);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions3, 5000);
  }
  function celebration3(){
    $("#gif").show();
    $("#gif").html(minionsGif);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions4, 5000);
  }
  function celebration4(){
    $("#gif").show();
    $("#gif").html(minionsGif);      
    $(".quiz .answer").hide();
    $(".submitButton").show();
  }

  function comeOn1(){
    $("#gif").show();
    $("#gif").html(comeon);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions2, 5000);
  }
  function comeOn2(){
    $("#gif").show();
    $("#gif").html(comeon);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions3, 5000);
  }
  function comeOn3(){
    $("#gif").show();
    $("#gif").html(comeon);      
    $(".quiz .answer").hide();
    var local = setTimeout(hideQuestions4, 5000);
  }
  function comeOn4(){
    $("#gif").show();
    $("#gif").html(comeon);      
    $(".quiz .answer").hide();
    $(".submitButton").show();
  }