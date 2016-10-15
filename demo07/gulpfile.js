var gulp = require('gulp');
var postcss = require('gulp-postcss');
var bem = require('postcss-bem');
var nested = require('postcss-nested');



gulp.task('css', function () {
  var processors = [bem,nested
  ];
  return gulp.src('./src/*.css')
  .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});






/* specify the syntax to bem
var processors = [
    bem({style: 'bem'}),
    nested
];

processors: [
    require('postcss-bem')({style: 'bem'}),
    require('postcss-nested')()
]

*/