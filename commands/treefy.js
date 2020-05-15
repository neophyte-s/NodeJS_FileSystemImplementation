let fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");
module.exports.treefy = function() {
  console.log("Treefy command has been Called");
  let src = arguments[0];
  let dest = arguments[1];

  treefyFolder(src,dest);
  var root=JSON.parse(fs.readFileSync(src));
  console.log(root);
//   console.log(root.children[0].children[1]);
//   console.log("All files have been copied");
};

function treefyFolder(src,dest) {
  let ans = fs.lstatSync(src).isDirectory();
  if (ans == false) {
    let uniqueName = uniqid();
    //copy file from src to dest=> and rename them
    node.isFile=true;
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
    treefyFolder(cChPath,dest,cChildObj);
    node.children.push(cChildObj);
    }
    }
  }
