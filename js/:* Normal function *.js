/* Normal function */

function some_name() {
  console.log("Hello, world!");
}

/* Invoking a normal function */

function some_name() {
  console.log("Hello, world!");
}

some_name();

/* Anonymous function */

(function() {
  console.log("Hello, world!");
})

/* Invoking an anonymous function */

var test = (function() {
  console.log("Hello, world!");
})

test();

/* 'Self invoking' anonymous function */

(function() { 
  console.log("Hello, world!");	
})()