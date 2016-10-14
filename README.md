# postcssdemo

##Demo01
- setup and test postcss via Gulp


##Demo02
- setup and test postcss via Grunt
- Gruntfile.js require a node_modules installed relatvie and thus install the npm solely for this demo



##Demo03
- using postcss plugin to solve the browser capability issues
- *Autofixer* plugin can detect the add the vender prefix


##Demo04
- `gulp-postcss` plugin to add `@import` rule which can combine multiple css files into the main style in order to reduce the `http` requests needed
- `css-mqpacker` plugin to combine multiple `@media` queries into one
- `cssnano` plugin packs minify and optimize the css file

##Demo05
- using postcss `precss` plugin to work like preprocessor such as Sass.
- Syntax of `$var`, `@if @else`, `@for @each` is same as Sass, `@minxin` is a bit different
- implement via webpack module bundler (better using gulp if just need to see outcome of the complied css file itself)
- `webpack-dev-server` and verify at localhost:8080


##Demo06
-using postcss together with the sass
