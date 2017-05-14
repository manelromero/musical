Class('Home.Form', {

    initialize: function() {
        this.contact = document.getElementById('contact');
        this.addListeners();
        this.subscribe();
    },

    addListeners: function() {
        this.contact.addEventListener('submit-form', this.submit.bind(this));
    },

    submit: function(message) {
        Bus.publish('contact.send', message.detail);
    },

    empty: function() {
        this.contact.empty();
    },

    subscribe: function() {
        Bus.subscribe('form.empty', this.empty.bind(this));
    }

});
