var gulp = require( 'gulp' );
var minifyCSS = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'minifyCSS', function () {
  gulp.src( './assets/css/styles.css' )
    .pipe( minifyCSS())
    .pipe( rename( 'styles.min.css' ))
    .pipe( gulp.dest( './assets/css/' ));
});

gulp.task( 'inlineCSS', [ 'minifyCSS' ], function () {
  gulp.src( './assets/css/styles.min.css' )
    .pipe( rename( 'styles.hbs' ))
    .pipe( gulp.dest( './partials' ));
});

gulp.task( 'minifyJS', function () {
  gulp.src( './assets/js/scripts.js' )
    .pipe( uglify())
    .pipe( rename( 'scripts.min.js' ))
    .pipe( gulp.dest( './assets/js/' ));
});

gulp.task('watch', function() {
  gulp.watch( './assets/css/*.css', [ 'minifyCSS', 'inlineCSS' ]);
  gulp.watch( './assets/js/*.js', [ 'minifyJS' ]);
});

gulp.task( 'default', [ 'minifyCSS', 'minifyJS' ]);
