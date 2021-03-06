import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CityService {

	constructor(private http: Http) {

	}

	// retourneer alle cities
	getCities(): Observable<Response> {
		return this.http.get('assets/data/cities.json');
	}
}