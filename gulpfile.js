var gulp = require("gulp"),
  cssmin = require("gulp-clean-css");
var stylus = require("gulp-stylus");
gulp.task("default", function() {
  gulp
    .src("./source/css/style.styl")
    .pipe(stylus())
    .pipe(cssmin())
    .pipe(gulp.dest("./source/css/"));
});
