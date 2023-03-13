const os = require('os')

const user = os.userInfo()
//console.log(user)

//to get the system uptime 
const details ={
'uptime': os.uptime(),
'user' : os.userInfo()
}

//console.log(details)
console.log(`The system has been up for ${os.uptime()} seconds`)

const currentOS = {
   name : os.type(),
   release : os.release(),
   totalMemory : os.totalmem(),
   freeMemory : os.freemem()
}

console.log(currentOS)
const path = require('path')
const filePath = path.join('/tutorial', 'survey.html')
console.log(filePath)
console.log(path.sep)
console.log(path.basename(filePath))
const absolute = path.resolve(__dirname, filePath)
console.log(absolute)