import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private titleUrl = 'https://kitsu.io/api/edge/anime/1';

  getTitle() : Observable<String>{
    return this.http.get<String>(this.titleUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
