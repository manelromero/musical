Class('Page.Home', {

    initialize: function() {
        new Services.Home();
        new Home.Container();
        new Home.Modal();
        new Home.Form();
    }

});
