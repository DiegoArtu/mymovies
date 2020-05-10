import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  movies: any;

  constructor(public _ms : MoviesService) { }

  ngOnInit() {
    this._ms.getNowPlaying().subscribe( (resp: any) => {
      this.movies = resp;
      //console.log(this.movies[1].title);
    })
  }

}
