const EventEmitter=require('events');
class Button extends EventEmitter{
    click(){
        console.log('Button was clicked')
        this.emit('click',{timestamp:Date.now()});
    }
}
const button=new Button()
button.on('click',(event)=>
{
    console.log(`Click event fired at ${event.timestamp}`)
})

// class Button extends EventEmitter{
//     click(){
//         this.emit("click");
//     }
// }
// const button = new Button();
// button.on("click",()=>{
//     console.log("Button clicked");
// })
// button.click();