var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname, // Default to current folder name,
      store   : true
    }, {
      type: 'input',
      name: 'scope',
      message: "Your project scope, used as admin's scope",
      default: 'scope',
      store   : true
    }, {
      type: 'input',
      name: 'datasource',
      message: 'Your datasource name',
      default: 'datasource',
      store   : true
    }, {
      type: 'input',
      name: 'host',
      message: 'Your datasource host',
      default: 'localhost',
      store   : true
    }, {
      type: 'input',
      name: 'port',
      message: 'Your datasource port',
      default: '3306',
      store   : true
    }, {
      type: 'input',
      name: 'database',
      message: 'Your datasource database',
      default: 'test',
      store   : true
    }, {
      type: 'input',
      name: 'user',
      message: 'Your datasource user',
      default: 'root',
      store   : true
    }, {
      type: 'input',
      name: 'password',
      message: 'Your datasource password',
      default: '',
      store   : true
    }, {
      type: 'input',
      name: 'admin_datasource',
      message: 'Your admin datasource name',
      default: 'admin_datasource',
      store   : true
    }, {
      type: 'input',
      name: 'admin_host',
      message: 'Your admin datasource host',
      default: 'localhost',
      store   : true
    }, {
      type: 'input',
      name: 'admin_port',
      message: 'Your admin datasource port',
      default: '3306',
      store   : true
    }, {
      type: 'input',
      name: 'admin_database',
      message: 'Your admin datasource database',
      default: 'test',
      store   : true
    }, {
      type: 'input',
      name: 'admin_user',
      message: 'Your admin datasource user',
      default: 'root',
      store   : true
    }, {
      type: 'input',
      name: 'admin_password',
      message: 'Your admin datasource password',
      default: '',
      store   : true
    }];
    // Have Yeoman greet the user.

    this.log(yosay(
      'Welcome to the ' + chalk.red('ynu-api') + ' generator!'
    ));

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.log('copy resources and template files');
    this.fs.copyTpl(
      this.templatePath('./**'),
      this.destinationPath(),
      {
        name: this.props.name,
        scope: this.props.scope,
        datasource: this.props.datasource,
        host: this.props.host,
        port: this.props.port,
        database: this.props.database,
        user: this.props.user,
        password: this.props.password,
        admin_datasource: this.props.admin_datasource,
        admin_host: this.props.admin_host,
        admin_port: this.props.admin_port,
        admin_database: this.props.admin_database,
        admin_user: this.props.admin_user,
        admin_password: this.props.admin_password
      },
      {},
      { globOptions: { dot: true } }
    );
  },

  install: function () {
    this.log('run npmInstall');
    // this.npmInstall();
  }
});
