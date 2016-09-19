"use strict";
var observable = require('data/observable');
// import { GestureTypes, GestureEventData } from "ui/gestures";
var LandingViewModel = (function (_super) {
    __extends(LandingViewModel, _super);
    function LandingViewModel() {
        _super.call(this);
    }
    LandingViewModel.prototype.tappedRed = function () {
        console.log('Red!');
    };
    LandingViewModel.prototype.tappedGreen = function () {
        console.log('Green!');
    };
    LandingViewModel.prototype.tappedBlue = function () {
        console.log('Blue!');
    };
    LandingViewModel.prototype.tappedYellow = function () {
        console.log('Yellow!');
    };
    return LandingViewModel;
}(observable.Observable));
exports.LandingViewModel = LandingViewModel;
//# sourceMappingURL=landing-view-model.js.map