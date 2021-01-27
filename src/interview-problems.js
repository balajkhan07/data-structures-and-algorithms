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
