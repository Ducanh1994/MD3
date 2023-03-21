//Cho một mảng a, in ra những phần tử chỉ xuất hiện 1 lần
//Cho một mảnh a, tạo ra mảng b chứa các phần tử của mảng nhưng không lặp


// let map = new Map (
//     [
//         ['NA', '99 TB'],
//         ['G', '97 HN']
//     ]
// );
// //console.log(map.get('NA'));
// //console.log(map.get('KA'))
// map.set('KA', '98 CM');
// console.log(map.get('KA'))

// let map = new Map (
//     [
//         ['A',10],
//         ['B',8]
//     ]
// )
// map.set('A',map.get('A')+1)
// map.set('D',1)
// for (let item of map) {
//     console.log(item)
// }


let map = new Map ();
let arr = [1,2,3,3,3,1,4];
for (let i = 0; i < arr.length; i++) {
    if(map.get(arr[i]) === undefined) {
        map.set(arr[i],1)
    }
    else {
        map.set(arr[i],map.get(arr[i])+1);
    }
}
for (let item of map) {
    //console.log(item[0] + ' xuat hien ' + item[1] + ' lan ')
    console.log(item)
}

