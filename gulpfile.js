var gulp = require("gulp");
var screeps = require("gulp-screeps");

// Environments
var private = require("./env.private.js");

gulp.task("watch", function() {
  gulp.watch("*.js", ["screeps"]);
});

gulp.task("screeps", function() {
  gulp.src("*.js").pipe(screeps(private));
});
