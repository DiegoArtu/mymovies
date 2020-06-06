import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  tvShows:any;
  tvpopulars:any;
  toprateds:any;

  constructor(
    public moviesService: MoviesService
  ) { }

  ngOnInit() {

    //TVshows
    this.moviesService.getTvOnTheAir().subscribe(
      (resp:any) =>{
       
        this.tvShows = resp;
      });

    this.moviesService.getTvPopular().subscribe( (resp:any) => {
      this.tvpopulars = resp;
    });

    this.moviesService.getTvTopRated().subscribe( (resp:any) => {
      this.toprateds = resp;
    });
  }

}
