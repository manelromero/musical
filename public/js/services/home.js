Class('Services.Home', {

    Extends: Service,

    initialize: function() {
        this.subscribe();
    },

    sendMail: function(data) {
        this.doRequest('/contact', data, function(result) {
            Bus.publish('contact.sent', result);
        });
    },

    subscribe: function() {
        Bus.subscribe('contact.send', this.sendMail.bind(this));
    }

});
