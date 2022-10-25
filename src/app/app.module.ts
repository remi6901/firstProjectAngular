import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { SongComponent } from './song/song.component';
import { HightLightDirective } from './highlight.directive';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DisplayMovieDirective } from './display-movie.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ListPersonComponent,
    SongComponent,
    HightLightDirective,
    ListMovieComponent,
    DisplayMovieDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
