# Welcome to Advanced AngularJS!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday - Tuesday: 8:30am to 4:30pm (Tuesday end at 3:45pm)

Breaks:

- Morning: 10am to 10:15am
- Lunch: Noon to 12:45pm
- Afternoon: 2:45pm to 3:00pm

## Course Outline

JavaScript topics will be included as needed into the AngularJS content

- Day 1 - Service, Directives
- Day 2 - Directives, Unit Testing

## Links

### Instructor's Resources

- [Accelebrate](http://www.accelebrate.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Overview

This project configuration bundles JavaScript files with Webpack transpiling ES2017 code to run in an ES5.1 environment.

## Application Setup

Step 1. Install Node.js version 7 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository. Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in those files. Then re-run the command above.

This setup has been completed successfully when you receive a message similar to this one:

```bash
[0] Child html-webpack-plugin for "index.html":
[0]     chunk    {0} index.html 541 kB [entry] [rendered]
[0]         [0] ./~/lodash/lodash.js 540 kB {0} [built]
[0]         [1] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 649 bytes {0} [built]
[0]         [2] (webpack)/buildin/global.js 509 bytes {0} [built]
[0]         [3] (webpack)/buildin/module.js 517 bytes {0} [built]
[0] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. If a web browser did not open automatically for you, then open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The AngularJS web application should load and be usable.

### To Modify the Web Application

Step 6. Open your favorite text editor (such as [[Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets. The web browser should reload automatically with the changes.

#### Recommended Editor Packages/Extensions

For Visual Studio Code:

- HTMLHint (kaufman.HTMLHint)
- ESLint (dbaeumer.vscode-eslint)
- SASS Lint (glen-84.sass-lint)

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - builds the web app, and starts the web app and the rest app
- **npm test** - run unit tests
- **npm run clean** - removes the **dist** folder
- **npm run webpack:w** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist** folder
- **npm run webpack** - runs webpack once to process web app files, and deploys them to the **dist** folder
- **npm run web** - starts the webpack development web server
- **npm run rest** - starts the JSON REST server
- **npm run tdd** - starts the application in test-driven development mode

## Useful Resources

- [AngularJS](https://angularjs.org/)
- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Redux-Thunk](https://github.com/gaearon/redux-thunk)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [SASS](http://sass-lang.com/)
- [Bootstrap](https://v4-alpha.getbootstrap.com/)
