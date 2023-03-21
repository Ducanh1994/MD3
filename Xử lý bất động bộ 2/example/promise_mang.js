let promise1 = new promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1])
    }, 0)
})
let promise2 = new promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3])
    }, 0)
})
promise1.then((data1) => {
        promise2.then((data2) => {
        let list = [data1,data2];
            console.log(list)
        })
    }
)
Promise.all([promise1,promise2]).then((data)=>{
    console.log(data)
})
let promise3 = Promise.resolve([1])