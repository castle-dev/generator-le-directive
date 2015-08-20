'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var asciiArt = require('le-ascii-art');
var path = require('path');
var q = require('q');
var formatter = require('change-case');

var answers;

var CastleDirectiveGenerator = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    var dir = process.cwd().split(path.sep).pop();
    this.prompt([{
      type    : 'input',
      name    : 'directiveName',
      message : 'What is the name of your new directive?',
      default : 'le-directive-name'
    }], function (responses) {
      answers = responses;
      done();
    }.bind(this));
  },
  writing: function () {
    var writer = this;
    function copyTemplate (from, to) {
      writer.fs.copyTpl(
        writer.templatePath(from),
        writer.destinationPath(to),
        answers
      );
    };
    answers.paramCaseDirectiveName = formatter.param(answers.directiveName);
    answers.pascalCaseDirectiveName = formatter.pascal(answers.directiveName);
    answers.camelCaseDirectiveName = formatter.camel(answers.directiveName);
    answers.controllerName = answers.pascalCaseDirectiveName + 'DirectiveController';
    copyTemplate('_directive.js', 'client/src/common/directives/' + answers.paramCaseDirectiveName + '.js');
    copyTemplate('_controller.js', 'client/src/common/controllers/' + answers.paramCaseDirectiveName + '-directive-controller.js');
    copyTemplate('_template.tpl.html', 'client/src/common/partials/' + answers.paramCaseDirectiveName + '.tpl.html');
    copyTemplate('_test/_directive.spec.js', 'client/test/unit/common/directives/' + answers.paramCaseDirectiveName + '.spec.js');
    copyTemplate('_test/_controller.spec.js', 'client/test/unit/common/controllers/' + answers.paramCaseDirectiveName + '-directive-controller.spec.js');
  },
});

asciiArt.printLogo();

module.exports = CastleDirectiveGenerator;
