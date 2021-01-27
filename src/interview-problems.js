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
