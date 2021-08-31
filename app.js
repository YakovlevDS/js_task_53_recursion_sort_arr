// ? Task:Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]


// Solution 1
Array.prototype.merge_Sort = function () {
  if (this.length <= 1) 
  {
    return this;
  }

  let half = parseInt(this.length / 2);
  let left = this.slice(0, half).merge_Sort();
  let right = this.slice(half,     this.length).merge_Sort();
  let merge = function (left, right) 
  {
  let arr = [];
  while (left.length > 0 && right.length > 0)
  {
    arr.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arr.concat(left).concat(right);
  };

  return merge(left, right);
};

let a = [34,7,23,32,5,62];
console.log(a.merge_Sort());
// Solution 2
console.log(a.sort((a, b) => a - b))

// ! Explanation: 
