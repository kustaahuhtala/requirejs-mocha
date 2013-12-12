/* global require */
require.config({
    baseUrl: '.',
    paths: {
        frontend: '../app/scripts'
    }
});

require(['spec/test'], function() {
        mocha.checkLeaks();
        mocha.globals(['jQuery*']);
        mocha.run();
    }
);
