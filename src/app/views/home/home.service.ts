import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as env from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getDataHome(page, limit, search?) {
    const params = new HttpParams().set('page', page).set('limit', limit);
    if (search) {
      params.append('search', search);
    }
    return this.http.get<any>(`${env.environment.pathApi}/blogs`, { params });
  }
}
