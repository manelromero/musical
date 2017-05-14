Class('Home.Container', {

    initialize: function() {
        this.menu = document.getElementById('menu');
        this.menu.addEventListener('option-chosen', this.goToOption.bind(this));
        this.createMenu();
    },

    createMenu: function() {
        this.menu.options = {
            music: 'Musical',
            tickets: 'Entradas',
            whoWeAre: 'Quiénes somos',
            contact: 'Contacto'
        };
    },

    goToOption: function(message) {
        var section = message.detail;
        var sectionElement = document.getElementById(section);
        scrollIt(sectionElement, 300);
    }

});
