// console.log(process.argv)

import { fstat } from "fs";
const fs = require ('fs');
const functions = require('./functions');
const filePath = "./todo.json";


function parseCmdArgs (args){
    // const command = args[2];
    const [nodePath, scriptPath, command, ...option] = args;
   const parcedOption =option.reduce((cum,elm) => {
       const [optionName,optionValue]= elm.split('=');
       cum[optionName]=optionValue;
       return cum;  
    },{});
    parcedOption.command=command;
    return parcedOption;
  
}

function createFile (pathFile){
    if(!fs.existsSync(pathFile)){
        const data = [];
        const jsonData =JSON.stringify(data)
        fs.writeFileSync(pathFile,jsonData)
    }
}


function main (cmdArgs){
    createFile('./data.json')

    const parsedArgs = parseCmdArgs(cmdArgs);

    switch (parsedArgs.command){
        case 'add':
            functions.add(parsedArgs);
            return;

        case 'edit':
            functions.edit(parsedArgs);
            return;

        case 'remove':
            functions.remove(parsedArgs);
            return;

        case 'list':
            functions.list();
            return;
    
        case 'list_checked':
            functions.checkedTodo();
            return;
    
        case 'list-unchecked':
            functions.uncheckedTodo();
            return;
    
        default:
            console.log("Not valid command");
            return;
        
    }  
}

createFile(filePath);
main(process.argv)
