import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: any;

  constructor(private http: HttpClient) {

    const headers: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer <Token>'})

    this.http.get('https://reqres.in/api/users/2', {headers}).subscribe()
  }

}
