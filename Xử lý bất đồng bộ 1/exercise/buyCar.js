const buyCar = (money) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (money > 100) {
                    resolve("đủ tiền mua xe!");
                } else {
                    reject(new Error("Không đủ tiền"));
                }
            }, 2000);
        }
    )
}
buyCar(500)
    .then((result) => {
        console.log(`Tôi đã ${result}`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Tôi sẽ tiết kiệm tiền tiếp");
    })
//
// buyCar(99)
//     .then((result) => {
//         console.log(`Tôi đã ${result}`);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Tôi sẽ tiết kiệm tiền tiếp");
//     })