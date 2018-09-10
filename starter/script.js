// Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1997,
  jab: 'teacher'
};
console.log(john);

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

var john = new Person('john', 1997, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1902, 'retired');

john.calculateAge();
mark.calculateAge();
*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1996},
  job: {value: 'Designer'}
});
*/
/*
// Obects
var obj1 = {
  neame: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 39;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age =27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon',
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco'
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

// Passing function as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var res = [];
  for (var i=0; i<arr.length; i++) {
    //console.log(arr[i]);
    res.push(fn(arr[i]));
  }
  //console.log(res);
  return res;
}

function calcAge (year) {
  return (2018 - year);
}

function isFullAge(age) {
  return age >= 18;
}
console.log(arrayCalc(years, calcAge));
console.log(arrayCalc(arrayCalc(years, calcAge), isFullAge));
*/

// Function returning Functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is ? ');
    }
  }
  else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  }
  else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do ? ');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

interviewQuestion('designer')('mark')
*/
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
*/
/*
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
console.log(score);
*/

// Closures
/*
function retirement(retirementAge) {
  var str = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + str);
  }
}

var retirementUS = retirement(66)(1996);
*/
/////////////////////////////////////////
// Bind, call and apply
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen ! I\'m ' +
                  this.name + ' I\'m a ' + this.job);

    }
    else if (style === 'friendly') {
      console.log('Whats up' + ' I\'m ' + this.name + ' in the ' + timeOfDay);
    }
  }
};
*/
/*
john.presentation('formal', 'morning');

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
*/
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
var gameOn = true;
var Question = function(question, answers, correctAns) {
  this.question = question;
  this.answers = answers;
  this.correctAns = correctAns;
};

Question.prototype.displayQuestion = function() {
  console.log(this.question);
};

Question.prototype.displayAnswers = function() {
  for (var i=0; i<this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

Question.prototype.checkAnwer = function(input) {
    if (input == this.correctAns) {
      console.log("Congrats ! ");
      gameOn = false;
    }
    else {
      console.log("Wrong answer !");
    }
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                      ['Yes', 'No'],
                      0);

var q2 = new Question('What is the name of this course\'s teacher?',
                      ['John', 'Micheal', 'Jonas'],
                      2);

var q3 = new Question('What does best describe coding?',
                      ['Boring', 'Hard', 'Fun', 'Tediuos'],
                      2);
var questions = [q1, q2, q3];
//var q = questions[0];
//console.log(q);

//////////////
while (gameOn == true) {
  var n = Math.floor(Math.random() * questions.length);
  console.log(n);
  questions[n].displayQuestion();
  questions[n].displayAnswers();
  input = prompt("Please answer the above question ?");
  questions[n].checkAnwer(input);
}
