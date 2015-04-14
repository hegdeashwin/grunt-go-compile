# grunt-go-compile

> [The plugin is under development.]

The grunt-go-compile plugin give the you one of the way to provide Go files to actual Go compile to run and build in the form of grunt tasks.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-go-compile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-go-compile');
```

## The "go" task

### Overview
In your project's Gruntfile, add a section named `go` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  go: {
    compile: {
      options: {
        // Task-specific options go here.
      },
      files: {
        // Target-specific file lists and/or options go here.
      }
    }    
  }
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

### Usage Examples

```js
grunt.initConfig({
  go: {
    compile: {
      options: {},
      files: {
        'tmp/HelloWorld.go': 'test/fixtures/HelloWorld.go'
      }
    }
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  go: {
    options: {
      separator: ': '
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Author & Contributors

Developed &amp; maintained by author: <b>Ashwin Hegde</b><br>
Follow me at: <a href="https://github.com/hegdeashwin" target="_blank">github</a> | <a href="http://in.linkedin.com/in/hegdeashwin" target="_blank">Linkedin</a> | <a href="https://twitter.com/hegdeashwin3" target="_blank">Twitter</a>

We really appreciate all kind of contributions. Special thanks to <a href="//github.com/hegdeashwin/grunt-go-compile/graphs/contributors" target="_blank">contributors</a> for using and supporting grunt-go-compile.

To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on following link, or vote for the ones that are already registered.
<br>Tracking: <a href="https://github.com/hegdeashwin/grunt-go-compile/issues" target="_blank">https://github.com/hegdeashwin/grunt-go-compile/issues</a>

## Release History
_(Nothing yet)_
