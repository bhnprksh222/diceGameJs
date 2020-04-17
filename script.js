///////////////////////////////////////
// Lecture: Hoisting

//functions
// calculateAge(1965);
// function calculateAge(year) {
//     console.log(2020 - year);
// }

// // retirement(1990);

// var retirement = function(year) {
//     console.log(65 - (2020 - year));
// }


// variables

// var age = 23;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);














///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();
//     console.log(a+b);

//     function second() {
//         var c = 'Hey!';
//         console.log(a + " " +  b + " " + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + d + b + c);
// }




///////////////////////////////////////
// Lecture: The this keyword

// this function always points to windows object

// calAge(1985);

// function calAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
};

john.calAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calAge = john.calAge;
mike.calAge();








