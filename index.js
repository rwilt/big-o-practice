// *** ---- BINARY SEARCH CHALLENGE ---- ***  \\ 

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var counter =0 ;

    while (min <= max){
   guess = Math.floor((max + min) / 2);
   //print each guess
   println(guess);
   counter++ ;
   if (array[guess] === targetValue) {println(counter); return guess;}
    else if (array[guess] < targetValue) { min = guess + 1;} 
    else {max = guess -1;}
    }
return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 79), 21);
Program.assertEqual(doSearch(primes, 83), 22);


// *** ---- IMPLEMENTING SWAP ---- ***  \\ 


var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
     array[firstIndex] = array[secondIndex];
     //[9,9,4]
     array[secondIndex] = temp;
     //[9,9,4] 
 };
 
 var testArray = [7, 9, 4];
 swap(testArray, 0, 1);
 
 println(testArray);
 
 Program.assertEqual(testArray, [9, 7, 4]);
 
 swap(testArray, 2, 0 );
 Program.assertEqual(testArray, [4,7,9]);
 swap(testArray, 1,0 );
 Program.assertEqual(testArray, [7,4,9]);
 
 
 // **** ---- FIND INDEX OF MIN VAL IN SUB ARRAY ----- *** \\
 var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1; i < array.length; i++){
        //if the value of the number at index i is less than the min value, reset the minimum index to i, and the minimum value to array[i]
        if (array[i] < minValue){
         minIndex =  i;
         minValue = array[i];
            
        }
        
    }
    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);


// ---- PUTTING IT ALL TOGETHER (SWAP, FIND MIN VALUE SELECTION SORT) --- \\ 

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var temp;
    for (var i = 0; i < array.length; i++){
     temp = indexOfMinimum(array, i);
        swap(array, i, temp);
    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


var arr = [22,3,4,23,45,6,4,2];
selectionSort(arr);
Program.assertEqual(arr, [2,3,4,4,6,22,23,45]);