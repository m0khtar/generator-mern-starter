const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to the MERN starter generator");
  }
  // file copy
  writing() {
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(this.templatePath("client"), this.destinationPath("client"));
    this.fs.copy(this.templatePath("server"), this.destinationPath("server"));
  }

  end() {
    this.log("");
    this.log("Finished generating!");
    this.log("");
  }
};
