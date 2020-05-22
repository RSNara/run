const { ls } = require("shelljs");
const COMMANDS_DIR = __dirname + "/commands";

ls(COMMANDS_DIR)
  .reduce((yargs, commandFileName) => {
    const command = require(`${COMMANDS_DIR}/${commandFileName}`);
    return yargs.command({
      command: command.name,
      desc: command.description,
      builder: command.api,
      handler: command.main,
    });
  }, require("yargs"))
  .help("help")
  .parse();
