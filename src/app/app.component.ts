import { Component } from '@angular/core';
import { SeriesService } from './series.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

  constructor(
    private seriesService: SeriesService
  ){

  }

  getTitle(): void{
    this.seriesService.getTitle()
      .subscribe(title => this.title = title);

  }

  ngOnInit(){
    this.getTitle();
  }
}
