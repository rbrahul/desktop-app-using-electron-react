
var electron=require("electron");
var app=electron.app;
var BrowserWindow=electron.BrowserWindow;


var MainWindow;

app.on("ready",function(){
MainWindow=new BrowserWindow({width:800,height:600});
MainWindow.loadURL("file://"+__dirname+"/public/index.html");
  MainWindow.webContents.openDevTools();
});
