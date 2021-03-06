var questionList = {};
var questionNum = 0;

$(document).ready(function() {
    getQuestionList();
});

function getQuestionList() {
    $.get("/scripts/getQuestions.php", {} , function(json) {
        console.log(json);
        questionList = json;
        showQuestion();
    }, 'json');
}

function showQuestion() {
    if (questionNum > questionList.length-1) questionNum = 0;
    $("#questionText").html(questionList[questionNum].question);
}

function nextQuestion() {
    questionNum++;
    showQuestion();
}
function previousQuestion() {
    questionNum--;
    showQuestion();
}