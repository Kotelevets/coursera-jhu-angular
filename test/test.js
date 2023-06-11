'use strict';

const foodListString = ' asdfg , asdf, asdf ,asdf,asdfasdf,     ,, asdf,asdf , asdfasdfasd, ,';
console.log(foodListString);

let foodListArray = foodListString.split(',');
console.log(foodListArray);

foodListArray = foodListArray.map(item => item.trim());
foodListArray = foodListArray.filter(item => item.length !== 0);
console.log(foodListArray);



//arr.splice(1, 1);