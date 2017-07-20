import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class RingsService {
	private _baseURL = 'api/rings';

	constructor (private _http: Http) {}

	create(article: any): Observable<any> {
		return this._http
			.post(this._baseURL, article)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	list(): Observable<any> {
		return this._http
			.get(this._baseURL)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}
}
