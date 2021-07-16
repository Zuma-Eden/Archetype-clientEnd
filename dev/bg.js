chrome.developerPrivate.openDevTools({
    renderViewId: -1,
    renderProcessId: -1,
    extensionId: chrome.runtime.id
});
process.on('uncaughtException', (err) => {
    console.error(err)
});
let fs = require('fs')
console.log(fs.readFile)


