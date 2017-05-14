Class('Home.Form', {

    initialize: function() {
        this.contact = document.getElementById('contact');
        this.addListeners();
    },

    addListeners: function() {
        this.contact.addEventListener('submit-form', this.submitForm.bind(this));
    },

    submitForm: function(message) {
        Bus.publish('contact.send', message.detail);
    }

});
