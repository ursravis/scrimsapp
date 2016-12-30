
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ErrorLogService {

	private http: Http;


	// I initialize the service.
	constructor(http: Http) {

		this.http = http;

	}


	// ---
	// PUBLIC METHODS.
	// ---


	// I log the given error to various aggregation and tracking services.
	public logError(error: any): void {

		if ('production' === ENV) {
			this.sendToServer(error);

		}
		else {
			this.sendToConsole(error);

		}



	}


	// ---
	// PRIVATE METHODS.
	// ---


	// I send the error the browser console (safely, if it exists).
	private sendToConsole(error: any): void {

		if (console && console.group && console.error) {

			console.group("Error Log Service");
			//console.error( error );
			console.error(error.message);
			console.error(error.stack);
			console.groupEnd();

		}

	}


	// I send the error to the server-side error tracking end-point.
	private sendToServer(error: any): void {

		this.http
			.post(
			"./error-logging-endpoint", // Doesn't really exist in demo.
			{
				type: error.name,
				message: error.message,
				stack: error.stack,
				location: window.location.href
			}
			)
			.subscribe(
			(httpResponse: Response): void => {

				// ... nothing to do here.

			},
			(httpError: any): void => {

				// NOTE: We know this will fail in the demo since there is no
				// ability to accept POST requests on GitHub pages.
				// --
				// console.log( "Http error:", httpError );

			}
			)
			;

	}


}