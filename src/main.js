let Jack = (function () {
    return {
        registerNotifier: function (notifier) {
            this.notifier = notifier;
        },
        sendMessage: function (msg) {
            console.log(this.name + " sending message");
            this.notifier.receiveMessage(this.name, msg);
        },
        name: "Jack",
    }
})();

let Rose = (function () {
    return {
        name: "Rose",
        registerNotifier: function (notifier) {
            this.notifier = notifier;
        },
        receiveMessage: function (messageFrom, message) {
            console.log(this.name + ': Oh, i got a message from ' + messageFrom);
            console.log(messageFrom + " : " + message);
            this.actOnMessage(message)
        },
        sendMessage: function (msg) {
            console.log(this.name + " sending message");
            this.notifier.receiveMessage(this.name, msg);
        },
        actOnMessage (msg) {
            if (msg === 'I love you') {
                this.sendMessage('Jack loves me')
            }
        }
    }
})();

let Billy = (function () {
   return {
       name: "Billy",
       receiveMessage: function (messageFrom, message) {
           console.log(this.name + ': Oh, i got a message from ' + messageFrom);
           console.log(messageFrom + " : " + message);
           this.actOnMessage(message)
       },
       actOnMessage (msg) {
           if (msg === 'Jack loves me') {
               console.log(this.name + ': Run')
           }
       }
   }
})();

Jack.registerNotifier(Rose);
Rose.registerNotifier(Billy);
Jack.sendMessage('I love you');
// Rose.sendMessage('Jack loves me');