# Deno Experiment
This is an experiment with deno

## Setup
### Pre-Requisite
[deno](https://deno.land/#installation)
[denon](https://deno.land/x/denon#install)

### Install

```bash
git clone https://github.com/sagea/deno-first-look.git
cd deno-first-look
deno setup
```

### Running
```bash
deno start
```

### My Ramblings
- I enjoy the import system. Specificially how it doesn't behave like node_modules
- denon cli is definitely a must as far as I can tell


#### Things that make me happy

- deno: Top level async and await
- deno: Import maps


- denon: restart when permissions are changed in the denon.json file
- denon: denon.json global vs script level permissions is nice

#### Things that are "🤨"
- (src/eyebrow-raise/) Relative pathing for file system methods appear to be based on the execution path not the location of the file calling the method.