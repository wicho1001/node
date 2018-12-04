const fs = require('fs')

function readFile (){
    fs.readFile("../page/index.html", (err,data)=>{
        if(err) throw err;
        home = (data);
        console.log(home);
    })
}

readFile();

