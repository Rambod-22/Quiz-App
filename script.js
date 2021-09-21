const quizQuestions = [{
    Question: "When was Rambod Zafarmoghaddam born?",
    A1: "2002",
    A2: "2003",
    A3: "2004",
    A4: "None of the above",
    correct: "A1"
},{
    Question: "When did Rambod Zafarmoghaddam come to Canada?",
    A1: "2009",
    A2: "2010",
    A3: "2011",
    A4: "None of the above",
    correct: "A2"
},
{
    Question: "Which Elementary school did Rambod Zafarmoghaddam go to?",
    A1: "Willowbrook",
    A2: "Thornhill",
    A3: "BakersField",
    A4: "None of the above",
    correct: "A1"
},
{
    Question: "Which High School did Rambod Zafarmoghaddam go to?",
    A1: "St.Robs",
    A2: "St.Renei",
    A3: "Earl Haig",
    A4: "None of the above",
    correct: "A1"
},
{
    Question: "When university does Rambod Zafarmoghaddam go to>",
    A1: "Western",
    A2: "Queens",
    A3: "Waterloo",
    A4: "Toronto",
    correct: "A3"
}
]

const quiz = document.querySelector("#class")
const question = document.querySelector("#question")
const answer_1 = document.querySelector("#Q_a")
const answer_2 = document.querySelector("#Q_b")
const answer_3 = document.querySelector("#Q_c")
const answer_4 = document.querySelector("#Q_d")

const submitButton = document.getElementById('submit')

let questionNumber = 0;
let grade = 0;


showQuiz();

let userAnswer =undefined;

function validateAnswer() {
    userAnswer =undefined;
    let answers = document.querySelectorAll(".answers")
    let correctAnswer = quizQuestions[questionNumber].correct
    answers.forEach(res => {
        if(res.checked){
            userAnswer = res.id;
        }
    })
    for(var i=0;i<answers.length;i++)
    answers[i].checked = false;
}



function showQuiz() {
    let quiz = quizQuestions[questionNumber];
question.innerText = quiz.Question;
 answer_1.innerText = quiz.A1;
 answer_2.innerText = quiz.A2;
 answer_3.innerText = quiz.A3;
 answer_4.innerText = quiz.A4;
 
}
submitButton.addEventListener("click", () => {
    if(questionNumber < 4){
        
    validateAnswer()
    if (userAnswer) {
        if(userAnswer === quizQuestions[questionNumber].correct){
            grade += 1;
        }
        questionNumber++ ;
   
    
    showQuiz();
    }
}
else {
    validateAnswer()
    if(userAnswer === quizQuestions[questionNumber].correct){
        grade += 1;
    }
 quiz.innerHTML = `<h2>You have answered ${grade} out of ${quizQuestions.length} questions correctly <button onClick="location.reload()">Refresh</button>`
}
})


