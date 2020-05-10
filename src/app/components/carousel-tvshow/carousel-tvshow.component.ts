import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel-tvshow',
  templateUrl: './carousel-tvshow.component.html',
  styleUrls: ['./carousel-tvshow.component.css']
})
export class CarouselTvshowComponent implements OnInit {

  tvShowsCa:any;

  constructor(public _ms: MoviesService ) { }

  ngOnInit() {

    this._ms.getTvPopular().subscribe( (resp:any) =>{
      this.tvShowsCa = resp;
      console.log(this.tvShowsCa);
    });
  }

}
