# React-CSR-Docker-Boilerplate

A very minimal and unopinionated and production ready Client Side React Boilerplate.

## Quick start

- Make sure that you have Node.js >v8.15.1 and yarn installed.
- Clone this repo using git clone https://github.com/tusharf5/react-csr-docker-boilerplate.git <YOUR_PROJECT_NAME>
- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.
- Run `rm -rf .git` to clean the repo.
- Run `yarn` in order to install dependencies.
- At this point you can run `yarn dev` to see the example app at http://localhost:3000.

## Features

### Webpack

Webpack is a module bundler. Webpack can take care of bundling your react application making it highly optimized and ready to serve.

### Hot Module Replacement

Hot Module Replacement (HMR) exchanges, adds, or removes (CSS/JS)modules while an application is running, without a full reload. This can significantly speed up development.

### Lazy Loaded Modules

This practice essentially involves splitting your code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code.

### Pre Configured Docker

Build, Share, and Run Any App, Anywhere using Docker.

### Nginx

Serve your bundled application and assets with Nginx.

### CSS Modules

CSS Modules changes class names and selectors to be scoped (i.e. kinda like namespaced)

### Prettier

Automatically formats the staged files with prettier when you do a git commit :)

### ESlint

Javascript Linting support with Eslint.

### Commintlint for semantic commit messages

Enforce styleguide on commit messages for everyone who is commiting to the repo.

## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: allow overriding of webpack config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

The various types of commits:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `perf`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `revert`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating repo files; no build tools or docs; no production code change)
- `build`: (updating build tools etc; no production code change)
- `ci`: (updating ci tools etc; no production code change)

Use lower case not title case!

## Important

For Supporting Hot Reload for Nested Routes. The Components containing the Route declarations must be exported with the `export default hot(Component)`.
