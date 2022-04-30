let userMethods = {
    increaseScore: function(value = 1){
        this.score = this.score + value;
        return this.score;
        },
    decreaseScore: function(value = 1){
        this.score = this.score - value;
        return this.score;
        },
    changeName: function(name){
        this.name = name;
        return this.name;
        }
}


let user1 = new createUser("sam", 0);
let user2 = new createUser("cam");

function createQuestion (title, options, correctAnswerIndex = 0){
    let question = Object.create(createQuestion.prototype);
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    return question;
}


CreateQuestion.prototype = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
        },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex]
        }
};



let title = "Where is the capital of Jordan";
let options = ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"];
let correctAnswerIndex = 1;

let title = "Where is the capital of Jamaica";
let options = ["Tashkent', 'Amaan', 'Kuwait City', 'Nairobi"];
let correctAnswerIndex = 2;

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
 