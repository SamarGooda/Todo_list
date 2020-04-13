const fs = require('fs');
const filePath = "./todo.json";


function readData (pathFile){
    const todos = fs.readFileSync(pathFile,'utf8') 
    return JSON.parse(todos)
}

function writeData (data){
    const jasonData = JSON.stringify(data); 
    fs.writeFileSync(filePath,jasonData)
}
getLastId = (data) => {
    return !data.length ? 1 : data[data.length - 1].id + 1;
};

function add(options){
    let data = {};
    data.title = options.title;

    if (options.checked != undefined)
        data.checked = options.checked;
    else
        data.checked = false;

    let todoList = readData(filePath);
    data.id = getLastId(todoList);

    todoList.push(data);

    writeData(todoList);
    console.log("todo added successfully")
}
function edit (data){
    const todoList = readData(filePath);
    updated = false;
    todoList.forEach((ele, index) => {
        if (ele.id == data.id) {
            editInfo(todoList, data, index);
            console.log("is updated");
            writeData(todoList);
            updated = true;
        }
    });
    if (!updated)
        console.log("not valid");
}

editInfo = (oldObj, newObj, index) => {
    if (newObj.title !== undefined)
        oldObj[index].title = newObj.title;

    if (newObj.checked !== undefined)
        oldObj[index].checked = newObj.checked;

    console.log(oldObj);
    writeData(oldObj);
};

function remove (data){
    const todoList = readData(filePath);
    deleted = false;
    todoList.forEach((ele, index) => {
        if (ele.id == data.id) {
            todoList.splice(index,1);
            console.log("is deleted");
            writeData(todoList);
            deleted = true;
        }
    });
    if (!deleted)
        console.log("not valid");
}

function list (){
    const todoList = readData(filePath);
    console.log(todoList)
}

function completedTodo (){
    const todoList = readData(filePath);
    completed=false
    todoList.filter((elem) => {
        if (elem.checked == true) { 
             console.log("sa")      
             console.log(elem)
             completed=true
        }
    });
    if (completed==false)
       console.log("No completed todo")
}

function uncompletedTodo (){
    const todoList = readData(filePath);
    uncompleted=false
    todoList.filter((elem) => {
        if (elem.checked == false) {       
             console.log(elem)
             uncompleted=true
        }
    });
    if (uncompleted==false)
       console.log("No uncompleted todo")
}



module.exports = {
    add,
    edit,
    remove,
    list,
    completedTodo,
    uncompletedTodo,

};


// const todo ={
//     id=1,
//     title="study",
//     body="study node",
//     checked= false,
// }