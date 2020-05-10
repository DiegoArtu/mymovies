import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshowdetail',
  templateUrl: './tvshowdetail.component.html',
  styleUrls: ['./tvshowdetail.component.css']
})
export class TvshowdetailComponent implements OnInit {

  tvShowdetail:any;
  seasons:any;
  tvCasts:any;

  constructor ( 
    public movieService: MoviesService, 
    public route: ActivatedRoute
  ) { 

    this.route.params.subscribe( params => {
      console.log(params);
      this.movieService.getTvShow(params['id'])
          .subscribe( (tvshow:any) => {
            console.log(tvshow);
            this.tvShowdetail = tvshow;
            this.seasons = tvshow.seasons;
            console.log(this.seasons);
            console.log(tvshow.created_by[0].name);
          })
    })

    this.route.params.subscribe( params => {
      console.log(params);
      this.movieService.getTvCast(params['id'])
          .subscribe( (tvcast:any) => {
            console.log(tvcast);
            this.tvCasts = tvcast;
          })
    })


  
  }

  ngOnInit() {
    window.scroll(0,0);
  }

}
