(function(global) {
  var map = {
    // '@angular': 'lib/@angular',
    // 'rxjs': 'lib/rxjs',
    '@angular/core': 'lib/@angular/core/bundles/core.umd.js',
    '@angular/common': 'lib/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'lib/@angular/http/bundles/http.umd.js',
    '@angular/http/testing': 'lib/@angular/http/bundles/http-testing.umd.js',
    '@angular/router': 'lib/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.js',
    '@ng-bootstrap/ng-bootstrap': 'lib/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
    'rxjs': 'lib/rxjs',
    'underscore': 'lib/underscore/underscore-min.js',
  };
  System.config({
     map: map,
     packages: {
         app: {
           main: './bootstrap.js',
           defaultExtension: 'js'
         },
       rxjs: {
         defaultExtension: 'js' //Added rxjs
       }
     }
  });
})(this);
