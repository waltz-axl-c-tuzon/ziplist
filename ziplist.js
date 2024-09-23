"use strict";
const zipList = (arr1, arr2) => {
    const retVal = [];
    if (arr1.length !== arr2.length) {
        throw new Error('Unequal array lengths, error thrown.');
    }
    for (let i = 0; i < arr1.length; i += 1) {
        retVal.push(arr1[i], arr2[i]);
    }
    return retVal;
};
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
const zipListTheFunctionalWay = (arr1, arr2) => {
    const retVal = [];
    if (arr1.length !== arr2.length) {
        throw new Error('Unequal array lengths, error thrown.');
    }
    arr1.forEach((elm, index) => retVal.push(elm, arr2[index]));
    return retVal;
};
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
