# Run

This is a CLI to write JS scripts to automate things.

## How to use?

Clone the repo, `cd` in, run `yarn`, and in your ~/.bashrc file, create this function:

```BASH
function run() {
	REPO_LOCATION=$HOME/run
	$REPO_LOCATION/node_modules/.bin/flow-node $REPO_LOCATION/index.js "$@"
}
```

Then, `source ~/.bashrc`, and call into the scripts like this:

```
run hello -w
> Hello world!

run hello
> Hello
```
