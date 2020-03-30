import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  moviedetail:any;
  prcompany:any;
  casts:any;

  constructor(
    public moviesService: MoviesService,
    public route: ActivatedRoute
  ) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.moviesService.getMovie( params['id'] )
          .subscribe( (movie:any) => {
            console.log(movie);
            this.moviedetail = movie;
            this.prcompany = movie.production_companies;
            console.log(this.prcompany);
          })
    })

    this.route.params.subscribe(params => {
      this.moviesService.getActors(params['id']).subscribe((cast:any) =>{
        console.log(cast);
        this.casts = cast;
      })
    })
  }

  ngOnInit() {
  }

}
