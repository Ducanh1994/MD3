const http = require('http');
const fs = require('fs');
let qs = require('qs');

let server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', "utf-8", (err, indexHtml) => {
            let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
            let html = ''
            console.log(people)
            for (let i = 0; i < people.length; i++) {
                html += `
                 <tr>
                    <th scope="row">${people[i].id}</th>
                    <td>${people[i].name}</td>
                    <td>${people[i].age}</td>
                    <td>${people[i].sex}</td>
                    <td><img src="${people[i].image}" style="width: 40px;height:40px;"></td> 
                    <td>
                    <form method="post">
                    <input type="hidden" name="idEdit" value="${people[i].id}">
                    <button class="btn btn-outline-info">Sửa</button>
                    </form>
                    </td>
                    <td>
                    <form method="post">
                    <input type="hidden" name="idDelete" value="${people[i].id}">
                    <button class="btn btn-outline-danger" type="submit">Xóa</button>
                    </form>
                    </td>
                    
                </tr>
            `
            }
            indexHtml = indexHtml.replace('{people}', html);
            res.write(indexHtml);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let data = '';
        //lay het data sau khi bấm nút Submit của form có method là POST vào biến data
        req.on('data', chunk => {
            data += chunk; // idDelete=1&
        })
        //lấy xong bắt đầu giải mã
        req.on('end', () => {
            let user = qs.parse(data);
            console.log(user)
            if (user.idDelete) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
                let index = people.findIndex(item => {return item.id === user.idDelete});
                people.splice(index, 1);
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'});
                res.end();
            }
            else if (user.idEdit) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
                let index = people.findIndex(item => {return item.id === user.idEdit});
                let userEdit = people[index];
                fs.readFile('./views/edit.html','utf-8',(err,editHtml)=> {
                    editHtml = editHtml.replace('{id}',userEdit.id);
                    editHtml = editHtml.replace('{nam e}',userEdit.name);
                    editHtml = editHtml.replace('{age}',userEdit.age);
                    editHtml = editHtml.replace('{sex}',userEdit.sex);
                    res.write(editHtml);
                    res.end();
                })
            }
            else if (user.idEditCurrent){
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
                let index = people.findIndex(item => {return item.id === user.idEditCurrent})
                people[index] = {id: user.idEditCurrent , name: user.nameEdit, age: user.ageEdit, sex: user.sexEdit};
                fs.writeFileSync('./data/data.json',JSON.stringify(people))
                res.writeHead(301,{location:'/'});
                res.end();
            } 
            else
            {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
                people.push(user);
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'});
                res.end();
            }
        })
    }
});
const port = 3000;
const local = 'localhost'
server.listen(port, local, () => {
    console.log('Server is running at http://'+local+':'+port);
})