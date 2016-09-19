import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "../../view-models/main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
		  console.log("Page Loaded navigatingTo");
}
