require('./gulp-scripts/compile-css');
require('./gulp-scripts/compile-js');
const argv = require('yargs').argv;
const gulp = require('gulp');
const path = require('path');
const http = require('http');
const fs = require('fs');

const logCyan = str => `\x1b[36m${str}\x1b[0m`;
const logYellow = str => `\x1b[33m${str}\x1b[0m`;
const logRed = str => `\x1b[31m${str}\x1b[0m`;

if (!argv.fromscript) {
    console.error(logRed('\nRunning gulp task directly is deprecated. Please use:\n'))
    console.info(`${logCyan('yarn dev')} ${logYellow('<path-to-template>')} OR ${logCyan('yarn mail')} ${logYellow('<path-to-email>')}\n`);
    process.exit(1);
}

gulp.task('serve', () => {
    http.createServer((req, res) => {
        const url = req.url;
        let filePath;

        if (url === '/') {
            filePath = path.join(argv.path, 'html', 'index.html');
        } else if (url === '/article.html') {
            filePath = path.join(argv.path, 'html', 'article.html');
        } else {
            const fileExtension = path.extname(url);
            if (fileExtension === '.css' || fileExtension === '.js') {
                if (url.startsWith('/build/')) {
                    filePath = path.join(argv.path, 'build', url.substring(7)); // remove the /build/ part
                } else if (url.startsWith('/')) {
                    filePath = path.join(argv.path, 'build', url.substring(1)); // remove the leading slash
                } else {
                    filePath = path.join(argv.path, 'build', url); // no leading slash or /build/
                }
            } else {
                res.statusCode = 404;
                res.end('Not Found');
                return;
            }
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                const fileExtension = path.extname(filePath);
                let mimeType;

                switch (fileExtension) {
                    case '.css':
                        mimeType = 'text/css';
                        break;
                    case '.js':
                        mimeType = 'application/javascript';
                        break;
                    case '.html':
                        mimeType = 'text/html';
                        break;
                    default:
                        mimeType = 'application/octet-stream';
                }

                res.setHeader('Content-Type', mimeType);
                res.end(data);
            }
        });
    }).listen(3000, () => {
        console.log('Server listening on port 3000');
    });
});

const initWatch = () => gulp.watch([path.join(argv.path, '**/*'), `!${path.join(argv.path, 'build/**')}`], { ignoreInitial: false }, gulp.series('build'))

// Compile MJML template. Usage: `yarn gulp mail --path <dir>`
gulp.task('mail', () => gulp.watch([path.join(argv.path, '**/*'), `!${path.join(argv.path, 'build/**')}`], { ignoreInitial: false }, gulp.series('compileEmail')));

// Compile client template. Usage: `yarn gulp build --path vanilla-template/newsroom`
gulp.task('build', gulp.parallel('compileJs', 'compileStyles'));

// Compile client template and watch for file changes. Usage: `yarn gulp watch --path vanilla-template/newsroom`
gulp.task('watch', initWatch);

// Compile client template, watch for file changes and host on localhost. Usage: `yarn gulp localhost --path vanilla-template/newsroom`
gulp.task('localhost', () => {
    initWatch();
    gulp.series('serve')();
});
