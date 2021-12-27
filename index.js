console.log("Hi, 😎");
console.log ("sum of 2+1 is",2+1);

var t3 = "abc" -3; //minus will resultin NaN
console.log(t3, typeof t3);
console.log(Number.isNaN(t3), Number.isNaN(4));

//looping through array
console.log(!(t3 === t3));

var marks = [10, 20, 30, 40, 50];
for (var i=0; i<marks.length; i++) {
console.log("i is", i, "value is", marks[i]);
}

//for of
console.log("for of loop")
for(var mark of marks) {
    console.log("mark is", mark);
}

//for in
console.log("for in loop")
for (var index in marks) {
    console.log("index is", index, "mark is", marks[index]);
}

var marks = [40, 9, 80, 0, 30];
var max = marks[0]; //we can give -Infinity

for(var mark of marks){
    if (mark > max){
        max = mark; 
    }
}
console.log(max);

function avg(marks) {
    var sum = 0;
    for (var mark of marks){
        sum = sum + mark;
    }
    var noofsubjects = marks.length;
    var average = sum / noofsubjects;
    return average;
}
console.log(
"average is ", avg ([40, 9, 80, 0, 30]),
"average is ", avg ([40, 12, 80, 12, 30]),
"average is ", avg ([40, 1, 300]));

//Hoisting is a myth in js
console.log("before decl", a);
var a=10;
console.log("after decl",a)


//Hoisting is a myth in js
console.log("let - before decl", b);
let b=11;
console.log("let - after decl", b)


//Hoisting is a myth in js
console.log("const - before decl",c);
const  c=12;
console.log("const - after decl", c)


