

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
}



function createAnimal (location, numberOfLegs){
    let obj = object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}
function createDog (name, color){
    let obj = createAnimal(location, numberOfLegs);
    object.setPrototype(obj, dogMethod);
    obj.name = name;
    obj.color = color;
    return obj;
}

function createCat (name, colorOfEyes){
    let obj = createAnimal(location, numberOfLegs);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
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
