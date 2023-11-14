/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
function calculateA(b, c) {
    return Math.sqrt((c * c) - (b * b));
}
function calculateB(a, c) {
    return Math.sqrt((c * c) - (a * a));
}
function calculateC(a, b) {
    return Math.sqrt((a * a) + (b * b));
}
var HistoryItem = /** @class */ (function () {
    function HistoryItem(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    return HistoryItem;
}());
var calcHistory = [];
document.querySelector('#show-history').addEventListener('click', function (e) {
    var output = '-- History --\n\n';
    for (var _i = 0, calcHistory_1 = calcHistory; _i < calcHistory_1.length; _i++) {
        var history_1 = calcHistory_1[_i];
        output += "a=".concat(history_1.a, ", b=").concat(history_1.b, ", c=").concat(history_1.c, "\n");
    }
    alert(output);
});
// first formular (Calculate C)
var calcCForm = document.querySelector('#calc-c');
calcCForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var aInput = calcCForm.querySelector('[name=a-input]');
    var bInput = calcCForm.querySelector('[name=b-input]');
    var result = calcCForm.querySelector('[name=result]');
    var c = calculateC(aInput.valueAsNumber, bInput.valueAsNumber);
    result.value = "".concat(c);
    calcHistory.push(new HistoryItem(aInput.valueAsNumber, bInput.valueAsNumber, c));
});
// second formular (Calculate A)
var calcAForm = document.querySelector('#calc-a');
calcAForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var bInput = calcAForm.querySelector('[name=b-input]');
    var cInput = calcAForm.querySelector('[name=c-input]');
    var result = calcAForm.querySelector('[name=result]');
    var a = calculateA(bInput.valueAsNumber, cInput.valueAsNumber);
    result.value = "".concat(a);
    calcHistory.push(new HistoryItem(a, bInput.valueAsNumber, cInput.valueAsNumber));
});
// third formular (Calculate B)
var calcBForm = document.querySelector('#calc-b');
calcBForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var aInput = calcBForm.querySelector('[name=a-input]');
    var cInput = calcBForm.querySelector('[name=c-input]');
    var result = calcBForm.querySelector('[name=result]');
    var b = calculateB(aInput.valueAsNumber, cInput.valueAsNumber);
    result.value = "".concat(b);
    calcHistory.push(new HistoryItem(aInput.valueAsNumber, b, cInput.valueAsNumber));
});

/******/ })()
;
//# sourceMappingURL=main.js.map