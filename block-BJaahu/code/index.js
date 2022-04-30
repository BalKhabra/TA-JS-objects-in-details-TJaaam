//prototype pattern

let questionMethods = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
        },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex]
        }
}

function createQuestion (title, options, correctAnswerIndex = 0){
    let question = Object.create(questionMethods.prototype);
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    return question;
}

//psuedoclassical pattern

function CreateQuestion (title, options, correctAnswerIndex = 0){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
        },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex]
        }
};
const firstQuestion = new CreateQuestion (
    "Where is the capital of Jordan",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     1
);

const secondQuestion = new CreateQuestion (
    "Where is the capital of Jamaica",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     2
);

//psuedoclassical pattern
class CreateQuestion {
    constructor(title, options, correctAnswerIndex = 0){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}}

CreateQuestion.prototype = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
        },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex]
        }
};
const firstQuestion = new CreateQuestion (
    "Where is the capital of Jordan",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     1
);

const secondQuestion = new CreateQuestion (
    "Where is the capital of Jamaica",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     2
);



// class pattern

class Question {
    constructor (title, options, correctAnswerIndex = 0){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
        }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
        }
}
 
const firstQuestion = new CreateQuestion (
    "Where is the capital of Jordan",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     1
);

const secondQuestion = new CreateQuestion (
    "Where is the capital of Jamaica",
    ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"],
     2
);