import gulp from "gulp";
import yargs from "yargs";
import sass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import del from "del";
import webpack from "webpack-stream";
import named from "vinyl-named";
import zip from "gulp-zip";
import replace from "gulp-replace";
import info from "./package.json";

const PRODUCTION = yargs.argv.prod;

const paths = {
    styles: {
        src: [
            "src/assets/admin/scss/coupon-central.scss",
            "src/assets/admin/scss/coupon-editor.scss",
            "src/assets/admin/scss/store-editor.scss",
        ],
        dest: "assets/admin/css",
    },
    scripts: {
        src: [
            "src/assets/admin/js/coupon-editor.js",
            "src/assets/admin/js/store-editor.js",
        ],
        dest: "assets/admin/js",
    },
    other: {
        src: [
            "src/assets/**/**/*",
            "!src/assets/admin/{images,js,scss}",
            "!src/assets/admin/{images,js,scss}/**/*",
        ],
        dest: "assets",
    },
    package: {
        src: [
            "**/*",
            "!.vscode",
            "!node_modules{,/**}",
            "!packaged{,/**}",
            "!.git{,/**}",
            "!.babelrc",
            "!.gitignore",
            "!gulpfile.babel.js",
            "!package.json",
            "!package-lock.json",
            "!LICENSE",
            "!README.md",
        ],
        dest: "packaged",
    },
};

export const clean = () => del(["assets"]);

export const styles = () => {
    return gulp
        .src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: "ie8" })))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.dest));
};

export const watch = () => {
    gulp.watch("src/assets/admin/scss/**/*.scss", styles);
    gulp.watch("src/assets/admin/js/**/*.js", scripts);
    gulp.watch(paths.other.src, copy);
};

export const copy = () => {
    return gulp.src(paths.other.src).pipe(gulp.dest(paths.other.dest));
};

export const scripts = () => {
    return gulp
        .src(paths.scripts.src)
        .pipe(named())
        .pipe(
            webpack({
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: ["@babel/preset-env"],
                                },
                            },
                        },
                    ],
                },
                output: {
                    filename: "[name].js",
                },
                externals: {
                    jquery: "jQuery",
                },
                devtool: !PRODUCTION ? "inline-source-map" : false,
                mode: PRODUCTION ? "production" : "development",
            }),
        )
        .pipe(gulp.dest(paths.scripts.dest));
};

export const compress = () => {
    return gulp
        .src(paths.package.src, { base: "../", dot: true })
        .pipe(zip(`${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dest));
};

export const dev = gulp.series(
    clean,
    gulp.parallel(styles, scripts, copy),
    watch,
);

export const build = gulp.series(clean, gulp.parallel(styles, scripts, copy));

export const bundle = gulp.series(build, compress);

export default dev;
