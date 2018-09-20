import { Component } from '@angular/core';
import { SeriesService } from './series.service';

import { Observable } from 'rxjs';
import { Anime } from './core/models/anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anime: Anime;

  constructor(
    private seriesService: SeriesService
  ){

  }

  getTitle(): void{
    this.seriesService.getAnime()
      .subscribe(anime => this.anime = anime);

  }

  ngOnInit(){
    this.getTitle();
  }
}
