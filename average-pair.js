// add whatever parameters you deem necessary & write docstring


/**
 * take in a sorted num array and a target
 * return true if a pair of numbers in the array equals the target
 */
function averagePair(nums,targetAvg) {
  if (nums.length === 0) return false;

    for (let left = 0;left < nums.length-2;left++) {

      let right = nums.length-1;

      // ensuring right has not reached left
      while (left < right) {

          // if no match, move right to the left
          if (((nums[left] + nums[right])/2) != targetAvg) {
              right--;
          }

          // if match found, return
          if (((nums[left] + nums[right])/2) === targetAvg) {
            return true;
          }

    }

    }
    // if no match was found, return false
    return false;
}
