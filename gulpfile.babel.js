import buildbranch from 'buildbranch';
import rimraf from 'rimraf';
import each from 'each-done';
import express from 'express';
import fs, { outputFile as output } from 'fs-extra';
import { html } from 'commonmark-helpers';
import numbers from 'typographic-numbers';
import numd from 'numd';
import RSS from 'rss';
import { merge, pipe, prop, head, splitEvery } from 'ramda';
import sequence from 'run-sequence';
import renderTweet from 'tweet.md';
import autoprefixer from 'autoprefixer';
import pcssImport from 'postcss-import';
import pcssInitial from 'postcss-initial';
import webpack from 'webpack';

import gulp, { dest, src, start as _start, task as _task } from 'gulp';
import gulpJade from 'gulp-jade';
import rename from 'gulp-rename';
import watch from 'gulp-watch';
import { log, PluginError } from 'gulp-util';
import jimp from 'gulp-jimp';
import postcss from 'gulp-postcss';

import articleData from 'article-data';
import getStats from './stats.js';
import underhood from './.underhoodrc.json';
import webpackConfig from './webpack.config.babel.js';

import authorRender from './helpers/author-render';
import bust from './helpers/bust';
import lastUpdated from './helpers/last-updated';

import authors from './dump';
const latestInfo = (head(authors) || {}).info;

const start = _start.bind(gulp);
const task = _task.bind(gulp);

const jadeDefaults = {
  pretty: true,
  locals: {
    site: underhood.site,
    latestInfo,
    numbers: input => numbers(input, { locale: 'ru' }),
    people: numd('человек', 'человека', 'человек'),
  },
};

const getOptions = (opts = {}) =>
  Object.assign({}, jadeDefaults, opts, {
    locals: Object.assign({}, jadeDefaults.locals, opts.locals),
  });

const jade = opts => gulpJade(getOptions(opts));
const firstTweet = pipe(prop('tweets'), head);
const render = pipe(renderTweet, html);

/**
 * MAIN TASKS
 */
task('index', ['css'], () => {
  const authorsToPost = authors.filter(author => author.post !== false);
  return src('layouts/index.jade')
    .pipe(jade({
      locals: {
        title: `Сайт @${underhood.underhood}`,
        desc: underhood.underhoodDesc,
        underhood,
        currentAuthor: head(authors),
        authors: splitEvery(3, authorsToPost),
        helpers: { bust, firstTweet, render },
      },
    }))
    .pipe(rename({ basename: 'index' }))
    .pipe(dest('dist'));
});

task('stats', ['css'], () =>
  src('layouts/stats.jade')
    .pipe(jade({
      locals: {
        title: `Статистика @${underhood.underhood}`,
        url: 'stats/',
        desc: underhood.underhoodDesc,
        lastUpdated,
        underhood,
        stats: getStats(authors),
        helpers: { bust },
      },
    }))
    .pipe(rename({ dirname: 'stats' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(dest('dist')));

task('md-pages', ['css'], done => {
  each([
    { name: 'about', title: 'О проекте' },
    { name: 'authoring', title: 'Авторам' },
    { name: 'instruction', title: 'Инструкция' },
  ], item => {
    const page = fs.readFileSync(`./pages/${item.name}.md`, { encoding: 'utf8' });
    const article = articleData(page, 'D MMMM YYYY', 'en'); // TODO change to 'ru' after moment/moment#2634 will be published
    return src('layouts/article.jade')
      .pipe(jade({
        locals: merge(article, {
          title: item.title,
          url: item.name + '/',
          underhood,
          helpers: { bust },
        }),
      }))
      .pipe(rename({ dirname: item.name }))
      .pipe(rename({ basename: 'index' }))
      .pipe(dest('dist'));
  }, done);
});

task('rss', done => {
  const feed = new RSS(underhood.site);
  const authorsToPost = authors.filter(author => author.post !== false);
  authorsToPost.forEach(author => {
    feed.item({
      title: author.username,
      description: render(firstTweet(author)),
      url: `https://backendsecret.ru/${author.authorId}/`,
      date: firstTweet(author).created_at,
    });
  });
  output('dist/rss.xml', feed.xml({ indent: true }), done);
});

task('authors', ['css'], done => {
  const authorsToPost = authors.filter(author => author.post !== false);
  each(authorsToPost, author => {
    return src('./layouts/author.jade')
      .pipe(jade({
        pretty: true,
        locals: {
          title: `Неделя @${author.username} в @${underhood.underhood}`,
          author, underhood,
          helpers: { authorRender, bust },
        },
      }))
      .pipe(rename({ dirname: author.authorId }))
      .pipe(rename({ basename: 'index' }))
      .pipe(dest('dist'));
  }, done);
});

task('userpics', () =>
  src('dump/images/*-image*')
    .pipe(jimp({ resize: { width: 96, height: 96 }}))
    .pipe(dest('dist/images')));

task('current-userpic', () =>
  head(authors) && src(`dump/images/${head(authors).authorId}-image*`)
    .pipe(jimp({ resize: { width: 192, height: 192 }}))
    .pipe(rename('current-image'))
    .pipe(dest('dist/images')));

task('current-banner', () =>
  head(authors) && src(`dump/images/${head(authors).authorId}-banner*`)
    .pipe(rename('current-banner'))
    .pipe(dest('dist/images')));

task('current-media', ['current-userpic', 'current-banner']);

task('css', () =>
  src('css/styles.css')
    .pipe(postcss([
      pcssImport,
      pcssInitial,
      autoprefixer,
    ]))
    .pipe(dest('dist/css')));

task('js', done => {
  webpack(webpackConfig, err => {
    if (err) throw new PluginError('webpack', err);
    done();
  });
});

task('static', () =>
  src([
    'static/**',
    'static/.**',
    'node_modules/bootstrap/dist/**',
  ]).pipe(dest('dist')));

task('server', () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(4000);
  log('Server is running on http://localhost:4000');
});

/**
 * FLOW
 */
task('clean', done => rimraf('dist', done));

task('html', ['stats', 'authors', 'index', 'rss', 'md-pages']);
task('build', done => sequence( 'html', 'css', 'js', 'stats', 'static', 'userpics', 'current-media', done));

task('default', done => sequence('clean', 'watch', done));

task('watch', ['server', 'build'], () => {
  watch(['**/*.jade'], () => start('html'));
  watch(['css/**/*.css'], () => start('css'));
  watch('js/**/*.js', () => start('js'));
  watch('static/**', () => start('static'));
});

task('deploy', ['build'], done =>
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done));
