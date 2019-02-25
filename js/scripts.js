//front-end logic

$(document).ready(function() {
  $("button#button1").click(function() {
    $("#class2").toggle();
    $("#class1").hide();
  });

  $("button#button2").click(function() {
    $("#class2").hide();
    $("#class3").toggle();
  });
  $("button#button2p").click(function() {
    $("#class1").toggle();
    $("#class2").hide();
  });

  $("button#button3").click(function() {
    $("#class3").hide();
    $("#class4").toggle();
  });
  $("button#button3p").click(function() {
    $("#class3").hide();
    $("#class2").toggle();
  });

  $("button#button4").click(function() {
    $("#class4").hide();
    $("#class5").toggle();
  });
  $("button#button4p").click(function() {
    $("#class4").hide();
    $("#class3").toggle();
  });

  $("button#button5").click(function() {
    $("#class5").hide();
    $("#class6").toggle();
  });
  $("button#button5p").click(function() {
    $("#class5").hide();
    $("#class4").toggle();
  });

  $("button#button6").click(function() {
    $("#class6").hide();
    $("#class7").toggle();
  });
  $("button#button6p").click(function() {
    $("#class6").hide();
    $("#class5").toggle();
  });

  $("button#button7").click(function() {
    $("#class7").hide();
    $("#class8").toggle();
  });
  $("button#button7p").click(function() {
    $("#class7").hide();
    $("#class6").toggle();
  });

  $("button#button8").click(function() {
    $("#class8").hide();
    $("#class9").toggle();
  });
  $("button#button8p").click(function() {
    $("#class8").hide();
    $("#class7").toggle();
  });

  $("button#button9").click(function() {
    $("#class9").hide();
    $("#class10").toggle();
  });
  $("button#button9p").click(function() {
    $("#class9").hide();
    $("#class8").toggle();
  });

  $("button#button10p").click(function() {
    $("#class10").hide();
    $("#class9").toggle();
  });
  $("button#button10").click(function() {
    $("#class10").hide();
    $("#result").toggle();
  })
  $("button#button11").click(function() {
    location.reload(true);
  });






  //back-end logic
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