import { ViewChild, Component, Input, OnInit, ViewContainerRef } from '../../../node_modules/@angular/core';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

declare var navigator: any;
declare var Notification: any;

var options: any = {
	"body": "Did you make a $1,000,000 purchase at Dr. Evil...",
	"icon": "images/ccard.png",
	"vibrate": [200, 100, 200, 100, 200, 100, 400],
	"tag": "request",
	"actions": [
		{ "action": "yes", "title": "Yes" },
		{ "action": "no", "title": "No" }
	]
};


@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
})
export class AppComponent {



	/**
	 * Code for service workers and notifications
	 */

	// private notifStatus: string;
	// private chrome_notif_key = "BBuUeWDakcQYiwM6YJir17ZTMZv6Nu_36dXmXo0HwlXh7eZAn-QDubFttDj7MwEWuMnKD03KW-Sbz9wRcvrCWgk";

	// constructor() {

	// 	var serviceWorkerRegister: any;
	// 	var self = this;

	// 	if ('serviceWorker' in navigator) {
	// 		console.log('service worked is available in navigator', navigator.serviceWorker)
	// 		window.addEventListener('load', function () {
	// 			navigator.serviceWorker.register('./src/app/sw.js').then(function (swRegistration: any) {
	// 				// swRegistration was successful
	// 				self.notifyMe(swRegistration);
	// 				swRegistration.pushManager.getSubscription().then(function (subscription: any) {
	// 					if (!(subscription === null)) {
	// 						console.log('User IS subscribed.');
	// 					} else {
	// 						console.log('User is NOT subscribed.');
	// 					}
	// 					self.subscribeUser(swRegistration);
	// 				});
	// 				console.log('ServiceWorker swRegistration successful with scope: ', swRegistration.scope);
	// 			}, function (err: any) {
	// 				// swRegistration failed :(
	// 				console.log('ServiceWorker swRegistration failed: ', err);
	// 			});
	// 		});
	// 	}
	// }

	// private notifyMe(swRegistration: any) {
	// 	this.notifStatus = Notification.permission;
	// 	// Let's check if the browser supports notifications
	// 	if (!("Notification" in window)) {
	// 		console.log("This browser does not support desktop notification");
	// 	}

	// 	// Let's check whether notification permissions have alredy been granted
	// 	else if (Notification.permission === "granted") {
	// 		// If it's okay let's create a notification
	// 		swRegistration.showNotification("Push notification", options);
	// 	}

	// 	// Otherwise, we need to ask the user for permission
	// 	else if (Notification.permission !== 'granted' || Notification.permission === "default") {
	// 		Notification.requestPermission(function (permission: any) {
	// 			// If the user accepts, let's create a notification
	// 			if (permission === "granted") {
	// 				swRegistration.showNotification("Push notification", options);
	// 			}
	// 		});
	// 	}
	// }

	// private subscribeUser(swRegistration: any) {
	// 	var self = this;
	// 	const applicationServerKey = this.urlB64ToUint8Array(this.chrome_notif_key);
	// 	swRegistration.pushManager.subscribe({
	// 		userVisibleOnly: true,
	// 		applicationServerKey: applicationServerKey
	// 	})
	// 		.then(function (subscription: any) {
	// 			self.notifStatus = JSON.stringify(subscription);
	// 			console.log('User is subscribed.', JSON.stringify(subscription));
	// 		})
	// 		.catch(function (err: any) {
	// 			console.log('Failed to subscribe the user: ', err);
	// 		});
	// }


	// private urlB64ToUint8Array(base64String: string) {
	// 	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	// 	const base64 = (base64String + padding)
	// 		.replace(/\-/g, '+')
	// 		.replace(/_/g, '/');

	// 	const rawData = window.atob(base64);
	// 	const outputArray = new Uint8Array(rawData.length);

	// 	for (let i = 0; i < rawData.length; ++i) {
	// 		outputArray[i] = rawData.charCodeAt(i);
	// 	}
	// 	return outputArray;
	// }

	// ngOnInit() {

	// }
}

