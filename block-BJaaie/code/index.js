//Pseudoclassical pattern
function CreateAnimal (location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

let animalMethods = {
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



function createDog (name, color){
    let obj = createAnimal(location, numberOfLegs);
    object.setPrototype(obj, dogMethod);
    obj.name = name;
    obj.color = color;
    return obj;
}

let dogMethod = {
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
object.setPrototypeOf(dogMethod, animalMethods)


function createCat (name, colorOfEyes){
    let obj = createAnimal(location, numberOfLegs);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
}
let catMethod = {
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
object.setPrototypeOf(catMethod, animalMethods)



// class pattern

class CreateAnimal {
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

class CreateDog {
    constructor (name, color){
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


class CreateCat {
    constructor (name, colorOfEyes){
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
    meow(name){
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
    // summary{name, colorOfEyes){
    //     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`;
    // }
};
