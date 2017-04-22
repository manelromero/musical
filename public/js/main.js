main();

function main() {
    document.addEventListener('DOMContentLoaded', function() {
        var menu = document.getElementById('menu');

        menu.options = ['Musical', 'Entradas', 'Quiénes somos','Contacto'];

        menu.addEventListener('option-chosen', function(message) {
            console.log(message.detail);
        });
    });
}
