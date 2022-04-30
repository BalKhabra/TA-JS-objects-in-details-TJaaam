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