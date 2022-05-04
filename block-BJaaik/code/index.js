//inheritance
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} can eat!`);
    }
    sleep(){
        console.log(`${this.name} can sleep!`);
    }
    walk(){
        console.log(`${this.name} can walk!`);
    }
};


class Player{
    constructor (name, age, gender, sportsName){
        super(name, age, gender);
        this.sportsName = sportsName;
}
    play(){
        console.log(`${this.name} can play!`);
    }
};



class Teacher {
    constructor(name, age, gender, instituteName){
    super(name, age, gender);
    this.instituteName = instituteName;
}
    teach(){
        console.log(`${this.name} can teach!`);
    }
};


class Artist {
    constructor (name, age, gender, kind){
    super(name, age, gender)
    this.kind = kind;
}
    createArt(){
        console.log(`${this.name} can create art like ${this.kind}!`);
    }
}


class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName){
    super(name, age, gender)
    obj.teamName = teamName;
}
    playCricker(){
        console.log(`${this.teamName} can play cricket`);
    }
}




