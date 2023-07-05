// 표준 function
function calculateSumFirst(first, second){
    return first + second;
}

let third = calculateSumFirst(4, 6);

let calculateMinusSecond = (first, second) => {
    return first - second;
} ;

// >calculateMinusSecond(2, 1)
// 1
// >let calculateSumThird = calculateMinusSecond
// undefined
// >calculateSumThird
// (first, second) => {
//     return first - second;
// }

// callback function
function calculateForth(funcName, param1, param2) {
    let result = funcName(param1, param2);
    result = result + 10;
    return result;
}

// >calculateForth
// ƒ calculateForth(funcName, param1, param2) {
//     let result = funcName(param1, param2);
//     result = result + 10;
//     return result;
// }
// >calculateForth(calculateSumFirst, 5, 2) calculateSumFirstd에서 파라메터 5와 2를 더하고 calculateForth에서 +10이 동작함
// 17
// >calculateForth(calculateSumFirst, 5) // 콜은 되지만 param2가 빠졌으므로 동작은 안함
// NaN
// >calculateForth(calculateMinusSecond, 5, 2)
// 13