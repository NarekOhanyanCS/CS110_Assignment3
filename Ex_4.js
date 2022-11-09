function reverseArray (arr) {
    let newArr = [];
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        newArr[i] = arr[j];
    }   
    return newArr;
}
console.log(reverseArray([1, 5, 4, 18, 3, 0]));
