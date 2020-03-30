import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  tvShows:any;

  constructor(
    public moviesService: MoviesService
  ) { }

  ngOnInit() {

    //TVshows
    this.moviesService.getTvOnTheAir().subscribe(
      (resp:any) =>{
        console.log(resp);
        this.tvShows = resp;
      })
  }

}
