function createUser(name, id,  noOfProjects){
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects
        this.getProjects = function(){
            return this.noOfProjects
        };
        this.changeName = function(newName){
            let prevName = user.name
            this.name = newName;
            return prevname;
        };
        this.incrementProject = function(){
            this.noOfProjects += 1;
            return this.noOfProjects;
        };
        this.decrementProject = function(){
            this.noOfProjects -= 1;
            return this.noOfProjects;
        };
        return user;
}

let sam = createUser ("sam", 123, 23)
let cam = createUser ("cam", 321, 32)
console.log(sam.name);
console.log(aman.id);


//prototypal patterns
let userMetods = {
    getProjects: function(){
            return this.noOfProjects
        },
    changeName: function(newName){
            let prevName = user.name
            this.name = newName;
            return prevname;
        },
    incrementProject: function(){
            this.noOfProjects += 1;
            return this.noOfProjects;
        },
    decrementProject: function(){
            this.noOfProjects -= 1;
            return this.noOfProjects;
            }
}

function createUser (name, id,  noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects
    return this;
}
//psuedoclassical pattern

function CreateUser (name, id,  noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects
}

CreateUser.prototype = {
    getProjects: function(){
        return this.noOfProjects
    },
    changeName: function(newName){
        let prevName = user.name
        this.name = newName;
        return prevname;
    },
    incrementProject: function(){
        this.noOfProjects += 1;
        return this.noOfProjects;
    },
    decrementProject: function(){
        this.noOfProjects -= 1;
        return this.noOfProjects;
        }
}

let sam = new CreateUser ("sam", 123, 23)
let cam = new CreateUser ("cam", 321, 32)
console.log(sam.name);
console.log(aman.id);

// class pattern

class CreateUser {
    constructor (name, id,  noOfProjects){
        return this.noOfProjects
    }
    getProjects(){
        this.score = this.score + value;
        return this.score;
    }
    changeName(newName){
        let prevName = user.name
        this.name = newName;
        return prevname;
    }
    incrementProject(){
        this.noOfProjects += 1;
        return this.noOfProjects;
    }
    decrementProject(){
        this.noOfProjects -= 1;
        return this.noOfProjects;
        }

}


let sam = new CreateUser ("sam", 123, 23)
let cam = new CreateUser ("cam", 321, 32)