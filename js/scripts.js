$(document).ready(function() {
  $("form#login").submit(function(event) {
    $("#quiz").show();
    $(".card").hide();
    $("#log-in").hide();
    event.preventDefault();
  });

  $("#user").show()

  $("form#qstns").submit(function(event) {
    event.preventDefault();
    var inputAnswer = [];

    var qstnOne = parseInt($("input:radio[name=quiz-one]:checked").val());
    var qstnTwo = parseInt($("input:radio[name=quiz-two]:checked").val());
    var qstnThree = parseInt($("input:radio[name=quiz-three]:checked").val());
    var qstnFour = parseInt($("input:radio[name=quiz-four]:checked").val());
    var qstnFive = parseInt($("input:radio[name=quiz-five]:checked").val());
    var qstnSix = parseInt($("input:radio[name=quiz-six]:checked").val());
    var qstnSeven = parseInt($("input:radio[name=quiz-seven]:checked").val());
    var qstnEight = parseInt($("input:radio[name=quiz-eight]:checked").val());
    var qstnNine = parseInt($("input:radio[name=quiz-nine]:checked").val());
    var qstnTen = parseInt($("input:radio[name=quiz-ten]:checked").val());

    inputAnswer.push(qstnOne, qstnTwo, qstnThree, qstnFour, qstnFive, qstnSix, qstnSeven, qstnEight, qstnNine, qstnTen);

    var total = 0;
    for (var i = 0; i < inputAnswer.length; i++) {
      total += inputAnswer[i] / 10 * 100;
    }

    if (total > 79) {
      $("#output").text("Congratulations, you have excellently passed!! You have scored " + total + "%");
    } else if (total > 49) {
      $("#output").text("Good work. You have fairly passed. You have scored " + total + "%")
    } else if (total < 50) {
      $("#output").text("You have performed dismally. You need to retake the test. You scored " + total + "%")
    }

  });
});