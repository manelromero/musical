main();

function main() {
    document.addEventListener('DOMContentLoaded', function() {
        var menu = document.getElementById('menu');

        menu.options = ['Musical', 'Productora', 'Multimedia', 'Entradas', 'Contacto'];

        menu.addEventListener('option-chosen', function(message) {
            console.log(message.detail);
        });
    });
}
