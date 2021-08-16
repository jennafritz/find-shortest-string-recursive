function findShortestStringRecursive(arr) {
  // type your code here
  if(arr.length === 1){
    return arr[0]
  }

  if(arr[0].length <= arr[1].length){
    arr.splice(1, 1)
    return findShortestStringRecursive(arr)
  } else if(arr[0].length >= arr[1].length){
    arr.splice(0, 1)
    return findShortestStringRecursive(arr)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("this");
  console.log("=>", findShortestStringRecursive(['really', 'hoping', 'this', 'works']));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("my");
  console.log("=>", findShortestStringRecursive(['my', 'fingers', 'are', 'crossed']));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
  // if the array only has one element it's automatically the shortest, so return it
  // otherwise, if element 0 is shorter than element 1, delete element 1 from array
    // and rerun the function
  // if element 1 is shorter than element 0, delete element 0 from array
    // and rerun the function
  // repeat until only one element is left, then return it

// And a written explanation of your solution
// if there is only one element in the array it has to be the shortest, so return it
// otherwise, compare the first two elements of the array and delete the longer one
// continue to compare the first two elements until the array only has one left
// then return that element
