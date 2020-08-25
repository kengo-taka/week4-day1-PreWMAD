// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  var count1 = ( data.match( /a/g ) || [] ).length ;
  
  var count2 = ( data.match( /e/g ) || [] ).length ;

  var count3 = ( data.match( /i/g ) || [] ).length ;
  
  var count4 = ( data.match( /o/g ) || [] ).length ;
  
  var count5 = ( data.match( /u/g ) || [] ).length ;
  console.log(count1 + count2 + count3 + count4 + count5);
};

// console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
// console.log(vowelCounter("aeiou"));