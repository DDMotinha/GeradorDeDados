/*
Gasto total int
Idade int
Sexo tinyint // 0 homem 1 mulher
PDV int
Cliente int
Campanha int
listaDeCampanha Object
*/
const fs = require('fs') 

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checarData(data) {
    return data instanceof Date && !isNaN(data);
}

function getRandomDate(year, month, day) {
    var actualDate = new Date(year,month,day)
    var todaysDate = new Date
    if(checarData(actualDate) & !(todaysDate < actualDate)){
        var reformedDate = actualDate.toISOString()
        var arrayData = reformedDate.split('')
        arrayData.length = 10
        var treatedDate = arrayData.join('')
        return treatedDate
    }else{
        getRandomDate(getRandomInt(2018, 2023), getRandomInt(1, 12), getRandomInt(1,31))
    }
}


var stringFormList = 'total_expense;age;sex;pdv;client;campaing;purchase_date\r\n'
let i = 0
while (i < 10000) {
    var item = [{
        "total_expense": getRandomInt(50, 1000),
        "age": getRandomInt(0, 50),
        "sex": getRandomInt(0, 1),
        "pdv": getRandomInt(1, 5),
        "client": getRandomInt(0, 100000),
        "campaing": getRandomInt(1, 10),
        "purchase_date": getRandomDate(getRandomInt(2018, 2022), getRandomInt(1, 12), getRandomInt(1,31))
    }]
    stringFormList = stringFormList + `${item[0].total_expense};${item[0].age};${item[0].sex};${item[0].pdv};${item[0].client};${item[0].campaing};${item[0].purchase_date}\r\n`
    i++
}

fs.writeFile('client.csv',stringFormList,'utf-8',(err)=>{
    console.log(err)
})