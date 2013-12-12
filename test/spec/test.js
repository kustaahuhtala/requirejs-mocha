/* global describe, it */
define(['scripts/app'], function(app) {
  'use strict';

  describe('Give it some context', function () {
      describe('maybe a bit more context here', function () {
          it('should run here few assertions', function () {
             assert.equal('Hello World!', app.init());
          });
      });
  });
});
