const EventEmiter = require("events") // mainly its a class so we need to create an instance of this class

const myEmitter = new EventEmiter()

// we can create multiple listeners using the myEmitter instance
//listener
myEmitter.on('birthday', () => {
    console.log(`HAPPY BIRTHDAY TO YOU`);
})

//listener
myEmitter.on('birthday', (gift) => {
    console.log(`I will send a ${gift}`);
})

// emit the event
myEmitter.emit('birthday', 'bike') 