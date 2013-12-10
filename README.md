# grunt-gini

> Grunt plugin for Gini PHP Framework

## Getting Started
This plugin requires Grunt `~0.4.2`

```shell
npm install grunt-gini --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gini');
```

### What is Gini PHP Framework?
Look at [HERE](http://github.com/iamfat/gini).

## The "gini" task

### gini:bower

gini:bower task will generate bower.json according gini.json from gini module. bower dependencies could be configured in Gruntfile.js.

####options
```js
grunt.initConfig({
    // Task configuration.
    gini: {
        bower: {
            options: {
                dependencies: {
                    "bootstrap": "~3.0.2",
                    "font-awesome": "~4.0.3",
                    "requirejs": "~2.1.9",
                    "html5shiv": "~3.7.0",
                    "respond": "~1.4.1",
                    "require-css": "~0.1.0"
                }
            }
        }
    },
});
```


### gini:update

gini:update task will automatically run following gini cli:

```shell
gini app update-cache
gini app update-web
gini app update-orm
```