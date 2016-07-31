
var electron=require("electron");
var app=electron.app;
var BrowserWindow=electron.BrowserWindow;


var MainWindow;

app.on("ready",function(){
MainWindow=new BrowserWindow({
	width:1020,
	height:600,
	fullscreen:false,
	title:"Todo Manager",
	center:true,
	icon: __dirname+'/public/images/icon128-2x.png'
});
MainWindow.loadURL("file://"+__dirname+"/public/index.html");
 // MainWindow.webContents.openDevTools();
});