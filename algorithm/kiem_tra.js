// Tìm số lớn thứ 2 trong mảng chỉ dùng 1 vòng lặp
function check () {
    let arr = [1, 2, 4, 5, 10, 9, 7];
    let firstMax = arr[0];
    let secondMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== firstMax){
            secondMax = arr[i];
        }
    }
    return secondMax
}
console.log(check());



//Ta định nghĩa 1 mảng có tính chất lẻ, khi tổng của 2 phần tử liên tiếp luôn là lẻ. Kiểm tra mảng có tính chất lẻ hay không
function check() {
    let arr = [1, 1, 1, 2, 1, 2];
    let rs = 'la day co tinh chat le'
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = arr[i + 1];
       if ((a+b)%2===0){
           rs = 'la day co tinh chat chan'
       }
    }
    console.log(rs)
}
check();