//Подключаем модули галпа
var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var terser = require("gulp-terser");
var del = require("del");
var browserSync = require("browser-sync").create();
var sourcemaps = require("gulp-sourcemaps");

//Массив файлов со скриптами.js.Файлы нужно писать в том порядке, в котором они должны располагаться в объединенном файле
var jsFiles = [
  "./src/js/menu-actions.js",
  "./src/js/your-account-open-close.js",
  "./src/js/slider.js",
];

function sassTask() {
  return (
    gulp
    .src("./src/scss/**/*.scss")
    // .pipe(sourcemaps.init())
    .pipe(sass())
    //.pipe(sourcemaps.write("./"))
    .pipe(concat("style.css"))

    //Добавить префиксы
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )

    //Минификация CSS
    .pipe(
      cleanCSS({
        level: 2,
      })
    )

    //Выходная папка для стилей
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream())
  );
}

//Таск на скрипты JS
function scripts() {
  //Шаблон для поиска файлов .js
  //Все файлы по шаблону '.src/js/**/*.js'
  return (
    gulp
    .src(jsFiles)

    //Объединение файлов в один
    .pipe(concat("script.js"))

    //Минификация JS
    .pipe(terser())

    //Выходная папка для скриптов
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream())
  );
}

//Удалить всё в указанной папке
function clean() {
  return del(["build/*"]);
}

//Просматривать файлы
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  //При изменении любого .scss-файла в папке scss запускать компиляюцию этого .scss-файла в .css-файл автоматически
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
  //Следить за .js-файлами
  gulp.watch("./src/js/**/*.js", scripts);
  //При изменении HTML запустить синхронизацию
  gulp.watch("./src/*.html").on("change", browserSync.reload);
}

gulp.task("sass", sassTask);

//Таск, вызывающий функцию scripts
gulp.task("scripts", scripts);

//Таск для очистки папки build
gulp.task("del", clean);

//Таск для отслеживания изменений
gulp.task("watch", watch);

//Таск для удаления файлов в папке build и запуска styles и scripts
gulp.task("build", gulp.series(clean, sassTask, scripts));

//Таск запускает таск build и watch последовательно
gulp.task("dev", gulp.series("build", "watch"));