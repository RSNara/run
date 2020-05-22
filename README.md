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
> Inside /Users/ramanpreet!
> Hello world!

run hello
> Inside /Users/ramanpreet!
> Hello
```

## Why?

I find JS easier to write, test, and debug than BASH.

## Included packags

- [chalk](https://www.npmjs.com/package/chalk): For color-coded output
- [shelljs](https://www.npmjs.com/package/shelljs): For easier calls into programs like `ls`, `cd`, etc.
- [flow-node](https://www.npmjs.com/package/flow-node): For type-safe scripts
