function createPhoneNumber(arr) {
    return '(' + arr[0] + arr[1] + arr[2] + ')' + ' ' + arr[3] + arr[4] + arr[5] + '-' + arr[6] + arr[7] + arr[8] + arr[9];
}
alert(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
class Challenge {
    static solution(number) {
        if (number < 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}
alert(Challenge.solution(23));
// 3
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let last = 0;
for (let g = 0; g < k; g++) {
    last = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    nums[0] = last;
}
alert(nums);
// 4
function twoArrays(nums1, nums2) {
    let arr = nums1.concat(nums2);
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    }
    else {
        return arr[Math.floor(arr.length / 2)];
    }
}
alert(twoArrays([1, 3], [2]));
alert(twoArrays([1, 2], [3, 4]));
// 5
let sudokuMatrix = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];
for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let g = 0; g < 9; g++) {
        if (sudokuMatrix[i][g] != 0) {
            if (set.has(sudokuMatrix[i][g])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[i][g]);
            }
        }
    }
}
for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let g = 0; g < 9; g++) {
        if (sudokuMatrix[g][i] != 0) {
            if (set.has(sudokuMatrix[g][i])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[g][i]);
            }
        }
    }
}
// квадраты
// первый столб квадратов
for (let row = 0; row < 3; row++) {
    let set = new Set();
    for (let col = 0; col < 3; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 0; row < 3; row++) {
    let set = new Set();
    for (let col = 3; col < 6; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 0; row < 3; row++) {
    let set = new Set();
    for (let col = 6; col < 9; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
// второй столб квадратов
for (let row = 3; row < 6; row++) {
    let set = new Set();
    for (let col = 0; col < 3; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 3; row < 6; row++) {
    let set = new Set();
    for (let col = 3; col < 6; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 3; row < 6; row++) {
    let set = new Set();
    for (let col = 6; col < 9; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
// третий столб квадратов
for (let row = 6; row < 9; row++) {
    let set = new Set();
    for (let col = 0; col < 3; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 6; row < 9; row++) {
    let set = new Set();
    for (let col = 3; col < 6; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
for (let row = 6; row < 9; row++) {
    let set = new Set();
    for (let col = 6; col < 9; col++) {
        if (sudokuMatrix[row][col] != 0) {
            if (set.has(sudokuMatrix[row][col])) {
                alert("error");
            }
            else {
                set.add(sudokuMatrix[row][col]);
            }
        }
    }
}
