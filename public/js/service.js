var Service = function() {

    var contact = function(data) {
        doRequest('/contact', data, function(result) {
           console.log(result);
        });
    };

    var doRequest = function(endpoint, data, callback) {
        var request = new XMLHttpRequest();
        var OK = 200;

        request.open('POST', endpoint);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === OK) {
                    callback (JSON.parse(request.responseText));
                }
            }
        };
        request.send(JSON.stringify(data));
    };

    Bus.subscribe('post.sent', contact);

};
