$("").ready(function(){ 

    $("#projects").hide();
    $(".contact").hide();
    let projclicked = 0; 
    let conclicked = 0; 
    let aboutClicked = 0; 

    $(".projTitle").click(function(){
    
    if(projclicked % 2 == 0){
        $("#projects").show();
        $(".contact").hide();
        $(".about").hide();
        // gsap.timeline({delay:0.2}) this is gonna be how i make them look pretty
        // .to('.project'), {duration:.5, opacity:1, ease:Power3.easIn}
      }
      else
      {
        $("#projects").hide();
      }
      projclicked++;
    });

    $(".contactTitle").click(function(){
    
        if(conclicked % 2 == 0){
            $(".contact").show();
            $("#projects").hide();
            $(".about").hide();
          }
          else
          {
            $(".contact").hide();
          }
          conclicked++;
        });

        $(".container").click(function(){
    
            if(aboutClicked % 2 == 0){
                $(".about").show();
                $(".contact").hide();
                $("#projects").hide();
              }
              else
              {
                $(".about").hide();
              }
              aboutClicked++;
            });
    








});