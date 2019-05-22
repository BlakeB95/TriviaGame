$(document).ready(function() {
    
    $(".questions").html("<button type='button' class='btn btn-dark' id='start'>Begin!</button>");
    $("#start").click(function(){

        //start timer
        var timeleft = 60;
        var downloadTimer = setInterval(function(){
            $("#countdown").html(timeleft + " seconds remaining");
            timeleft -= 1;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                $("#countdown").html("Finished");
                finish();
                }
            }, 1000);

        //ask questions
        $(".questions").html("<div id='countdown'>Good luck!</div>");

        //first question asked in firstQuestion div
        $(".questions").append("<div id='firstQuestion'><br>");
            $("#firstQuestion").append("<form>");
                $("#firstQuestion").append("<h6>Who was the lead singer of Alice in Chains?</h6>");
                $("#firstQuestion").append("<input type='radio' name='firstAns' value='n'> Chris Cornell ");
                $("#firstQuestion").append("<input type='radio' name='firstAns' value='n'> Scott Weiland ");
                $("#firstQuestion").append("<input type='radio' name='firstAns' value='y'> Layne Stanley ");
            $("#firstQuestion").append("</form>");
            $("#firstQuestion").append("<p></p>")
        $("#firstQuestion").append("</div");

        $(".questions").append("<div id='secondQuestion'>");
        $("#secondQuestion").append("<form>");
            $("#secondQuestion").append("<h6>Which album did the band Nirvana release first?</h6>");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='n'> Nevermind ");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='y'> Bleach ");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='n'> In Utero ");
            $("#secondQuestion").append("</form>");
        $("#secondQuestion").append("</div");
        $(".questions").append("</div>");

        $(".questions").append("<div id='thirdQuestion'><br>");
        $("#thirdQuestion").append("<form>");
        $("#thirdQuestion").append("<h6>In Stone Temple Pilots' <i>Creep</i>, what did they take time with?</h6>");
            $("#thirdQuestion").append("<input type='radio' name='thirdAns' value='n'> A grounded man ");
            $("#thirdQuestion").append("<input type='radio' name='thirdAns' value='y'> A wounded hand ");
            $("#thirdQuestion").append("<input type='radio' name='thirdAns' value='n'> A larger land ");
            $("#thirdQuestion").append("<form>");
        $("#thirdQuestion").append("<div>");
        $(".questions").append("</div>");

        $(".questions").append("<div id='fourthQuestion'><br>");
        $("#fourthQuestion").append("<form>");
        $("#fourthQuestion").append("<h6>During Nirvana's MTV Unplugged performance, what band did they repeatedly cover?</h6>");
            $("#fourthQuestion").append("<input type='radio' name='fourthAns' value='y'> Meat Puppets ");
            $("#fourthQuestion").append("<input type='radio' name='fourthAns' value='n'> Led Zeppelin ");
            $("#fourthQuestion").append("<input type='radio' name='fourthAns' value='n'> Fugazi ");
            $("#fourthQuestion").append("<form>");
        $("#fourthQuestion").append("<div>");
        $(".questions").append("</div>");

        $(".questions").append("<div id='fifthQuestion'><br>");
        $("#fifthQuestion").append("<form>");
        $("#fifthQuestion").append("<h6>The supergroup Temple of the Dog was created to honor what late musician?</h6>");
            $("#fifthQuestion").append("<input type='radio' name='fifthAns' value='y'> Andrew Wood ");
            $("#fifthQuestion").append("<input type='radio' name='fifthAns' value='n'> Layne Stanley ");
            $("#fifthQuestion").append("<input type='radio' name='fifthAns' value='n'> Kurt Cobain ");
            $("#fifthQuestion").append("<form>");
        $("#fifthQuestion").append("<div>");
        $(".questions").append("</div>");

        $(".questions").append("<div><br><p><input id='getAns' type='button' value='Finish'></p></div>")
        
        //calc score and display to user
        var vals = [];
        var score = 0;
        var numWrong = 0;
        var nonAns = 0;
        var firstVal = "";
        var secVal = "";

        //if user clicks button before time is up
        $("input[id='getAns']").click(function() {
            firstVal = $('input:radio[name=firstAns]:checked').val();
            secVal = $('input:radio[name=secAns]:checked').val();
            thirdVal = $('input:radio[name=thirdAns]:checked').val();
            fourthVal = $('input:radio[name=fourthAns]:checked').val();
            fifthVal = $('input:radio[name=fifthAns]:checked').val();
            vals = [firstVal, secVal, thirdVal, fourthVal, fifthVal];

            for(i=0;i<vals.length;i++){
                if(vals[i] == "y"){
                    score++;
                }
                else if(vals[i] == "n"){
                    numWrong++;
                }
                else{
                    nonAns++;
                }
            }

           displayScore();
         });

         //used if timer is up
        function finish(){
            firstVal = $('input:radio[name=firstAns]:checked').val();
            secVal = $('input:radio[name=secAns]:checked').val();
            thirdVal = $('input:radio[name=thirdAns]:checked').val();
            fourthVal = $('input:radio[name=fourthAns]:checked').val();
            fifthVal = $('input:radio[name=fifthAns]:checked').val();
            vals = [firstVal, secVal, thirdVal, fourthVal, fifthVal];

            for(i=0;i<vals.length;i++){
                if(vals[i] == "y"){
                    score++;
                }
                else if(vals[i] == "n"){
                    numWrong++;
                }
                else{
                    nonAns++;
                }
            }

            displayScore();
            };
        
        function displayScore(){
            $(".questions").html("<div id='score'><p>You got " + score + " right!</p>");
            $("#score").append("<p>You got " + numWrong + " wrong!</p>");
            if(nonAns > 0){
                $("#score").append("<p>You didn't answer " + nonAns + " questions...</p>");
            }
            else{
                $("#score").append("<p>You answered every question!</p>");
            }
            $("#score").append("</div>");
        }
    });
});