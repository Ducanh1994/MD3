let axios = require('axios');
// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(data =>{
//     let dataAll = data.data;
//     let list = [];
//     let count = 0;
//     for (let i = 0; i < dataAll.length; i++) {
//         if(dataAll[i].completed === true){
//             list.push(dataAll[i]);
//             count ++
//         }
//     }
//     console.log(list);
//     console.log(count);
// })
async function getData () {
    // axios là một bên thứ 3 nên mặc đinh trả về promise
    let data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // data đang nằm trong resolve của promise
    let todos = data.data
    let list = [];
    let count = 0;
    //for in trả về index của phần tử
    // for of trả về từng phần tử
    for (const todosKey of todos) {
        if (todosKey.completed === true) {
            list.push(todosKey);
            count++
        }
    }
    console.log(list);
    console.log(count);
}
// dùng promise khi ra ngoài global sẽ không sử dụng được dữ liệu trả về là data
//dùng async/await chỉ cần retun về dũ liệu trả về thì bên ngoài sẽ dùng được data
getData();