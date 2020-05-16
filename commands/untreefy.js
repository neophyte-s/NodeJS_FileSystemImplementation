let fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");
module.exports.untreefy = function() {
  console.log("untreefy command has been Called");
  let src = arguments[0];
  let dest = arguments[1];
  let root={};

  untreefyFolder(src, dest,root);
  fs.writeFileSync(path.join(dest,"metadata.json"),JSON.stringify(root));
  console.log(root);
  console.log(root.children[0].children[1]);
  console.log("All files have been copied");
};

function untreefyFolder(src, dest,node) {
  let ans = fs.lstatSync(src).isDirectory();
  if (ans == false) {
    let uniqueName = uniqid();
    //copy file from src to dest=> and rename them
    node.isFile=true;3333
    node.name=path.basename(src);
    node.newName=uniqueName;
    fs.copyFileSync(src, path.join(dest, uniqueName));
  } else {
    // let childrens = fs.readdirSync(src);

    // // console.log(childrens);
    // for (let i = 0; i < childrens.length; i++) {
    //   let cChPath = path.join(src, childrens[i]);
    //   untreefyFolder(cChPath, dest);
    node.isFile=false;
    node.name=path.basename(src);
    node.children=[];
    let childrens=fs.readdirSync(src);
    for(let i=0;i<childrens.length;i++){
    let cChildObj={};
    let cChPath=path.join(src,childrens[i]);
    untreefyFolder(cChPath,dest,cChildObj);
    node.children.push(cChildObj);

    }
    }
  }
