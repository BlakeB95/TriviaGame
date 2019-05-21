$(document).ready(function() {
    
    $(".questions").html("<button type='button' class='btn btn-dark' id='start'>Begin!</button>");
    $("#start").click(function(){

        //start timer
        var timeleft = 10;
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
            $("#secondQuestion").append("<h6>Who was the lead singer of Alice in Chains?</h6>");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='y'> Chris Cornell ");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='n'> Scott Weiland ");
            $("#secondQuestion").append("<input type='radio' name='secAns' value='n'> Layne Stanley ");
            $("#secondQuestion").append("</form>");
        $("#secondQuestion").append("</div");
        $(".questions").append("</div>");

        $(".questions").append("<div><br><p><input id='getAns' type='button' value='Get Answers'></p></div>")
        
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
            vals = [firstVal, secVal];

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
            vals = [firstVal, secVal];

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