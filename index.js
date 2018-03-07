//forEach
Array.prototype.forEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
};

//map
Array.prototype.map = function(projectionFunc) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(projectionFunc(this[i]));
  }
  return newArr;
};

//filter

Array.prototype.filter = function(predicateFunction) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (predicateFunction(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

//concatAll
// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

Array.prototype.filter = function() {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    //check if this is array if it is loop throught it and add the elements to the array
    // if (this[i]) {
    //   for (let j = 0; j < this.length; j++) {}
    // }
  }
};
