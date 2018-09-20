import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Anime } from './core/models/anime';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private animeUrl = 'https://kitsu.io/api/edge/anime/1';

  getAnime() : Observable<Anime>{
    return this.http.get<Anime>(this.animeUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
