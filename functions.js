const fs =require('fs');
function readData (pathFile){
    const todos = fs.readFileSync(pathFile,'utf8') 
    return JSON.parse(todos)
}
function writeData (){
    
}

function add(option){

}



const todo ={
    id=1,
    title="study",
    body="study node",
    checked= false,
}