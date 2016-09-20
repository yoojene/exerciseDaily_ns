import observable = require('data/observable');
import firebase = require("nativescript-plugin-firebase");
import frameModule = require("ui/frame");

export class LoginViewModel extends observable.Observable {

	private _email: string;
	private _password: string;
	private _loginmessage : string;

	get email(): string {
		return this._email;
	};
	get password(): string {
		return this._password;
	};

	get loginmessage(){
		return this._loginmessage;
	}

	set email(value: string) {
			if (this._email !== value) {
					this._email = value;
					this.notifyPropertyChange("email", value)
			}
	};

	set password(value: string) {
			if (this._password !== value) {
					this._password = value;
					this.notifyPropertyChange("password", value)
			}
	};

	set loginmessage(value: string){

		this._loginmessage = value;
		this.notifyPropertyChange("loginmessage", value);

	}

	constructor() {
			super();

			// Initialize default values.
			this.updateEmail();

	};

	private updateEmail() {

		this.email = 'eugene.cross@gmail.com'
		this.password = ''

	};

	updateLoginMessage(value: string){
		console.log('calling updateLoginMessage');
		this.loginmessage = value;

	};

	public doStuff(){

		console.log('done something');
	}

	public signIn() {

		console.log('signin from LoginViewModel');

		let that = this;

		firebase.login({
			type: firebase.LoginType.PASSWORD,
			email: this.email,
    	password: this.password

		}).then(
			function(result){
				console.log(JSON.stringify(result));
				//  frameModule.topmost().navigate("views/home/landing");
				let navigationEntry = {
    			moduleName: "views/home/landing",
    			clearHistory: true
				};
				frameModule.topmost().navigate(navigationEntry);

			},
			function(error){
				console.log(JSON.stringify(error));
				that.updateLoginMessage(error);
			}
		);

	}


}
