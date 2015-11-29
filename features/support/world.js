var webdriver = require('selenium-webdriver');

var World = function() {
    this.driver = new webdriver.Builder()
                    .forBrowser('firefox')
                    .build();
};

exports.World = World;

