axios = require('axios');

async function getAllUser (){
    let json = await axios.get('https://jsonplaceholder.typicode.com/users');
    return json;
}
getAllUser().then(result => {
    console.log(result);
})