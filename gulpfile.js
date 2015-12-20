var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var path  = require("path");

var paths = {
  es6: ['./src/**/*.js'],
  es5: './dist',
  // Must be absolute or relative to source map
  sourceRoot: path.join(__dirname, 'src')
};

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', function(error) {
      console.error('Transpiling error');
      console.log(error);
      this.emit('end');
    })
    .pipe(sourcemaps.write(".", { sourceRoot: paths.sourceRoot }))
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['babel']);
});

gulp.task('default', ['watch']);
