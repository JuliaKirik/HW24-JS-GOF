class PubSub {
    constructor() {
        this.handlers = [];
    }
    subscribe(event, handler, context) {
        if (typeof context === 'undefined') { 
            context = handler; 
        }
        this.handlers.push({ 
            event: event, 
            handler: handler.bind(context) 
        });
    }
    publish(event, msg, sender) {
        this.handlers.forEach((topic) => {
            if (topic.event === event) {
                topic.handler(msg, sender)
            }
        })
    }
}

class Rose {
    constructor(pubsub) {
        this.name = 'Rose';
        this.pubsub = pubsub;
        this.pubsub.subscribe('jackToRose', this.sendMessage, this);
        this.pubsub.subscribe('billyToRose', this.sendMessage, this);
    }
    sendMessage(msg, sender) {
        console.log(sender + ': ', msg);
        let receiver;
        let event;
        if(sender === 'Jack') {
            event = 'roseToBilly';
            receiver = 'Billy'
        } else {
            event = 'roseToJack'
            receiver = 'Jack'
        }
        this.publishMessage(event, `${receiver}, ${sender} loves me`);
    }
    publishMessage(event, msg) {
        this.pubsub.publish(event, msg, this.name);
    }
}

class Billy {
    constructor(pubsub) {
        this.name = 'Billy';
        this.pubsub = pubsub;
        this.pubsub.subscribe('roseToBilly', this.sendMessage, this);
    }
    sendMessage(msg, sender) {
        console.log(sender + ': ' + msg);
        console.log(`${this.name} run`);
    }
    publishMessage(event, msg) {
        this.pubsub.publish(event, msg, this.name);
    }
}

class Jack {
    constructor(pubsub) {
        this.name = 'Jack';
        this.pubsub = pubsub;
        this.pubsub.subscribe('roseToJack', this.sendMessage, this);
    }
    sendMessage(msg, sender) {
        console.log(sender + ': ' + msg);
        if (sender === 'Rose') {
            console.log(`${this.name} run`);
        }
    }
    publishMessage(event, msg) {
        this.pubsub.publish(event, msg, this.name);
    }
}

const pubsub = new PubSub();
const rose = new Rose(pubsub);
const billy = new Billy(pubsub);
const jack = new Jack(pubsub);

jack.publishMessage('billyToRose', 'Rose I love you!');