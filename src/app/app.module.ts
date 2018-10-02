import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './anime/anime.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ HttpModule, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
