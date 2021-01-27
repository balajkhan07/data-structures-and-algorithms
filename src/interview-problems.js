let intro = 'My name is Khan';

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

console.log(reverseString1(intro));
console.log(reverseString2(intro));
console.log(reverseString3(intro));

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

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

console.log(mergeSortedArray1(arr1, arr2));
console.log(mergeSortedArray2(arr1, arr2));