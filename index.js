const electron = require('electron')
const {app,BrowserWindow} = electron

app.on('ready',() =>{
    let win = new BrowserWindow({width:240,height:490})
    win.loadURL(`file://${__dirname}/index.html`)
})