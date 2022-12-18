"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBW_women = exports.IBW_men = exports.BMR_women = exports.BMR_men = exports.oneRepMaxWathan = exports.oneRepMaxOConner = exports.oneRepMaxMayhew = exports.oneRepMaxLombardi = exports.oneRepMaxMcGlothin = exports.oneRepMaxBrzycki = exports.oneRepMaxEpley = void 0;
function oneRepMaxEpley(weight, reps) {
    return Number((weight * (1 + reps / 30)).toFixed(2));
}
exports.oneRepMaxEpley = oneRepMaxEpley;
function oneRepMaxBrzycki(weight, reps) {
    return Number((weight * 36 / (37 - reps)).toFixed(2));
}
exports.oneRepMaxBrzycki = oneRepMaxBrzycki;
function oneRepMaxMcGlothin(weight, reps) {
    return Number((100 * weight / (101.3 - 2.67123 * reps)).toFixed(2));
}
exports.oneRepMaxMcGlothin = oneRepMaxMcGlothin;
function oneRepMaxLombardi(weight, reps) {
    return Number((weight * Math.pow(reps, 0.1)).toFixed(2));
}
exports.oneRepMaxLombardi = oneRepMaxLombardi;
function oneRepMaxMayhew(weight, reps) {
    return Number((100 * weight / (52.2 + 41.9 * Math.exp(-0.055 * reps))).toFixed(2));
}
exports.oneRepMaxMayhew = oneRepMaxMayhew;
function oneRepMaxOConner(weight, reps) {
    return Number((weight * (1 + reps / 40)).toFixed(2));
}
exports.oneRepMaxOConner = oneRepMaxOConner;
function oneRepMaxWathan(weight, reps) {
    return Number((100 * weight / (48.8 + 53.8 * Math.exp(-0.075 * reps))).toFixed(2));
}
exports.oneRepMaxWathan = oneRepMaxWathan;
function BMR_men(weight, height, age) {
    return Number((10 * weight + 6.25 * height - 5 * age + 5).toFixed(2));
}
exports.BMR_men = BMR_men;
function BMR_women(weight, height, age) {
    return Number((10 * weight + 6.25 * height - 5 * age - 161).toFixed(2));
}
exports.BMR_women = BMR_women;
function IBW_men(height, age) {
    return Number((50 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
}
exports.IBW_men = IBW_men;
function IBW_women(height, age) {
    return Number((45.5 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
}
exports.IBW_women = IBW_women;
