function are_arrays_equal(arr1, arr2) {
    if (arr1.length == arr2.length) {

        var is_equal = true;

        for (var i = 0; i < arr1.length; i += 1) {
            if (arr1[i] != arr2[i] || typeof (arr1[i]) != typeof (arr2[i])) {
                is_equal = false
            }
        }
        return is_equal;
    } else {
        return false;
    }
}



var arr1 = new Array(9, 8, 7, 2, 20);
var arr2 = new Array(9, 8, 7, 2, 20);
console.log(are_arrays_equal(arr1, arr2));
arr1.push(1);
console.log(are_arrays_equal(arr1, arr2));
arr1.pop();
console.log(are_arrays_equal(arr1, arr2));
console.log(are_arrays_equal([1, 2, 3], [4, 5, 6]));
console.log(are_arrays_equal([1, 2, 3], [1, 2, 3]));
console.log(are_arrays_equal(arr2, [4, 5, 6]));
console.log(are_arrays_equal([1, 2, 3], [1, 2, "3"]));

// arr[0] = 9
// arr[1] = 8
//arr[2] = 7

//var  i = 0;
//arr1[i] += 10;

//i += 1;
//arr1[i] += 10;

//i += 1;
//arr1[i] += 10;

// for(var i = 0;i < arr1.length; i += 1){
// arr1[i] += 10;
// arr1[i] = arr1[i] % 2
// }



// console.log(arr1);