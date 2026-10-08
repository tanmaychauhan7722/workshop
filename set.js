console.log("start");
setTimeout(()=>{
    console.log("Timeout");
},1000)
setImmediate(()=>{
    console.log("Immediate");
})
process.nextTick(()=>{
    console.log("Next Tick");
})
console.log("exit");