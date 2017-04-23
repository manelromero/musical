main();

function main() {
    document.addEventListener('DOMContentLoaded', function() {
        new Service();
        var menu = document.getElementById('menu');
        var form = document.getElementById('form');

        menu.addEventListener('option-chosen', function(message) {
            console.log(message.detail);
        });

        form.addEventListener('submit', function(message) {
            Bus.publish('post.sent', message.detail);
        });

        menu.options = ['Musical', 'Entradas', 'Quiénes somos','Contacto'];
    });
}
