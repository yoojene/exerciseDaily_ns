import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import { LoginViewModel } from "../../view-models/login-view-model";


export function onPageLoaded(args: EventData){

	// Get the event sender
	let page = <Page>args.object;

	page.bindingContext = new LoginViewModel();
		console.log("onPageLoaded");
}
