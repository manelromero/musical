Class('Page.Home', {

    initialize: function() {
        new Services.Home();
        new Home.Container();
        new Home.Form();
    }

});
