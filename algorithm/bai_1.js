// let arr = [1,2,3,4];
// let rs = 'day tang dan'
// for (let i = 0; i < arr.length -1; i++) {
//     if (arr[i+1] < arr[i]){
//         rs = 'day khong tang dan'
//         break;
//     }
// }
// console.log(rs);

let arr1 = [5,3,3];
let arr2 = [1,2,3,4];
let rs = 'Day a nam trong day b'
for (let i = 0; i < arr1.length; i++) {
    let isInB = false;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]){
            isInB = true;
            break;
        }
    }
    if (!isInB){ //Trong if điều kiện là phải đúng, nếu sai thì nó không chạy. Trong trường hợp này ta biến sai thành đúng
        rs = 'Day a khong nam trong day b'
        break;
    }
}
console.log(rs);