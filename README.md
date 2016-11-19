# Setup
Install dependencies
```
npm install
```

## Mode 1: Build JS (es6) with Grunt
Install grunt-cli globally:
```
npm install -g grunt-cli
```
## Grunt tasks
###### default
```
grunt
```
Watch all the JS files included in js folder. For any change detected, Grunt will execute the browserify task (translate ES6).
The watch task keeps running until the task is terminated. To terminate the task press `Ctrl + C` on the terminal.
###### build
```
grunt build
```
This task executes the browserify task once and stops.
Translate ES6.



## Mode 2: Build JS (es6) with Gulp
Install gulp-cli globally:
```
npm install -g gulp-cli
```
## Gulp task
###### default
```
gulp
```
This task executes the browserify task once and stops.
Translate ES6 and minified.