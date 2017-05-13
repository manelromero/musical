Class('Home.Container', {

    initialize: function() {
        this.createMenu();
        this.contact = document.getElementById('contact');
        this.modal = document.getElementById('modal');
        this.addListeners();
        this.subscribe();
    },

    createMenu: function() {
        this.menu = document.getElementById('menu');
        this.menu.options = {
            music: 'Musical',
            tickets: 'Entradas',
            whoWeAre: 'Quiénes somos',
            contact: 'Contacto'
        };
    },

    addListeners: function() {
        this.menu.addEventListener('option-chosen', this.goToOption.bind(this));
        this.contact.addEventListener('submit-form', this.submitForm.bind(this));
    },

    goToOption: function(message) {
        var section = message.detail;
        var sectionElement = document.getElementById(section);
        scrollIt(sectionElement, 300);
    },

    submitForm: function(message) {
        Bus.publish('contact.send', message.detail);
    },

    showModal: function(result) {
        if (result.ok) {
            console.log('YES');
        } else {
            this.modal.style.display = 'block';
        }
    },

    subscribe: function() {
        Bus.subscribe('contact.sent', this.showModal.bind(this));
    }

});
