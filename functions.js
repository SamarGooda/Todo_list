const fs = require('fs');
const filePath = "./todo.json";


function readData (pathFile){
    const todos = fs.readFileSync(pathFile,'utf8') 
    return JSON.parse(todos)
}

function writeData (data){
    const jasonData = fs.stringify(data); 
    fs.writeFileSync(filePath,jasonData)
}

function add(option){
     
}



const todo ={
    id=1,
    title="study",
    body="study node",
    checked= false,
}