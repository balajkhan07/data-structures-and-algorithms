/* 

Write a javascript program to evaluate a prefix notation string.

Input operators + * - /. Numbers are all positive integers only. Separated by a space character.

For any such string, the program should return one number which is the result of the calculation.

The program needs to yield the correct result for valid inputs only, so error handling can be omitted.

This should be your own original code, not copied from a Google search result.

Send me a link to your code in a private gist.


Example:

"9" => 9

"+ 1 2" => 3 This is (1 + 2)

"+ + 1 2 30" => 33 This is ((1+2)+30)

"+ + 12 16 * 10 4" => 68 This is ((12+16)+(10*4)) 

*/


function prefixNotationString(str) {
    let splittedString = str.split(' ').map(v => isNaN(v) ? v : Number(v));
    console.log(splittedString);
}

prefixNotationString("+ + 12 16 * 10 4");