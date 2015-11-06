#!/usr/bin/env node

var lingon = require('lingon');
var gitDeploy = require('lingon-git-deploy');
var lr = require('lingon-livereload');
var sass = require('gulp-sass');

lr(lingon);

lingon.global.title = 'Apollo';
lingon.global.description = 'Apollo';
lingon.global.url = 'https://spotify.github.io/apollo';

lingon.preProcessors.push('scss', function(context, globals) {
  return sass({includePaths: [__dirname]});
});

// TODO
// gitDeploy(lingon, {
//   remote: 'git@ghe.spotify.net:foss/spotify-github.git',
//   branch: 'gh-pages'
// });

// gitDeploy(lingon, {
//   remote: 'git@github.com:spotify/spotify.github.io.git',
//   branch: 'master'
// });
