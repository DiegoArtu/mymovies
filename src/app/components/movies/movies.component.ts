import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies :any;
  populars:any;
  upcomings:any;
  tvShows:any;
  url    :string = 'http://image.tmdb.org/t/p/w500';

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {

    //Cinema
    this.moviesService.getNowPlaying().subscribe( (resp: any) => {
      
      this.movies = resp;
    });

    this.moviesService.getPopulars().subscribe( (resp:any) => {
      
      this.populars = resp;
    });
    
    this.moviesService.getUpcoming().subscribe( (resp:any) => {
      this.upcomings = resp;
    });
  }

}
