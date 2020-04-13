// console.log(process.argv)

import { fstat } from "fs";

function parseCmdArgs (args){
    // const command = args[2];
    const [nodePath, scriptPath, command, ...option] = args;
   const parcedOption =option.reduce((cum,elm) => {
       const [optionName,optionValue]= elm.split('=');
       cum[optionName]=optionValue;
       return cum;  
    },{})
    parcedOption.command=command;
    return parcedOption;
  
}
const fs = require ('fs');
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
            add(parsedArgs)
        case 'edit':
            edit(parsedArgs)
        case 'remove':
            remove(parsedArgs)
        
        
    }
     

}