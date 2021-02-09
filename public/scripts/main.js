(() => {
    console.log('fired');

    //load the socket library and make a connection
    const socket = io();

    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: ""
        },

        created: function() {
            console.log('itS ALIVE! vue here, sup!');
        }

     //   methods { }

    }).$mount("#app");
    // must be a div, section, or main tag with an id of app

})();