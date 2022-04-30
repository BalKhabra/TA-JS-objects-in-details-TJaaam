function createUser(name, id,  noOfProperties){
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProperties = noOfProperties
        this.getProjects = function(){
            this.score = this.score + value;
            return this.score;
        };
        this.changeName = function(newName){
            this.name = name;
            return this.name;
        };
        this.incrementProject = function(){
            this.noOfProperties = this.noOfProperties + value;
            return this.noOfPropertiescore;
        }
        this.decrementProject = function(){
            this.noOfProperties = this.noOfProperties - value;
            return this.noOfPropertiescore;
            }

}


//prototypal patterns
let userMetods = {
    getProjects: function(){
            this.score = this.score + value;
            return this.score;
        },
    changeName: function(newName){
            this.name = newName;
            return this.name;
        },
    incrementProject: function(){
            this.noOfProperties = this.noOfProperties + value;
            return this.noOfPropertiescore;
        },
    decrementProject: function(){
            this.noOfProperties = this.noOfProperties - value;
            return this.noOfPropertiescore;
            }
}

function createUser (name, id,  noOfProperties){
    let user = Object.create(userMethods.prototype);
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProperties = noOfProperties
    return user;
}
//psuedoclassical pattern

let questionMethods = {
    getProjects: function(){
            this.score = this.score + value;
            return this.score;
        },
    changeName: function(newName){
            this.name = newName;
            return this.name;
        },
    incrementProject: function(){
            this.noOfProperties = this.noOfProperties + value;
            return this.noOfPropertiescore;
        },
    decrementProject: function(){
            this.noOfProperties = this.noOfProperties - value;
            return this.noOfPropertiescore;
            }
}

// class pattern

class User {
    constructor (name, id,  noOfProperties){
        this.name = name;
        this.id = id;
        this.noOfProperties = noOfProperties
    }
    getProjects(){
        this.score = this.score + value;
        return this.score;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    incrementProject(){
        this.noOfProperties = this.noOfProperties + value;
        return this.noOfPropertiescore;
    }
    decrementProject(){
        this.noOfProperties = this.noOfProperties - value;
        return this.noOfPropertiescore;
        }

}


class User {
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
