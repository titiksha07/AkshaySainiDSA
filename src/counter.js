export function setupCounter() {

  /*Merge Arrays */
  // const nums1 = [1, 2, 3, 0, 0, 0];
  // const nums2 = [2, 5, 6];
  // function mergeArr(nums1, m, nums2, n) {
  //   let p1 = m - 1;
  //   let p2 = n - 1;
  //   for (let i = m + n - 1; i >= 0; i--) {
  //     if (p2 < 0) {
  //       break;
  //     }
  //     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
  //       nums1[i] = nums1[p1];
  //       p1--;
  //     } else {
  //       nums1[i] = nums2[p2];
  //       p2--;
  //     }
  //   }
  //   return nums1;
  // }
  // console.log(mergeArr(nums1, 3, nums2, 3));

  /*Move zeroes */
  // function moveZeroes(arr) {
  //   let x = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== 0) {
  //       arr[x] = arr[i];
  //       x = x + 1;
  //     }
  //   }
  //   for (let i = x; i < arr.length; i++) {
  //     arr[i] = 0;
  //   }
  //   return arr;
  // }
  // console.log(moveZeroes([0, 1, 2, 0, 0, 3, 4, 0]));


  /* Max Consecutive one*/
  // function maxConsecutiveOnes(arr) {
  //   let count = 0;
  //   let maxCount = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 1) {
  //       count++;
  //     } else {
  //       maxCount = Math.max(maxCount, count);
  //       count = 0;
  //     }
  //   }
  //   return Math.max(maxCount, count);
  // }
  // console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 9, 1, 1]));

 /* Missing number */
  // function missingNumber(arr) {
  //   const n = arr.length;
  //   const sum = (n * (n + 1)) / 2;
  //   const sumExceptMissing = arr.reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);
  //   return sum - sumExceptMissing;
  // }
  // console.log(missingNumber([0, 1, 2, 4, 5, 3]));

 /* Single number */
  // function singleNumber(arr) {
  //   let hashMap = {};
  //   for (let i = 0; i < arr.length; i++) {
  //     const char = arr[i];
  //     if (hashMap[char]) {
  //       hashMap[char].count += 1;
  //     } else {
  //       hashMap[char] = { count: 1 };
  //     }
  //   }
  //   let missing = undefined;
  //   for (let i = 0; i < arr.length; i++) {
  //     const char = arr[i];
  //     if (hashMap[char].count === 1) {
  //       missing = char;
  //       break;
  //     }
  //   }
  //   return missing;
  // }
  // console.log(singleNumber([1, 1, 2, 2, 3, 4, 4]));

/* Recursions */

  // function sumFirstn(n) {
  //   if(n===0) {
  //     return 0;
  //   }
  //   return n + sumFirstn(n-1);
  // }
  // console.log( sumFirstn(10))

  // const arr = [1, 2, 3, 4];
  // function oddSumArr(n) {
  //   const isOdd = (arr[n]%2!==0);
  //   if(n==0) {
  //     return isOdd ? arr[n] :0;
  //   }
  //   return (isOdd? arr[n] : 0) + oddSumArr(n-1)
  // }
  // console.log(oddSumArr(arr.length - 1));
  // function factorial(n) {
  //   if(n==0) {
  //     return 1;
  //   }
  //   return n * factorial(n-1);
  // }
  // console.log(factorial(5))


  /*Selection sort */
//   const arr = [7, 1, 3, 2, 5, 6, 9, 8, 19, 12, 0];

// function selection(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
//     return
// }
// console.log(selection(arr));
 

/*Insertion Sort */
// const arr = [7, 1, 3, 2, 5, 6, 9, 8, 19, 12, 0];
// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     let prev = i-1;
//     while(arr[prev] > curr && prev >=0) {
//       arr[prev+1] = arr[prev];
//       prev--;
//     }
//     arr[prev+1] = curr;
//   }
//   return arr;
// }
// console.log(insertion(arr));

/*Merge Sort */

// const arr = [7, 1, 3, 2, 5, 6, 9, 8, 19, 12, 0];

// function mergeSort(arr) {
//   if(arr.length <=1) {
//     return arr;
//   }

//   let  mid = Math.floor(arr.length/2);
//   let left = mergeSort(arr.slice(0,mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left,right);
// }

// function merge(left,right) {
//   let res = [];
//   let i =0; let j=0;
//   while(i <left.length && j <right.length) {
//     if(left[i] < right[j]) {
//       res.push(left[i]);
//       i++;
//     } else {
//       res.push(right[j]) ;
//         j++;
//       }
//     }
//   return [...res, ...left.slice(i), ...right.slice(j)];
// }
// console.log(mergeSort(arr));


/*LinkedList Basics 


function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/** 
* @param {number} index
* @return {number}
*/
// MyLinkedList.prototype.get = function(index) {
//   if(index < 0 || index >= this.size) {
//       return -1;
//   }
//   let curr = this.head;
//   for(let i =0; i<index; i++) {
//       curr = curr.next;
//   }
//   return curr.val;
// };

// /** 
// * @param {number} val
// * @return {void}
// */
// MyLinkedList.prototype.addAtHead = function(val) {
//   let newNode = new Node(val);
//   newNode.next = this.head;
//   this.head = newNode;
//   this.size++
// };

// /** 
// * @param {number} val
// * @return {void}
// */
// MyLinkedList.prototype.addAtTail = function(val) {
//   let newNode = new Node(val);
//   if(this.head === null) {
//      this.head = newNode;
//   } else {
//   let current = this.head;
//   while(current.next != null) {
//       current = current.next;
//   }
//   current.next = newNode;
// }
// this.size++;

// };

// /** 
// * @param {number} index 
// * @param {number} val
// * @return {void}
// */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//   let newNode = new Node(val);
//   let current = this.head;
//   if(index === 0) {
//       this.addAtHead(val);
//       return;
//   } else if(index === this.size) {
//       this.addAtTail(val);
//       return;
//   } else  if(index < 0 || index >this.size) {
//   return;
//   } else {
//   for(let i =0; i<index-1; i++) {
//       current = current.next;
//   }
//   newNode.next = current.next;
//   current.next = newNode;
//   this.size++;
//   }
// };

// /** 
// * @param {number} index
// * @return {void}
// */
// MyLinkedList.prototype.deleteAtIndex = function(index) { 
// if(index < 0 || index >=this.size) {
//   return;
//   } else if(index === 0) {
//       this.head = this.head.next;
//   } else {
//         let curr = this.head;
//       for(let i=0 ; i< index-1; i++){
//           curr = curr.next;
//       }
//       curr.next = curr.next.next;
    
//   }
//     this.size--;
// };


/*Reverese Linked List */

// var reverseList = function(head) {
//   let prev = null;
//   let curr = head;
//   let temp;
//   while(curr) {
//       temp = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = temp;
//   }
//   head = prev;
//   return head;
// };

/*Linked list cycle*/

// var hasCycle = function(head) {
//   let curr = head;
//   let set = new Set();
//   while(curr) {
//       set.add(curr);
//       curr = curr.next;
//       if(set.has(curr)) {
//       return true;
//   }
//   }
  
//   return false;
// };

/* Palindrome in Linked List*/

// var isPalindrome = function(head) {
//   //find middle
//   let slow = head;
//   let fast = head;
//   while(fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }
 
//  //reverse second list

//  let prev = null;
//  let curr = slow;
//  while(curr) {
//   let temp = curr.next;
//   curr.next = prev;
//   prev = curr;
//   curr = temp;
//  }

//  let firstList = head;
//  let secondList = prev;
//  while(secondList) {
//   if(firstList.val != secondList.val) {
//       return false;
//   }
//   firstList = firstList.next;
//   secondList = secondList.next;
//  }
//  return true;
  
// };
}

