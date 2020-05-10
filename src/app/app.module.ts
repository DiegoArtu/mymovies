import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//Pipes
import { MovieImagePipe } from './pipes/movie-image.pipe';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PopularsComponent } from './components/categories/populars/populars.component';
import { UpcomingComponent } from './components/categories/upcoming/upcoming.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { SearchComponent } from './components/search/search.component';
import { TvshowdetailComponent } from './components/tvshowdetail/tvshowdetail.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { SearchtvshowComponent } from './components/searchtvshow/searchtvshow.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselTvshowComponent } from './components/carousel-tvshow/carousel-tvshow.component';
import { PersondetailComponent } from './components/persondetail/persondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    PopularsComponent,
    UpcomingComponent,
    MovieImagePipe,
    MoviedetailComponent,
    SearchComponent,
    TvshowdetailComponent,
    TvshowsComponent,
    SearchtvshowComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    CarouselComponent,
    CarouselTvshowComponent,
    PersondetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
