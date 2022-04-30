//create function to copy/paste reptitive task
function createUser(name, score = 0){
    let user = {};
    user.name = name;
    user.score = score;
    user.increaseScore = function(value = 1){
        this.score = this.score + value;
        return this.score;
        };
        this.decreaseScore = function(value = 1){
        this.score = this.score - value;
        return this.score;
        };
        this.changeName = function(name){
            this.name = name;
            return this.name;
        }
}

let user1 = createUser("sam", 0);
let user2 = createUser("cam");


let title = "Where is the capital of Jordan";
let options = ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"];
let correctAnswerIndex = 1;

let title = "Where is the capital of Jamaica";
let options = ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"];
let correctAnswerIndex = 2;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

let question = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return question.options[question.correctAnswerIndex]
    },
};


let question2 = {
    title: 'Where is the capital of Jamaica',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 2,
    isAnswerCorrect(index){
        return index === question2.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return question2.options[question2.correctAnswerIndex]
    },
};



function createQuestion (title, options, correctAnswerIndex = 0){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index === this.correctAnswerIndex;
        };
    question.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex]
    }
    return question;
}

const firstQuestion = createQuestion (
    "Where is the capital of Jordan",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     1
);

const secondQuestion = createQuestion (
    "Where is the capital of Jamaica",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     2
);
