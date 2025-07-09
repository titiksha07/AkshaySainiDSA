export function setupCounter() {
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
  // function missingNumber(arr) {
  //   const n = arr.length;
  //   const sum = (n * (n + 1)) / 2;
  //   const sumExceptMissing = arr.reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);
  //   return sum - sumExceptMissing;
  // }
  // console.log(missingNumber([0, 1, 2, 4, 5, 3]));
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
}
