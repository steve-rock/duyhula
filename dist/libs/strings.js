"use strict";
libs.string_matching_title = function (movieInfo, titleSearch, regex, replacement) {
    if (regex === void 0) {
        regex = true;
    }
    if (replacement === void 0) {
        replacement = '+';
    }
    var matching = slugify(movieInfo.title, {
        lower: true,
        replacement: replacement,
        remove: /[*+~.()'"!:@-]/g,
    }) ==
        slugify(titleSearch, { lower: true, replacement: replacement, remove: /[*+~.()'"!:@-]/g });
    if (matching) {
        return true;
    }
    if (!regex) {
        return false;
    }
    var reg = new RegExp('^' + movieInfo.title + ' *.+', 'gi');
    return titleSearch.match(reg) ? true : false;
};
libs.string_provider = function (provider, rank) {
    if (rank === void 0) {
        rank = 0;
    }
    if (!rank) {
        return 'Server ' + provider[0].toUpperCase();
    }
    return 'Server ' + provider[0].toUpperCase() + rank;
};
