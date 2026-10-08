// const Event=require('events');
// const A=new Event();
// A.on('greet',(name)=>{
//     console.log(`Hello ${name}`);
// }
// );
// A.emit('greet','Tanmay');
let EventEmitter = require("events");
let event1 = new EventEmitter();
event1.on("welcome", () => {
console.log("Welcome !!");
});
event1.emit("welcome");
event1.on("bye", () => {
console.log("Goodbye and have a nice day!");
});
event1.emit("bye");
console.log("-> DOM Like Manipulation <-");
class Website extends EventEmitter {
constructor() {
super();
}
display = () => {
this.emit("message");
}
}
let obj = new Website();
obj.on("message", () => {
console.log("Keep learning and improve your coding skills");
});
obj.display();