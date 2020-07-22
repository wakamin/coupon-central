import gulp from "gulp";
import zip from "gulp-zip";
import info from "./package.json";

const paths = {
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

export const compress = () => {
    return gulp
        .src(paths.package.src, { base: "../", dot: true })
        .pipe(zip(`${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dest));
};

export const bundle = gulp.series(compress);

export default bundle;
