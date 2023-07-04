// if (condition) {
// } else if (condition) {
// } else {
// }

let first = 1 ;
let second = 4 ;

if (first < 10) {
    console.log("Mano");
}  else if (first > second) {
    console.log(`${first} >  ${second}`);
}  else {
    console.log(`second : ${second}`);
}

//  == 데이터 값만 동일  vs === 데이터 값과 타입이 모두 동일
let third = `4` ;
// first = 4;
// third == first
// true
// third === first
// false

// 삼항 연산자(항목 3개 if문)
// if (condition) {  
// }   else {
// }
// 변수 = () ? : ;

let result = (third === first) ? `true!` : `false!`;