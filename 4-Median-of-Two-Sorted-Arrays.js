"use strict";
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var newArr = nums1.concat(nums2).sort(function (a, b) {
        return a - b;
    });
    var i = newArr.length / 2;
    if (newArr.length % 2 === 0) {
        return (newArr[i - 1] + newArr[i]) / 2;
    }
    else {
        return newArr[Math.floor(i)];
    }
};
