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
