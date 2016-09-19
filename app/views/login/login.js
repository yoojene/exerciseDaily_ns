"use strict";
var login_view_model_1 = require("../../view-models/login-view-model");
function onPageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new login_view_model_1.LoginViewModel();
    console.log("onPageLoaded");
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=login.js.map