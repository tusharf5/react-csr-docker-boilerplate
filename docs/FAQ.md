## How do I deploy this?

`npm run build`. This will build the project for production. It does the following:

* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

If the app destination is different from the server root (`/`) you need to reconfigure `output.publicPath` in `webpack.config.prod.js` before building the app. See [webpack docs](https://webpack.js.org/configuration/output/#output-publicpath) for more information.

Check out this [blog post](http://www.latrovacommits.com/en/2017/12/14/how-publish-dist-folder-heroku/) showing two ways of deploying to Heroku.

## Why are test files placed alongside the file under test (instead of centralized)?

Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?

* The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
* Easy to open since they're in the same folder as the file being tested.
* Easy to create new test files when creating new source files.
* Short import paths are easy to type and less brittle.
* As files are moved, it's easy to move tests alongside.

That said, you can of course place your tests under **test** instead. Then Jest will simply look in /test to find your spec files.

## How do I debug?

Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
_Note:_ When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production above](https://github.com/coryhouse/react-slingshot/blob/master/docs/FAQ.md#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

1.  Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).
2.  Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.
3.  If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

## Debugging in Visual Studio Code:

* Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.
* Follow the instructions on how to [configure debugging in Visual Studio code](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#using-the-debugger).
* You can also add the following to `.vscode/launch.json` file to open the Chrome browser automatically and apply sourcemaps.
* Start the application, then click the green play icon in Visual Studio Code to start debugging.

**example launch.json**
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

Don't see your favorite code editor debugging configuration here? Submit a PR and we'll be glad to add it to the FAQ.md.

## Why does the build use npm scripts instead of Gulp or Grunt?

In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

## Why does package.json reference the exact version?

This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, we'll test them and then introduce them into React Slingshot. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

## How do I handle images?

Via [Webpack's file loader](https://github.com/webpack/file-loader). Example:

```html
<img src={require('./src/images/myImage.jpg')} />
```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

## I'm getting an error when running npm install: Failed to locate "CL.exe"

On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

## I can't access the external URL for Browsersync

To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing. Alternatively, you can use a tool like [localtunnel](https://localtunnel.github.io/www/) or [ngrok](https://ngrok.com) to expose your app via a public URL. This way, you can interact with the Browsersync hosted app on any device.

## What about the Redux Devtools?

Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

## Hot reloading isn't working!

Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.

## How do I setup code coverage reporting?

Use the `npm run test:cover` command to run the tests, building a code coverage report. The report is written to `/coverage/lcov-report/index.html`. Slingshot provides a script for this:

```bash
npm run open:cover
```

You can add code coverage metrics to your `README.md` file and pull by integrating with [Coveralls](https://coveralls.io/).

1.  Sign in to Coveralls with your GitHub account.
2.  Authorise Coveralls to access your repositories.
3.  Choose 'Add Repo' and select your repo.

That's it! Travis will now execute the `npm run test:cover:travis` script after a successful build, which will write the coverage report in the standard lcov format and send it directly to Coveralls. The environment variables provided for travis jobs are used to automatically target the correct Coveralls project, as long as it is set up as described above.

You can get the badge from the Coveralls website.
