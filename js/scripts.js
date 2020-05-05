// Business logic

function add(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

// User interface logic

$(document).ready(function() {
  $("#questionaire").submit(function() {
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = $("#question6").val();
    var question7 = $("#question7").val();
    var question8 = parseInt($("#question8").val());
    var question9 = $("#question9").val();

    var radioTotal = add(question1, question2, question3, question4, question5);

    if (radioTotal <= 5 && question7 === "false") {
      $("#language").text("Swift");
      $("#link").html('<a href="https://developer.apple.com/swift/">Swift</a>');
    } else if (radioTotal <= 10 && question7 === "true") {
      $("#language").text("C#");
      $("#link").html('<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a>');
    } else if (question8 >= 2000) {
      $("#language").text("Python");
      $("#link").html('<a href="https://www.python.org/">Python</a>');
    } else {
      $("#language").text("Javascript");
      $("#link").html('<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">Javascript</a>');
    }

    $("#name").text(question9);
    $("#output").show();

    event.preventDefault();
  });


});