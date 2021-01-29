/* region start
return reversed string */
function reverseString1(str) {
    const reversedString = [];
    const strLength = str.length - 1;
    for (let i = strLength; i >= 0; i--) {
        reversedString.push(str[i]);
    }
    return reversedString.join('');
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

const reverseString3 = str => [...str].reverse().join('');
/* region ends
 for reverse string */

/* region start
for merge sorted array */
function mergeSortedArray1(array1, array2) {
    const mergedArray = [...array1, ...array2];
    for (let i = 0; i < mergedArray.length; i++) {
        for (let j = 0; j < mergedArray.length - 1 - i; j++) {
            if (mergedArray[j] > mergedArray[j + 1])
                [mergedArray[j], mergedArray[j + 1]] = [mergedArray[j + 1], mergedArray[j]];
        }
    }
    return mergedArray;
}

function mergeSortedArray2(array1, array2) {
    const mergedArray = [];
    let arr1Item = array1[0];
    let arr2Item = array2[0];
    let i = 1;
    let j = 1;
    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = array1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}
/* region end
for merge sorted array */

/* region start
return indices sum of two number  */
function twoSum1(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length; j++) {
            if ((array[i] + array[j]) == target)
                return [i, j];
        }
    }
}

function twoSum2(array, target) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(array[i], i);
        }

    }
}
/* region end
return indices sum of two number  */

/* region start
move all zeros in array to end  */
function moveZeros1(array) {
    const tempArray = [];
    let zerosCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            zerosCount++
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
            tempArray.push(array[i]);
        }
    }
    while (zerosCount--) {
        tempArray.push(0);
    }
    array = tempArray;
    return array;
}

function moveZeros2(array) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
            array[lastNonZeroFoundAt++] = array[i];
        }
    }
    for (let i = lastNonZeroFoundAt; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
/* region end
move all zeros in array to end  */

/* region start
return true if array contains duplicates  */
function containsDuplicate(array) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            return true
        } else {
            map.set(array[i], i)
        }
    }
    return false;
}
/* region end
return true if array contains duplicates  */

/* region start
return first reccuring number in an array  */
function firstReccuringNumber(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1 + i; j < array.length; j++) {
            if (array[i] == array[j]) {
                return array[i];
            }
        }
    }
    return undefined;
}

function firstReccuringNumber2(array) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            return array[i];
        } else {
            map.set(array[i], i);
        }
    }
    return undefined;
}
/* region end
return first reccuring number in an array  */


console.log(firstReccuringNumber2([0, 3, 5, 6, 2, 3, 4]));
