function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson +" and I'm " + age);
}


sayHello("eom", 10);
sayHello("jeng", 20);
sayHello("sig", 30);


function plus(a, b) {
    console.log(a + b);
}

plus(2, 5);

function divide(a, b) {
    console.log(a / b);
}

divide(10, 2);

const player = {
    name: "nico",
    sayHi: function(otherPersonName) {
        console.log("Hi! " + otherPersonName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHi("chong");