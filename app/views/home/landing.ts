import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import { LandingViewModel } from "../../view-models/landing-view-model";

export function pageLoaded(args: EventData){

	// Get the event sender
	let page = <Page>args.object;
	page.bindingContext = new LandingViewModel();
	console.log('we are on landing');


};
