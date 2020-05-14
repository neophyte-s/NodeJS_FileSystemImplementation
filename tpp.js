let cmd=process.argv[2];
let viewFile=require("./command/view");
let treefyFile=require("./command/treefy");
let untreefyFile=require("./command/untreefy");
let monitorFile=require("./command/monitor");
let helpFile=require("./command/help");
switch(cmd)
{
    case "view": viewFile.view(process.argv[3],process.argv[4]);
                 break;
    case "untreefy": untreefyFile.untreefy(process.argv[3],process.argv[4]);
                 break;
    case "treefy": treefyFile.treefy(process.argv[3],process.argv[4]);
                 break;
    case "monitor": monitorFile.monitor(process.argv[3],process.argv[4]);
                 break;
    case "help": helpFile.help();
                 break;
    default:console.log("Invalid Command");
}


