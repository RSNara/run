const { cd, exec } = require("shelljs");
const name = "hello";
const description = "Say Hello";

function api(yargs) {
  return yargs.usage("run hello -w").option("world", {
    alias: "w",
    type: "boolean",
  });
}

function main(argv) {
  cd("~");
  exec("echo Inside $(pwd)!");
  exec("echo Hello" + (argv.world ? " world" : ""));
}

module.exports = {
  name,
  description,
  api,
  main,
};
