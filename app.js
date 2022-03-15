//conditional
// let number = 5;

// if (number > 5) {
//   console.log("só lớn hơn 5");
// } else if (number < 5) {
//   console.log("số nhỏ hơn 5");
// } else {
//   console.log("sô bằng 5");
// }

//switch

// let number = 3;

// let number2 = number === 3 ? 3 : 4;
//           if(number === 3) {
//            3
//           }else if(number !== 3) {
//              4
// }
//

// console.log(number2);

//loop

// for (let i = 0; i < number; i++) {
//   console.log(i);
// }

//array

// const array = [1, 2, 3, 4, 5, 6]; //độ dài 6

// // độ dài của mảng array.length
// //index lon nhat 5
// // độ dài của mảng 6
// //láy phần tử thông qua index : array[index]

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 3) {
//     console.log(array[i]);
//   }
// }

const value = prompt("Enter here!"); // 1,100,5

const newArray = value.split(","); // [1,100,5] --> length : 3

let max = 0;

for (let i = 0; i < newArray.length; i++) {
  if (max < Number(newArray[i])) {
    max = newArray[i]; //max =100 ;
  }
}

console.log(max);
