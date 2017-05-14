Class('Home.Modal', {

    initialize: function() {
        this.modal = document.getElementById('modal');
        this.modal.addEventListener('closeModal', this.close.bind(this));
        this.subscribe();
    },

    show: function(result) {
        this.modal.style.display = 'block';
        this.modal.message = result.message;

        if (result.ok) {
            Bus.publish('form.empty');
        }
    },

    close: function() {
        this.modal.style.display = 'none';
    },

    subscribe: function() {
        Bus.subscribe('contact.sent', this.show.bind(this));
    }

});
