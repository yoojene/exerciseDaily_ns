import observable = require('data/observable');
// import { GestureTypes, GestureEventData } from "ui/gestures";

export class LandingViewModel extends observable.Observable {

	constructor(){

		super();

	}

	public tappedRed(){

		console.log('Red!')
	}

	public tappedGreen(){

		console.log('Green!')
	}

	public tappedBlue(){

		console.log('Blue!')
	}

	public tappedYellow(){

		console.log('Yellow!')
	}

}
