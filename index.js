//array methods
var alphabets=["a","b","c","d","e"];
alphabets.forEach(function1);
function function1(item,index)
{
  console.log(item);
}
//foreach calls function once after access of each element in array
//output =a b c d e 
var arr1=[2,3,4,5]
var arr2=arr1.map(function2);
function function2(item,index)
{
 return item*2
}
console.log(arr2)
//creates array with the resulting array
//output=4,6,8,10



