import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    MovieListComponent,
    MovieInfoComponent,
    AddReviewComponent,
    FavoriteMoviesComponent,
    PageNotFoundComponent,
    ImageCarouselComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
