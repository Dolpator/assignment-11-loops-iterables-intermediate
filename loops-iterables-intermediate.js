/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


 //INPUT : NUMBER
 // var sumOfArray = function(aStr){
 //    var sum = 0
 //   for (var i = 0; i < aStr.length; i += 1){
 //      sum = sum + aStr[i];
 //
 //  }
 //
 //
 //    //OUTPUT: sum of the umeric value input
 //    return sum;
 // }
 //
 //
 // console.asseert(sumOfArray([3, 4]) === 7);
 // console.asseert(sumOfArray([]) === 0);
 // console.asseert(sumOfArray([1, 2, 3, 4]) === 10);
 // console.asseert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

//INPUT:NUMBER
// var maxOfArray = function(aStr){
// var maxNum = 0;
//    for (var i = 0; i < aStr.length; i += 1){
//       if(typeof aStr[i] ==='number'){
//        if (aStr[i] > maxNum){
//            maxNum = aStr[i];}
//      } else {
//          maxNum = null;
//          return maxNum;
//      }
//    }
//
//    //OUTPUT: highest number of the array, or null
//    return maxNum;
// }
//
// console.assert(maxOfArray([2,4,3]) === 4)
// console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
// console.assert( maxOfArray([1,8,'bucklemyshoe', 7]) === null  )

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */


// INPUT: STRING
// var isVowel = function(symbol){
//
// var vowels=['a','e','i','o','u'];
// var letterVowels = false;
//     for(var i = 0; i < vowels.length; i++){
//      if(symbol.toString().toLowerCase() === vowels[i]){
//            letterVowels = true;
//
//         }
//
//     }
//         //OUTPUT: STRING
//         return letterVowels;
//     }
//
//
// console.assert(isVowel(0) === false);
// console.assert(isVowel("B") === false);
// console.assert(isVowel("b") === false);
// console.assert(isVowel("a") === true);
// console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

//INPUT:STRING

// var reverse = function(aStr){
//    var revStr = "";
//    for(var i = aStr.length -1; i >= 0; i--){
//             revStr += aStr[i]
//
//    }
//
//
//    //OUTPUT: REVERSE OF THE INPUT STRING
//             return revStr;
// }
//
// console.assert(reverse("books") === "skoob")
// console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")
/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */

//INPUT: Number
var fizzbuzz = function(aStr){
   var fizOut ="";
   for (var i = 1; i <= aStr; i ++){
      if(i % 3 !== 0 && i % 5 !== 0){
         fizOut += ".";
      }else if( i % 3 === 0 && i % 5 !== 0){
         fizOut += "fizz";
      }else if(i % 5 === 0 && i % 3 !== 0){
         fizOut += "buzz";
      }else if(i % 3 === 0 && i % 5 ===0){
         fizOut += "FizZBuzZ";
      }else{
         fizOut += "..";
      }
   }

   //OUTPUT:STRING
   return fizOut;
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


 var _remApos = function(str){
 var apostStr = str.split(" ");
 var rmApost = '';

 		for (var i = 0; i < apostStr.length; i++){
 			  if (apostStr[i] === "'"){
 				rmApost = rmApost + apostStr[i]
            }
          }
         // OUTPUT: String
    		     return rmApost;
 }


 var findLongestWord = function(sentence){
 var aStr = sentence.split(" ");
 var myLongestWord = " ";
    for(var i = 0; i < aStr.length; i++){
        		  if(myLongestWord < aStr[i]){
       		   	 myLongestWord = aStr[i,1];
         }else if(myLongestWord = aStr[i]){
      		     myLongestWord = myLongestWord + _remApos(aStr[i]);

      }
    }

                  return myLongestWord;


 }
console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
 var GCD = function(a, b){
 	for(var i = 1; i < 50; i++){
         if (a == 1 || b == 1){
        	return 1;
         }else if (a > b){
          	return  (a, b % a)
         }else{
             return (b, a % b);
         }
    }
 }

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
