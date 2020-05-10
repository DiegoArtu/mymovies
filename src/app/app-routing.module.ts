import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { PersondetailComponent } from './components/persondetail/persondetail.component';

const routes:Routes = [
    { path: 'movies',       component: MoviesComponent },
    { path: 'movie/:id',    component: MoviedetailComponent },
    { path: 'person/:id',   component: PersondetailComponent },
    { path: 'tvshows',      component: TvshowsComponent },
    { path: 'tvshow/:id',   component: TvshowdetailComponent },
    { path: 'populars' ,    component: PopularsComponent },
    { path: 'upcoming' ,    component: UpcomingComponent },
    { path: 'search' ,      component: SearchComponent },
    { path: 'searchtvshow', component: SearchtvshowComponent },
    { path: 'login',        component: SigninComponent },
    { path: 'signup',       component: SignupComponent }, 
    { path: '**', pathMatch: 'full', redirectTo: 'movies' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}