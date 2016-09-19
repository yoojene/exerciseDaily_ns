"use strict";
var main_view_model_1 = require("../../view-models/main-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    console.log("Page Loaded navigatingTo");
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=main-page.js.map