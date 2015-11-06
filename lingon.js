#!/usr/bin/env node

var lingon = require('lingon');
var gitDeploy = require('lingon-git-deploy');
var lr = require('lingon-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

lr(lingon);

lingon.global.title = 'Apollo';
lingon.global.description = 'Apollo';
lingon.global.url = 'https://spotify.github.io/apollo';

lingon.preProcessors.push('scss', function(context, globals) {
  return sass({includePaths: [__dirname]});
});
lingon.postProcessors.push('scss', function() {
  return autoprefixer();
});

gitDeploy(lingon, {
  remote: 'git@ghe.spotify.net:dflemstr/apollo-oss-site.git',
  branch: 'gh-pages'
});

// gitDeploy(lingon, {
//   remote: 'git@github.com:spotify/spotify.github.io.git',
//   branch: 'master'
// });
