var assert = require('assert');

var aTest = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^my homework web page$/,{timeout:20*1000} , function() {
      var promise = this.driver.get('http://shinesoleil.github.io/twhomework-js/');
      this.driver.sleep(1000);
      return promise;
  });

  this.When(/^I input "([^"]*)"$/, function (text) {
      var promise = this.driver
          .findElement({id: 'input'})
          .sendKeys(text);
      this.driver.sleep(1000);
      return promise;
  });

  this.Then(/^there are only (\d+) items displayed$/, function (itemNumber, next) {
      this.driver.findElements({className: 'phrase'}).
            then(function(elements) {
                assert.equal(elements.length, itemNumber);
                next();
            });
  });
};

module.exports = aTest;
