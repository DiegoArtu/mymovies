import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies :any;
  tvShows:any;
  url    :string = 'http://image.tmdb.org/t/p/w500';

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {

    //Cinema
    this.moviesService.getNowPlaying().subscribe( (resp: any) => {
      console.log(resp);
      this.movies = resp;
    })
  }

}
