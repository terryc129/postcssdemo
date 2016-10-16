var gulp=require('gulp');
var postcss=require('gulp-postcss');
var lost = require('lost');
var colorblind = require('postcss-colorblind');
var pxtorem = require('postcss-pxtorem');
var styleGuide = require('postcss-style-guide');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');


gulp.task('css', function () {
  var processors = [lost,
    colorblind,
    pxtorem({
    prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing']
}),
    styleGuide({
    project: 'Auto Style Guide',
    theme:'1column'
})
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});


//seperate task for rtl
gulp.task('rtl', function () {
    return gulp.src('./dest/style.css')
        .pipe(rtlcss())
        .pipe(rename({ suffix: '-rtl' }))
        .pipe(gulp.dest('./dest'));
});

