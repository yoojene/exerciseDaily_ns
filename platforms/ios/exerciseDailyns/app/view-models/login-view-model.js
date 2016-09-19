"use strict";
var observable = require('data/observable');
var firebase = require("nativescript-plugin-firebase");
var frameModule = require("ui/frame");
var LoginViewModel = (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel() {
        _super.call(this);
        // Initialize default values.
        this.updateEmail();
    }
    Object.defineProperty(LoginViewModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (this._email !== value) {
                this._email = value;
                this.notifyPropertyChange("email", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LoginViewModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            if (this._password !== value) {
                this._password = value;
                this.notifyPropertyChange("password", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LoginViewModel.prototype, "loginmessage", {
        get: function () {
            return this._loginmessage;
        },
        set: function (value) {
            this._loginmessage = value;
            this.notifyPropertyChange("loginmessage", value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ;
    LoginViewModel.prototype.updateEmail = function () {
        this.email = 'eugene.cross@gmail.com';
        this.password = 'sl1210';
    };
    ;
    LoginViewModel.prototype.updateLoginMessage = function (value) {
        console.log('calling updateLoginMessage');
        this.loginmessage = value;
    };
    ;
    LoginViewModel.prototype.doStuff = function () {
        console.log('done something');
    };
    LoginViewModel.prototype.signIn = function () {
        console.log('signin from LoginViewModel');
        var that = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.password
        }).then(function (result) {
            console.log(JSON.stringify(result));
            //  frameModule.topmost().navigate("views/home/landing");
            var navigationEntry = {
                moduleName: "views/home/landing",
                clearHistory: true
            };
            frameModule.topmost().navigate(navigationEntry);
        }, function (error) {
            console.log(JSON.stringify(error));
            that.updateLoginMessage(error);
        });
    };
    return LoginViewModel;
}(observable.Observable));
exports.LoginViewModel = LoginViewModel;
//# sourceMappingURL=login-view-model.js.map