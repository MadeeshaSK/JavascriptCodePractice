class Answer {
    constructor(id, answer, correctState) {
        this.id = id;
        this.answer = answer;
        this.correctState = correctState;
    }
}

class Question {
    constructor(id, question, answers) {
        this.id = id;
        this.question = question;
        this.answers = answers;
    }
}

let dataArray = [];
let submitDataArray = [];

let question1 = new Question(1, "What is the capital of France?", [new Answer(1, "Paris", true), new Answer(2, "London", false), new Answer(3, "Berlin", false), new Answer(4, "Madrid", false), new Answer(5, "Rome", false)]);
let question2 = new Question(2, "What is 2 + 2?", [new Answer(1, "3", false), new Answer(2, "4", true), new Answer(3, "5", false), new Answer(4, "6", false), new Answer(5, "7", false)]);
let question3 = new Question(3, "What is the largest planet?", [new Answer(1, "Earth", false), new Answer(2, "Mars", false), new Answer(3, "Jupiter", true), new Answer(4, "Saturn", false), new Answer(5, "Venus", false)]);
let question4 = new Question(4, "What is the boiling point of water?", [new Answer(1, "90°C", false), new Answer(2, "100°C", true), new Answer(3, "110°C", false), new Answer(4, "120°C", false), new Answer(5, "130°C", false)]);
let question5 = new Question(5, "What is the speed of light?", [new Answer(1, "299,792,458 m/s", true), new Answer(2, "150,000,000 m/s", false), new Answer(3, "300,000,000 m/s", false), new Answer(4, "250,000,000 m/s", false), new Answer(5, "200,000,000 m/s", false)]);

dataArray.push(question1, question2, question3, question4, question5);
console.log(dataArray);

let seconds = 0;
let currentQuestion = 1;
let interval = undefined;

$(document).ready(function() {
    $('.top-left').append('<input type="text" id="txt-marks" class="form-control" style="font-weight: bold; text-align: center" value="0/5" disabled>');
});

$('#txt-time').val("00:00");
$('#txt-score').val("1/5");

const displayQuiz = () => {
    seconds = 0;

    let selectedQuestion = dataArray[currentQuestion - 1];
    $('#question').text(selectedQuestion.question);
    $('#answer-list').empty();

    $.each(selectedQuestion.answers, function (index, record) {
        let li = $('<li>');
        let rbtn = $('<input>').attr({
            type: 'radio',
            name: 'answer',
            value: record.id
        });
        let lbl = $('<label>').text(' ' + record.answer);
        li.append(rbtn);
        li.append(lbl);
        $('#answer-list').append(li);
    });

    interval = setInterval(() => {
        if (seconds < 10) {
            $('#txt-time').val('00:0' + seconds);
        } else {
            $('#txt-time').val('00:' + seconds);
        }
        seconds++;
        if (seconds == 30) {
            verifyAnswer('skipped');
        }
    }, 1000);
}

const startQuiz = () => {
    $('#btn-start').prop('disabled', true);
    submitDataArray = [];
    currentQuestion = 1;
    $('#txt-score').val("1/5");
    $('#txt-marks').val("0/5");
    displayQuiz();
}

const verifyAnswer = (state) => {
    clearInterval(interval);
    if (state == 'skipped') {
        submitDataArray.push(null);
    } else {
        let answer = $('input[name="answer"]:checked').val();
        submitDataArray.push({
            question: currentQuestion,
            answer: answer
        });
    }
    if (currentQuestion == 5) {
        currentQuestion = 1;
        $('#txt-score').val("1/5");
        $('#btn-start').prop('disabled', false);
        $('#txt-time').val("00:00");
        $('#answer-list').empty();
        $('#question').text('');
        calculateMarks();
        showAnswers();
        return;
    }
    currentQuestion++;
    $('#txt-score').val(currentQuestion + "/5");
    displayQuiz();
}

const calculateMarks = () => {
    let marks = 0;
    $.each(submitDataArray, function(index, record) {
        if (record != null) {
            let question = dataArray[index];
            let selectedAnswer = question.answers.find(x => x.id == record.answer);
            if (selectedAnswer && selectedAnswer.correctState) {
                marks++;
            }
        }
    });

    $('#txt-marks').val(marks + "/5");
    return marks;
}

const showAnswers = () => {
    $('#answer-list').append($('<h4>').text('Quiz Results:'));

    $.each(submitDataArray, function (index, record) {
        if (record == null) {
            $('#answer-list').append($('<li>').text('Question ' + (index + 1) + ': Skipped'));
        } else {
            let question = dataArray[index];
            let answer = question.answers.find(x => x.id == record.answer);
            let resultText = question.question + ' - Your answer: ' + answer.answer;

            if (answer.correctState) {
                resultText += ' ✓ (Correct)';
                $('#answer-list').append($('<li>').html(resultText).css('color', 'green'));
            } else {
                let correctAnswer = question.answers.find(x => x.correctState === true);
                resultText += ' ✗ (Incorrect. Correct answer: ' + correctAnswer.answer + ')';
                $('#answer-list').append($('<li>').html(resultText).css('color', 'red'));
            }
        }
    });
}