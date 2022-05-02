

let animalmethods = {
    constructor (location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
},
    eat: function(){
    console.log `I live in ${location} and I can eat`;
},
    changeLocation: function(newLocation){
    return `${newLocation}`
},
    summary: function(){
    `I live in ${location} and I have ${numberOfLegs}`
}
}


let dog = {
    constructor (name, color){
    this.name = name;
    this.color = color
    },
    bark: function(name){
        alert `I am ${name} and I can bark 🐶`
    },
    changeName(newName){

    },
    changeColor(newcolor){

    },
    summary(color){
        return `I am ${dog} and I am of ${color} color. I can also bark`
    }
}