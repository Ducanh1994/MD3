const student = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

const arrMale = student.filter(item => item.gender === "male");
const averageMale = arrMale.reduce((acc,curr) => acc + curr.poin,0)
console.log(averageMale/arrMale.length);
const arrFemale = student.filter(item => item.gender === "female");
const averageFemale = arrFemale.reduce((acc,curr) => acc + curr.poin,0)
console.log(averageFemale/arrFemale.length);