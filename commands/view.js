let fs= require("fs");
let path=require("path");

module.exports.view=function(){
    let src=arguments[0];
    let mode=arguments[1];
    if(mode =="-t"){
        viewAsTree(src,"");
    }
    else if(mode=="-f"){
        viewAsFlatFiles(src);
    }
    else{
        console.log("Ooooooohhh!!! Wrong parameters");
    }
};
// function viewAsTree(){
//     console.log("View As Tree is working");
    
// }
function viewAsTree(src,str){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(str+path.basename(src)+"*");
    }
    else{
    //    console.log("I'm a directory");
    console.log(src);
    let childrens =fs.readdirSync(src);
    console.log(str+path.basename(src));
        //   console.log(childrens);
        for(let i=0;i<childrens.length;i++){
            let cChPath=path.join(src,childrens[i]);
            viewAsTree(cChPath,str+"  ");
    }
        }
          
}

// function viewAsFlatFiles(){
//     console.log("View as flat files is working");

// }

function viewAsFlatFiles(src){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(src+" ");
    }
    else{
    //    console.log("I'm a directory");
    console.log(src);
    let childrens =fs.readdirSync(src);
        //   console.log(childrens);
        for(let i=0;i<childrens.length;i++){
            let cChPath=path.join(src,childrens[i]);
            viewAsFlatFiles(cChPath);
    }
        }
          
}
