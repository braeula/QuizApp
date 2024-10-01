let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "In welchem Jahr wurde JavaScript veröffentlicht?",
        "answer_1": "1995",
        "answer_2": "2005",
        "answer_3": "2015",
        "answer_4": "1985",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Cascading Simple Sheets",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Colorful Style Sheets",
        "answer_4": "Creative Style Sheets",
        "right_answer": 2
    },
    {
        "question": "Wer hat das Internetprotokoll TCP/IP entwickelt?",
        "answer_1": "Bill Gates",
        "answer_2": "Steve Jobs",
        "answer_3": "Vinton Cerf und Robert Kahn",
        "answer_4": "Elon Musk",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Tag wird verwendet, um ein Bild einzubinden?",
        "answer_1": "<img>",
        "answer_2": "<picture>",
        "answer_3": "<src>",
        "answer_4": "<image>",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet HTTP?",
        "answer_1": "HyperText Transfer Protocol",
        "answer_2": "Hyperlink Transfer Protocol",
        "answer_3": "HighText Transfer Protocol",
        "answer_4": "HyperText Test Protocol",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('sum-question').innerHTML = questions.length;
    document.getElementById('current-question').innerHTML = currentQuestion + 1;

    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question.question + "?"
    document.getElementById('ans_1').innerText = question.answer_1;
    document.getElementById('ans_2').innerText = question.answer_2;
    document.getElementById('ans_3').innerText = question.answer_3;
    document.getElementById('ans_4').innerText = question.answer_4;

}

function answer(solution) {
    if (solution == questions[currentQuestion].right_answer) {
        document.getElementById(`ans_${solution}`).parentElement.classList.add('bg-success');
    } else {
        document.getElementById(`ans_${solution}`).parentElement.classList.add('bg-danger');
        document.getElementById(`ans_${questions[currentQuestion].right_answer}`).parentElement.classList.add('bg-success');
    }
    document.getElementById('nextbutton').disabled = false;
}
