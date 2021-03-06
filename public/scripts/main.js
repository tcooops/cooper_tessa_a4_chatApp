import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    //load the socket library and make a connection
    const socket = io();

    // messenger service event handling -> incoming from the manager
    function setUserId({sID, message}) {
        // incoming connected event with data
        //debugger;
        vm.socketID = sID;
    } 

    function appendMessage(message) {
        //debugger;
        vm.messages.push(message);
    }

    const vm = new Vue({
        data: {
            messages: [], // incoming messages stored in this array
            nickname: "",
            username: "",
            socketID: "",
            message: "" // bound to our text input on chat.html
        },

        created: function() {
            socket.emit('newconnection', {
                name: this.nickname
            })
        },

        
        methods: { 
            dispatchMessage() {
                //debugger;
                socket.emit('chatmessage', { content: this.message, name: this.nickname || "Anonymous" });
                
                this.message = "";
            }
        },

        components: {
            newmessage: ChatMessage
        }

    }).$mount("#app");
    // must be a div, section, or main tag with an id of app

    socket.addEventListener("connected", setUserId);
    socket.addEventListener('message', appendMessage);

})();