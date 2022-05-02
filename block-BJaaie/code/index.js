//Pseudoclassical pattern
function CreateAnimal (location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
    eat: function(){
    console.log (`I live in ${location} and I can eat`);
},
    changeLocation: function(newLocation){
        this.location= newLocation
        return this.location
},
    summary: function(){
    console.log(`I live in ${location} and I have ${numberOfLegs}`);
}
};

CreateAnimal.prototype.eat = function(){
    console.log (`I live in ${location} and I can eat`);
    };
    
Object.prototypeOf(CreateAnimal.prototype)



function CreateDog (location, numberOfLegs, name, color){
    CreateAnimal.call(this, location, numberOfLegs);
    obj.name = name;
    obj.color = color;
}

createDog.prototype = {
    bark: function(name){
        alert `I am ${this.name} and I can bark 🐶`
    },
    changeName: function(newName){
        this.name = newName
        return this.name
    },
    changeColor: function (newColor){
        this.color = newColor
        return this.color
    },
    summary: function (name, color){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
};
object.setPrototypeOf(CreateDog,prototype, CreateAnimal.prototype)


function CreateCat (location, numberOfLegs, name, colorOfEyes){
    CreateAnimal.call(this,location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
CreateCat.prototype = {
    meow: function(name){
        alert `I am ${this.name} and I can  meow 😹`;
    },
    changeName: function(newName){
        this.name = newName
        return this.name
        },
    changeColorOfEyes: function (newColor){
        this.color = newColor
        return this.color
        },
    summary: function (name, colorOfEyes){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`
        }
};
object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype)



// class pattern

class Animal {
    constructor (location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
    console.log (`I live in ${location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location= newLocation
        return this.location
    }
    summary(){
    console.log(`I live in ${location} and I have ${numberOfLegs}`);
    }
};

class Dog extends Animal {
    constructor (name, color){
        super(location, numberOfLegs)
        this.name = name;
        this.color = color;
    }
    bark(name){
        alert `I am ${this.name} and I can bark 🐶`
    }
    changeName(newName){
        this.name = newName
        return this.name
    }
    changeColor(newColor){
        this.color = newColor
        return this.color
    }
    summary(name, color){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
};


class Cat extends Animal{
    constructor (name, colorOfEyes){
    super(location, numberOfLegs)
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
    meow(){
        alert `I am ${this.name} and I can  meow 😹`;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`;
    }
};
