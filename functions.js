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


module.exports = {
    add,
    edit,
};
editInfo = (oldObj, newObj, index) => {
    if (newObj.title !== undefined)
        oldObj[index].title = newObj.title;

    if (newObj.checked !== undefined)
        oldObj[index].checked = newObj.checked;

    console.log(oldObj);
    writeData(oldObj);
};


// const todo ={
//     id=1,
//     title="study",
//     body="study node",
//     checked= false,
// }