import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
	providedIn: 'root'
})

export class ApiService {
	baseURL: string = environment.baseUrl + '/api/v1';
    getData: any;
	
	constructor(private http: HttpClient,
		) {
	}

	get(url: string, params: any) {
		
		this.getData = this.http.get(this.baseURL + url, { params: params });
		return this.getData;
	}


}