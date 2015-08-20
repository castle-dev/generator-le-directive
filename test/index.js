'use strict';

var expect = require('chai').expect;
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('le-module:generator', function () {
  var directiveName = 'le-collection';
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        directiveName: directiveName,
      })
      .on('end', done);
  });
 it('should respect logic', function () {
   expect(true).to.be.true;
   expect(false).not.to.be.true;
 });
 it('creates client/src/common/directives/le-collection.js', function () {
   assert.file(['client/src/common/directives/le-collection.js']);
 });
 it('creates client/src/common/controllers/le-collection-directive-controller.js', function () {
   assert.file(['client/src/common/controllers/le-collection-directive-controller.js']);
 });
 it('creates client/src/common/partials/le-collection.tpl.html', function () {
   assert.file(['client/src/common/partials/le-collection.tpl.html']);
 });
 it('creates client/test/unit/common/controllers/le-collection-directive-controller.spec.js', function () {
   assert.file(['client/test/unit/common/controllers/le-collection-directive-controller.spec.js']);
 });
 it('creates client/test/unit/common/directives/le-collection.spec.js', function () {
   assert.file(['client/test/unit/common/directives/le-collection.spec.js']);
 });
});
