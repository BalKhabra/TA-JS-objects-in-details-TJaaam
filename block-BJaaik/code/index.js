//inheritance

function Person (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

Person.prototype = {
    eat(){

    },
    sleep(){
        
    },
    walk(){
        
    }
}
Object.prototypeOf(Person.prototype)


function Player(name, age, gender, sportsName){
    Person.call(this, name, age, gender)
    obj.sportsName = sportsName;
}
Player.prototype = {
    play: function(){

    }
}

function Teacher (name, age, gender, instituteName){
    Person.call(this, name, age, gender)
    obj.instituteName = instituteName;
}
Teacher.prototype = {
    teach: function(){

    }
}

function Artist (name, age, gender, kind){
    Person.call(this, name, age, gender)
    obj.kind = kind;
}
Artist.prototype = {
    createArt: function(){

    }
}


function Cricketer (name, age, gender, sportsName, teamName){
    Person.call(this, name, age, gender)
    obj.teamName = teamName;
}
Cricketer.prototype = {
    playCricker(){

    }
}