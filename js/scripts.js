// Business logic

function add(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

// User interface logic

$(document).ready(function() {
  $("#questionaire").submit(function() {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
   

    console.log(question1, question2, question3, question4, question5, question6, question7, question8, question9);

    event.preventDefault();
  });


});