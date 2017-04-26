main();

function main() {
    document.addEventListener('DOMContentLoaded', function() {
        new Service();
        var menu = document.getElementById('menu');
        var form = document.getElementById('contact');

        menu.addEventListener('option-chosen', function(message) {
            var section = message.detail;
            var sectionElement = document.getElementById(section);
            scrollIt(sectionElement, 300);
        });

        form.addEventListener('submit', function(message) {
            Bus.publish('post.sent', message.detail);
        });

        menu.options = {
            music: 'Musical',
            tickets: 'Entradas',
            whoWeAre: 'Quiénes somos',
            contact: 'Contacto'
        };
    });
}
