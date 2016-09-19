"use strict";
var landing_view_model_1 = require("../../view-models/landing-view-model");
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new landing_view_model_1.LandingViewModel();
    console.log('we are on landing');
}
exports.pageLoaded = pageLoaded;
;
//# sourceMappingURL=landing.js.map