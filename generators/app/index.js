'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('ynu-api') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'datasource',
      message : 'Your datasource name',
      default : 'ds'
    },{
      type    : 'input',
      name    : 'host',
      message : 'Your datasource host',
      default : 'localhost'
    },{
      type    : 'input',
      name    : 'port',
      message : 'Your datasource port',
      default : '3306'
    },{
      type    : 'input',
      name    : 'database',
      message : 'Your datasource database',
      default : 'test'
    },{
      type    : 'input',
      name    : 'user',
      message : 'Your datasource user',
      default : 'root'
    },{
      type    : 'input',
      name    : 'password',
      message : 'Your datasource password',
      default : ''
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.log("copy resources and template files");
    this.fs.copyTpl(
      this.templatePath('./**'),
      this.destinationPath(),
      {
        name: this.props.name, 
        datasource: this.props.datasource, 
        host: this.props.host, 
        port: this.props.port, 
        database: this.props.database, 
        user: this.props.user, 
        password: this.props.password,
      },
      {},
      {globOptions: { dot: true }},
    );
  },

  install: function () {
    this.log("run npmInstall");
    this.npmInstall();
  }
});
